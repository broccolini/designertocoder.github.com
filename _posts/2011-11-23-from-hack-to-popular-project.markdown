---
layout: post
title: 'From "Hack" to "Popular Project"'
---

Last Monday, I sat down to hack.

After a few hours, I open sourced the code. By the end of the week, it had
1,000 watchers and 70 forks on GitHub, and 500 upvotes on Hacker News.

It's my favorite example of open source recently. Here's why it worked.

## The project

The project was [spark][spark]. It's a shell script that lets you graph tiny
[sparkline][sparkline] graphs from your command line. A quick example:

{% highlight bash %}
$ spark 0 30 55 80 33 150
▁▂▃▅▂▇
{% endhighlight %}

## Common ground

I wrote spark in bash shell. From the start, **this gave me a huge audience**.
Shell is a [glue language][glue]; it cuts across disparate communities as a
common foundation that we can all use. If spark were just another Ruby script I
wrote, I'm fairly certain it would have been largely ignored. Requiring a
nonstandard runtime already cuts out a big chunk of the market that might not
have it installed or aren't interested in digging into another environment.

It's fun to bring different communities together. You get exposed to very
different perspectives.

## Simplicity

As a shell script, all you have to do is copy that single script into your
`$PATH`. Done.

Don't underestimate simplicity as marketing. If your project is easy to try out,
you reduce the time from the initial "oh wow!" statement to the final "I'm
going to tweet/upvote/fork this" statement. Every minute that passes between
the two reduces the chance that someone will end up sharing your project.

## Code can be fun

spark is a silly little project that took a couple hours to come up with the
idea, code, and to ship. The concept isn't very difficult to wrap your head
around, and it's really easy to reimplement in a higher-level language. What's
more, sparklines aren't complicated, scientific graphs; spark is designed to be
a *fun project*.

I exploited this. From the start, my `README` had some interesting examples:
commits by author, number of characters per line of a file, and the magnitude
of earthquakes over the last 24 hours. I added a [wiki page][cool] to keep
track of other cool usage of spark (which includes zany things like a sparkline
of Beijing's air quality).

Soon after launch, I added a wiki page for [alternative implementations][alt],
too. Very quickly a small community arose, with some awesome results:
implementations in Ruby, Python, Haskell, Java, Lisp, and many others. An
implementation in obfuscated C whose code
[actually looks like a sparkline][vicent]. An [npm package][clark] for adding
spark to Hubot. The creator of Redis, Salvatore Antirez, [said it best][antirez]
while creating his own implementation:

> Sometimes coding something useless, funny, from scratch, is the best way to
> relax before the next burst of work.

Try to support people's playful moods. Everyone gets in a rut sometimes, and
they're just waiting for you to inspire them out of it.

## Okay, your turn

spark is somewhat unusual. It's a generic, simple, interesting library that
appeals to a broad segment of the developer population. But different aspects
of spark's appeal can stand alone and be useful in your own projects.

Don't be afraid to experiment. Experimenting with sparklines drove a lot of
interest to my project, which was great. That was the least important part,
though. Seeing everyone excited to reimplement my project? Seeing developers
rush into applying spark to crazy datasets? Getting message after message of
helpful pointers on where my code could be improved? All of these were what
made this project so much fun.

It all stemmed from a brief moment of, "hey, this afternoon I'm going to sit
down and hack on something fun".

[spark]:     https://github.com/holman/spark
[sparkline]: http://en.wikipedia.org/wiki/Sparkline
[glue]:      /posts/glue-languages
[alt]:       https://github.com/holman/spark/wiki/Alternative-Implementations
[cool]:      https://github.com/holman/spark/wiki/Wicked-Cool-Usage
[vicent]:    https://gist.github.com/1368661
[clark]:     https://github.com/ajacksified/Clark
[antirez]:   https://twitter.com/#!/antirez/status/136921138180788224
