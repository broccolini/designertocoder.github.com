---
layout: post
title: Enslaving Branches&#58; How GitHub Does Enterprise
---

I work on [GitHub Firewall Install](http://fi.github.com/), GitHub's enterprise-level product. FI is aimed at larger companies that want to host their own version of GitHub on their own hardware. We ship them a full, self-contained stack, and once installed they have their own private github.com on their network. Pretty cool.

It's an interesting product to work on, and it also comes with its fair share of challenges. One of these challenges is figuring out what type of development workflow works best for us. It's a type of challenge you might find yourself facing sometime, too.

## Merges

The big question for FI is merges. Most new development is done on `master`, and we'd like to pull that into our separate branch for FI. The `fi` branch in particular is somewhat different from a normal branch in that it's **long-running**. It needs one-way merges in from `master`, but it also has its own active codebase to maintain as we simplify FI deployment, add enterprise-y features like LDAP and CAS support, and remove some github.com features that aren't relevant in the enterprise.

Needless to say, a good test suite is a godsend. Merging itself may be difficult, but the ability to have your tests immediately point out to you what may be a trouble area is fantastic and, in my view, a prerequisite for this type of work.

If I had to submit a technical schematic of how our merging process looks like from a developer standpoint, I'd probably whiteboard something like this:

<p style="text-align: center">
  <img src="http://cl.ly/1o8n/content" />
</p>

This is primarily because the merge ends up looking like this:

- By default, I probably want everything in `master`. That's where the new stuff is, and that's what we're looking to pull down.
- Except if the change in question is in conflict with an FI-specific change we've made, in which case we want to keep the FI change around.
- Except if THAT change in question is a new version of something we've since changed on FI, which means we need to take what's in `master`, overwrite what we've done on `fi`, and then rewrite everything on `fi` using the new `master` changes so it's tailored for FI.
- And all the while keep a look out for entirely new stuff in `master` that's going to blow up `fi`.

That's a little specific to our domain, but there's plenty of other areas where a similar workflow happens: concurrently developing version 2.0 with your deployed 1.0 version, splitting your product into multiple products, or spinning off smaller parts from an existing product that subsequently share the same core library. It doesn't become just a simple merge; you unfortunately have to be a little smart about it. But there are some crafty ways to tackle it.

## Conditional Statements
Conditional statements are one way of doing it. It can be a simple as this:

{% highlight ruby %}
  if Rails.fi?
    destroy_planets_with_lasers
  else
    destroy_planets_with_love
  end
{% endhighlight ruby %}

In other words, it's somewhat similar to how [Flickr does feature flipping](http://code.flickr.com/blog/2009/12/02/flipping-out): explicitly branch which code you want to run. Deep in my core, I know I'm not super happy with this. It's unclean, adds verbosity, and you can end up repeating yourself a lot. But remember: merging is what's difficult, and adding verbosity ends up really improving your ability to merge. If instead in the above code we just changed `destroy_planets_with_love` to `destroy_planets_with_lasers` inline without the conditionals, you end up losing the context of why that change was made. By glancing at the conditional I can easily grok 1) the change, and 2) what we changed from. All of this can be found in version control, of course — I could `git log` through and find the original context we branched from — but it's a huge pain in the ass during merges to do that. In this case, verbosity is great.

It's not even just about the merges, either; the branch itself has a lot of specific FI code. Filesystems are simplified, enterprise features are maintained. It's sometimes hard to mentally jump from one codebase to the other, and by explicitly delineating what happens in FI versus what happens on github.com, it offers us a way to easily understand code by showing us the differences. Once we remember how github.com does it, things usually fit into place mentally quite quickly.

## Conditional Inherited Modules

One of the things [Rick Olson](http://techno-weenie.net) did while refactoring some repo creation code on github.com was to set up what I'd call something like conditional inherited modules. This works great for repository creation: we do a lot of things on github.com when you create a repo, and we do a lot of things on FI when you create a repo. They both follow a similar workflow, but those workflows are different. So set up one module that you can conditionally inherit from:

{% highlight ruby %}
  module GitHub
    RepoCreator = Rails.fi? ? Fi::RepoCreator : Web::RepoCreator
  end

  module GitHub
    module Web
      class RepoCreator
        def create_directories
          # write to a networked disk
        end

        def set_permissions
          # set permissions
        end
      end
    end
  end

  module GitHub
    module Fi
      class RepoCreator < GitHub::Web::RepoCreator
        def create_directories
          # write to a simple file system
        end
      end
    end
  end
{% endhighlight ruby %}

It's straightforward Ruby inheritance, but for those who don't use Ruby, the simple version is that on any branch we can just access `GitHub::RepoCreator` and create a repo appropriately for that branch. In this simplified example, we write to disk differently so we override `create_directories`, but FI still inherits `set_permissions` because that part of the process is the same on both branches.

This is also really flexible: after we did this there was a new option we wanted to add to FI that lets sysadmins create repos a little differently on their network. This makes it really easy to do that- we could just override `set_permissions` and not have to worry about much else.

The other benefit is that all of our FI-specific code is tucked neatly away in one file, and there's only one main conditional to deal with. This type of inheritance works great for instances where you have similar workflows but divergent implementations. But there are times where everything's just totally different, too.

## Overriding Functionality

Sometimes FI itself is completely different. GitHub uses [Smoke and Chimney](http://github.com/blog/530-how-we-made-github-fast) to route your request to a myriad of networked file stores. That's great for github.com but a bit overkill for FI. For things like that we can swap that functionality out wholesale. If we have something like `CHIMNEY = Chimney.new`, we can instead instantiate our own FI Chimney mock that responds to Chimney's methods but doesn't actually perform operations (or performs them in a simplified manner). You end up avoiding a lot of lower-level code changes all over your project and get to centralize your changes in one tidy place.

## Now, Ship Amongst Yourselves

Some code will lend itself to needing only a few tweaks to keep things current with `master`, some might be too divergent to the point where you can only fork it and split the two forever. Most will fall in-between the two. You'll end up developing your own strategies to tackle your own idiosyncrasies. And who knows, maybe in the next few years there'll be a `git merge-for-reals-like-figure-things-out-real-good` that'll take care of even more of this for us (at least git's merging skills are quite good- I shudder to think of doing this workflow in Subversion).

Anyway, merge on. And for the love of god, merge frequently.