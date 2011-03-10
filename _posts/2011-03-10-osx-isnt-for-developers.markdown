---
layout: post
title: "OS X Isn't for Developers"
---

Apple had about 2.06 percent of the US desktop market in 2003. By 2010, OS X
had about 10.9% of the market.<sup>[1][marketshare]</sup> There's a slew of
reasons for this growth, but I think a large part of it is the migration of
software developers from Windows to OS X starting in the early 2000's.
Attracted by the reasonable UNIX toolchain and the straightforward usability
approach, more and more geeks adopted OS X as their primary machines, saw it
also doubled as a decent computer for non-techies, and its popularity grew from
their recommendations.

This wasn't just about Objective-C developers. Java, Ruby, Python, Perl, and
PHP communities all found a home for themselves in OS X. That Apple provided
first-class, installed-by-default support for all of those languages
dramatically lowered the barriers for the technically-inclined to dabble.

## gcc

A blight on this installed-by-default support is the lack of compilers on OS X.
The recommended course of action is to pull out your OS X installation CD,
install Xcode, and you'll get the specialized gcc builds from Apple customized
for Darwin. This, again, is not about Objective-C developers, since they will
need to install Xcode regardless. This is about the rest of the language
ecosystem that grew on OS X. For example, Ruby's predominant package manager,
RubyGems, can allow developers to drop down to languages like C for
additional speed or functionality.

For years this blight was a pain, but bearable. If you wanted to install a gem
that needed to build C extensions, you just needed to remember to find your
install DVD, install Xcode, and go for it. With the growth of the internet,
pretty quickly the process switched to downloading the installer from apple.com
instead. That was somewhat bearable when Xcode 2.1 was less than 800MB.

## Xcode 4

This week, Apple released Xcode 4. It clocks in at a 4.5GB download, and is $4.99
in the AppStore. This is the first time Apple's charged for Xcode. It's
possible that this will change before OS X Lion ships, but it's still a
troubling prospect today.

If I want to release a great new Ruby gem that uses a C extension or library, I
need to ask prospective users of that gem to:

- Spend $4.99 in the App Store
- Download a large 4.5GB file
- Spend a decent amount of time installing XCode
- Sacrifice 15GB of disk space to an app they likely won't use
- Install my gem

### It's not about the money

Though I don't think Apple should charge for Xcode, $5.00 isn't a lot of money
to Cocoa developers... I suspect most would pay a lot more. It is a lot of
money to someone who just wants to try a gem, to someone who has to justify a
business expense, to someone who isn't old enough for a credit card. It's the
act of throwing up such a huge barrier to a casual, interested user that is
offensive.

### It's not about the language

I bring up Ruby because I'm a Rubyist, but it doesn't just affect Ruby
developers. It affects *all* developers. One only needs look at [Homebrew's
Formula directory][homebrew] to see all of the software this impacts.

The thing that kills me about this is language transfer. I like building
general-purpose libraries. [boom][boom] and [stars][stars], for example, can be
used without any knowledge of Ruby. If someone goes outside of their comfort
zone into a language they're unfamiliar with, it's important to make that
process as smooth as possible. On OS X, it's getting worse and worse.

### It's not about the platform

Okay, it is. It's Apple's fault for not including gcc by default in OS X. But
what I mean by this is that **this issue impacts all other platforms**. As an
industry, we want *more* people building libraries of *all sorts* in *all
languages*. It doesn't matter if you're sitting comfortably in your
self-compiled BSD world using your favorite free build chains... we want every
facet of our industry to be pushing the envelope. Projects in the language you
don't use may inspire you down the road to build something you would use.

By making it more difficult to ship compilable code, we miss out on faster
interpreted-language libraries. We miss out on easy abstractions to rock-solid,
battle-tested C libraries. We make it harder for people to dabble.

## Fixes

There's three scenarios here:

- **Apple releases their gcc package**, installs it in Lion by default, or
  otherwise makes it available. This would be excellent. The holy grail would
  be if Homebrew could use this and we could just run `brew install gcc`. It
  would be a huge, huge impact to our community.
- **Someone else releases gcc for a Mac**. Again, this would lead to a `brew
  install gcc`. This would be great, and possibly more likely than waiting on
  Apple to do the right thing. I'm just an interpreted language asshole though,
  so I really don't have much of a clue as to how in-depth a challenge it would
  be to compile gcc for Apple's system frameworks. My guess is it's daunting,
  otherwise we'd have it three years ago.
- **Nothing happens and things get shittier**. This is probably the most
  likely. It's also the most depressing.

It's a frustrating position to be in. We are, of course, subject to Apple's
whims on this. Free software advocates will point out that they've been saying
the same thing for years, and that's true- we all give up some flexibility by
being on OS X. It's a tradeoff. What is dismaying is that, all things
considered, OS X has been a wonderful boon to software development in general
in the last decade. They've done a lot of things right. You still won't see PHP
installed on Windows any time soon.

I just hope Apple has an interest in making this decade as fruitful for
software developers as the last decade. Seeing OS X dwindle as a developer
platform would be such a waste.

[marketshare]: http://en.wikipedia.org/wiki/Macintosh#Market_share_and_user_demographics
[homebrew]: https://github.com/mxcl/homebrew/tree/master/Library/Formula
[boom]: https://github.com/holman/boom
[stars]: https://github.com/holman/stars
