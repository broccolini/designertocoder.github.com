---
layout: post
title: Impress the Ladies with Legacy Migrations
permalink: /2010/01/impress-the-ladies-with-legacy-migrations
---

If there's one thing I've learned from my experiences with women, it's that they secretly can't control themselves if a man is there to sweep them off their feet with tales of legacy data migration suavity. (If you're wondering why I didn't title this in the reverse, it's simply because I didn't feel that it was any particular secret that every man is most attracted to legacy data conversions.)

So, you're a few weeks away from launch day and you have a fair amount of data in an older database structure and you want it accessible to your new app. The possibilities here are really quite endless, and it depends entirely on a multitude of questions: do you need access to the old data in the old app? Is speed an issue? Can you fill records after the fact, or do you need them all immediately in the new format pre-launch? Is this a one-off or a regular thing? Will anyone notice if you instead just add a couple hundred thousand rows of quotes from *Dr. Quinn, Medicine Woman* instead of bothering with a possibly delicate transfer? These are all equally important questions. I recently did one such transfer, and here's my process.

I actually chose a few different routes. A lot of the data was going to be in a similar structure in the new system and the quicker the better, please. For those cases, you're best off to do everything via database dumps and raw SQL commands. By far, that's going to be the fastest way of doing things. Dropping out into Ruby land is going to be painfully slow. But in some cases, that's a tradeoff worth making. In this post, I'm going to detail the latter process. The benefit of pushing data through Rails is that you have access to model-specific validations, callbacks, and relationships. If you're dealing with complex data structures spread over multiple models and relationships (both in the old and new apps), sometimes the longer processing time is a decent tradeoff, particularly if you can kick off the process and slowly migrate post-deploy.

The first thing to do is make the data accessible to your new app. I've found it's easiest to create a temporary table that you can nuke when you're done. If we're migrating Users between totally different codebases, I'd use `mysqldump` to dump your old `users` table and import it with a prefix: `old_and_busted_users`, for example.

To actually use this data I've seen a few different approaches. The full-blown route is to `script/generate model OldAndBustedUser`, which gives you access to an ActiveRecord instance of the `old_and_busted_users` table. That's fine, and it offers you some additional freedom in terms of testing and relationships, but I've found that in a number of cases you don't really need to scaffold yourself out a full-fledged model. For the most part, you just need access to the table and to some relationships. Besides which, generating an entirely new model for your app means you're more likely to keep this old code polluting your new code, which really kind of sucks if you're only going to be doing this once.

The trick I've used is to define all of your models inline. For example, if you're running this as a rake task:

{% highlight ruby %}
  namespace :import do
    desc "Import our old and busted users into the new hotness."
    task :users => :environment do
      class OldAndBustedUser < ActiveRecord::Base ; end
      class OldAndBustedProfile < ActiveRecord::Base ; end
    end
  end
{% endhighlight %}
    
It's a little funky defining classes like that, but for most scenarios you just don't need much scaffolding. If your task balloons to hundreds of complex, intricate lines, definitely think about refactoring quite a bit more. The model names should coincide to your temporary tables. If they don't, you can do so with `set_table_name`.

Once you have your temporary models set up, you can use them as you'd expect:

{% highlight ruby %}
  task :users => :environment do
    class OldAndBustedUser < ActiveRecord::Base ; end
    class OldAndBustedProfile < ActiveRecord::Base ; end
    
    OldAndBustedUser.find_each(:batch_size => 2000) do |old_and_busted_user|
      User.create(:name => old_and_busted_user.name, :email => old_and_busted_user.email)
    end
  end
{% endhighlight %}
    
...the `find_each` being important since we're in Ruby Land, where instantiating huge object arrays willy-nilly will deplete your available memory faster than the alcohol you experienced on your 21st birthday. You also can set up relationships as needed, too:

{% highlight ruby %}
  task :users => :environment do
    class OldAndBustedUser < ActiveRecord::Base
      has_one :profile, :class_name => 'OldAndBustedProfile', :foreign_key => 'profile_id'
    end
    class OldAndBustedProfile < ActiveRecord::Base
      belongs_to :user, :class_name => 'OldAndBustedUser'
    end

    OldAndBustedUser.find_each(:batch_size => 2000) do |old_and_busted_user|
      User.create(:name => old_and_busted_user.name,
                  :email => old_and_busted_user.email,
                  :twitter_handle => old_and_busted_user.profile.twitter)
    end
  end
{% endhighlight %}

Now for the Pro Tips: if you're doing a lot of data importing, you're bound to have to wipe your database and repopulate a gaggle of times. I found a lot of the manual steps in dumping data to be a pain, particularly in terms of importing into the temporary table. So I'd suggest making use of `sed` for some fun file replacement (which sure beats having to pick through `vi multi-hundred-megabyte-db-dump` every time). Assuming you're using regular `mysqldump` output:

{% highlight bash %}
  sed -i '' -e 's/`users`/`old_and_busted_users`/g' multi-hundred-megabyte-db-dump.sql
{% endhighlight %}

Your mileage may vary on that particular `sed` command, though. OS X uses BSD `sed`, Linux uses GNU `sed`. I've found the difference to be the spacing after the -i and before the single quotes (denoting an in-place substitution, which is usually safe enough considering you can always re-dump from MySQL if the file gets corrupted).

Since we're dealing with Rails, we get all the fun magic methods, but they're not all fun and games: they'll overwrite your `created_at` and `updated_at` fields. Have no fear; `record_timestamps` is here:

{% highlight ruby %}
  ActiveRecord::Base.record_timestamps = false
  method_that_does_crazy_zany_stuff
  ActiveRecord::Base.record_timestamps = true
{% endhighlight %}

You'll also want to think about turning validations on or off (with a `user.save` or `user.save(false)`)- validations are good for ensuring the validity of your data, but it's another point of slowness, and if you're importing legacy data there's a good chance your data might break validations anyway.

If all else fails, IMDB maintains a startlingly [large repository](http://www.imdb.com/title/tt0103405/quotes) of *Dr. Quinn* quotes.
