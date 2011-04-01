---
layout: post
title: Simplifying Rails Controllers with named_scopes
permalink: /2010/01/simplifying-rails-controllers-with-named_scopes
---

So [`named_scope`](http://api.rubyonrails.org/classes/ActiveRecord/NamedScope/ClassMethods.html) is great. It's a quick and clear way to share common SQL fragments within your app by defining them in your models. It saves you a lot of repetition: instead of calling `Article.find(:all, :order => 'views desc')` all over your app, you can define `named_scope :popular, :order => 'views desc'` in Article, and then call it with `Article.popular`. There's a lot of good stuff in it; I encourage you to check the [initial edge Rails post from Ryan Daigle](http://ryandaigle.com/articles/2008/3/24/what-s-new-in-edge-rails-has-finder-functionality) for more examples.

One strong benefit of `named_scope` (or, `scope`, as it's been [renamed in Rails 3](http://github.com/rails/rails/commit/d60bb0a9e4be2ac0a9de9a69041a4ddc2e0cc914)) that wasn't immediately apparent to me was how much logic you can strip from your controllers this way. Not just logic about which scoped SQL fragment to leverage, but a lot of the logic surrounding how you initially might set up your action before it even gets to your Model queries. This originally stemmed from a discussion with [David Kelso](http://twitter.com/zaius) over Twitter, where he tweeted about simplifying some common controller code that's familiar to all of us- something similar to this generalized example:

{% highlight ruby %}
  conditions = ['']
  
  if params[:city].present?
    conditions[0] += "city_name = ?"
    conditions << params[:city]
  end

  if params[:state].present?
    conditions[0] += ' AND ' unless conditions.first.blank?
    conditions[0] += 'state_name > ?'
    conditions.push params[:state]
  end

  @users = User.find(:all, :conditions => conditions)
{% endhighlight %}

In other words, you make a variable to hold your conditions (and maybe other variables for any group_bys or joins) and then conditionally build them up- but only if the user submitted values for those particular fields. There's certainly some refactoring we can do already (or avoid everything by using the ever-excellent [Searchlogic](http://github.com/binarylogic/searchlogic) or a more capable Sphinx or Solr backend), but it's not just a search-specific problem, of course.

Our solution has evolved over time to use a `named_scope` to handle the conditionals in the model... something which didn't seem entirely obvious to me in these cases at first. It reduces the controller logic dramatically:

{% highlight ruby %}
  @users = User.with_city(params[:city]).with_state(params[:state])
{% endhighlight %}

...with `named_scopes` defined as:

{% highlight ruby %}
  named_scope :with_city, lambda {|city| city.present? ? {:conditions => {:city_name => city} : {}}
  named_scope :with_state, lambda {|state| state.present? ? {:conditions => {:state_name => state} : {}}
{% endhighlight %}

This results in a far more readable controller, and, more importantly, you can reuse this all over the place now. The conditionals have been tucked away in lambdas in the model. If the passed-in argument isn't blank, the argument is forwarded as a condition; otherwise a blank hash is forwarded on. (Note: if you're using lambdas in `named_scopes`, you must ensure you're returning a hash, otherwise you'll explode a bit on some funky curly brace errors).

In other words, `User.with_city(nil)` or `User.with_city('')` will generate `User.find(:all, :conditions => {})`, returning all records. It might seem a little counter-intuitive at first, but we tend to look at it as asking, "Hey, give me all of the users with this particular city that I'm not going to tell you about", in which case it makes a bit more sense when it replies "Well, if you're not going to be specific, here's all of them". The other hidden benefit is that this is all much easier to test; the less controller tests the better, in my humble and lazy opinion.
