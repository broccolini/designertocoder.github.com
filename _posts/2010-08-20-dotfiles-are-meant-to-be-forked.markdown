---
layout: post
title: Dotfiles Are Meant to Be Forked
permalink: /2010/08/dotfiles-are-meant-to-be-forked
---

I'm a big fan of customizing your dotfiles. "Dotfiles" are the funky little files in your *nix-based home directory that allow you to customize your nerdery: change how your prompt looks, set up your $PATH, adjust settings for Ruby's IRB, completely change everything about Vim, and about a billion and a half other things. They're fun.

In many ways, this loose framework is one of the most important tools you'll use as a developer. It dictates how you use every other tool in your software arsenal. And everyone has different tastes, which I find fascinating: sit down at a crafty programmer's shell for a minute and you'll find that out pretty quick.

## So many lines

But I think it's a tool that few use, and amongst those, even fewer use *well*. Beginner-level developers tend not to dive into a lot of shell customization aside from a few aliases for Git, perhaps. And of those who do take the time to sit down and really personalize their shell, it's kind of a mixed bag. Look at [dotfiles.org](http://dotfiles.org), a nifty little site that's designed to help share your own dotfiles:

> Face it: you're proud of that 204-line .bashrc, and you should be! You've fine-tuned your prompt, carefully planned your aliases, and written some pretty time-saving functions over the years.

I've seen this a lot, and it drives me crazy. The same people who have very core ideas about how code should be refactored, minimized, and organized end up having these outlandish `.bashrc` files. They've probably started out with a tiny file a few years ago and just kept adding... and adding... and adding to it.

Obviously, messy dotfiles make mental organization difficult for yourself, but you end up missing out on some of the absolute best part of dotfiles: sharing the shit out of them.

## Sharing the shit out of them

Think about it: these are the files, aliases, and executables that programmers make *for themselves* to make their lives *more productive*. If you have a way to easily share your dotfiles amongst other developers, you're only going to make it easier *for yourself* to pull in someone else's `super-awesome-executable` that will make your own workflow amazing.

A 200-line jumbled `.bashrc` becomes a lot harder to share with people. Putting that on GitHub lets others pick and choose from it, but a flat file with the kitchen sink makes it harder to merge in other work from other dotfiles in your network, particularly as both you and your forks grow and personalize your dotfiles. You want to make it easier for people to share code, not harder.

## So, organize it

So, organize it. Do what programmers have been doing for years: make a smart system, follow it, and let others use it too.

There's a lot of great projects doing this:

- Ryan Bates ([@rbates](http://twitter.com/rbates)) fame has [his own network](http://github.com/ryanb/dotfiles) of 175 forks. His project centers around bash and zsh, TextMate, Vim, and Rails.
- Robby Russell ([@robbyrussell](http://twitter.com/robbyrussell)) started up [oh-my-zsh](http://github.com/robbyrussell/oh-my-zsh), a community of some 250 forks surrounding zsh.
- Ryan Tomayko ([@rtomayko](http://twitter.com/rtomayko)) open sourced [his dotfiles](http://github.com/rtomayko/dotfiles) with a great set of documentation and some 150 developers watching the repository.

## My dotfiles

Personally, I forked Ryan's Bates' dotfiles a few years back and loved it. It's great to be a part of a larger community- you can sit in GitHub's Fork Queue, browse what others have added, and within a click or two, add it to your own project.

After awhile, though, I started wanting a clean slate with a much better handle on organization. So, I started from my fork and pushed a new project.

<a href="http://github.com/holman/dotfiles"><img src="http://cl.ly/24fM/holman-dotfiles.png"></a>

What sets mine apart that I'm kind of in love with is that everything is broken into very specific and distinct areas:

{% highlight bash %}
  bin/
  cas/
  ec2/
  git/
  jruby/
  ruby/
  system/
  vim/
  zsh/
{% endhighlight bash %}

This makes sense, at least to me: too many times I'd be in the Git mindset, trying to add a new alias but never remembering where to find it in the long `aliases.zsh` file I had. Now if I'm adding a new alias for Git I can go straight into `git/`, edit `aliases.zsh` and know that all the aliases I'd need for Git is contained within that file. Any new directories created get automatically added to your shell, too. It's really helpful, and lets you scale your dotfiles a lot easier. More importantly, if I'm browsing a fork's directories — which are likely to be very different than mine — I can immediately determine the areas of their code I might be interested in.

So, [fork it](http://github.com/holman/dotfiles). Or, if not mine, then fork some of the awesome other projects I mentioned. Or come up with your own way of organizing your stuff and share it. Everyone's got their own way of streamlining their system, and sharing dotfiles helps everyone.
