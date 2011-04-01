---
layout: post
title: Text Snippets. Boom.
permalink: /2010/11/text-snippets-boom
---

Yesterday I released [boom](https://github.com/holman/boom), an open source
library that manages text snippets on your command line.

"WHAT DOES THAT MEAN?!?!?!‽‽‽‽" you say, your caps lock bleeding into my soul.

It means you now have a quick way to stash and retreive pieces of text. Like
URLs. Or email snippets. Or a list of insults ready at a moment's notice for
internet flamewars. I spend so much time with a billion shell sessions open
that having this accessible on the command line was a no-brainer for me.

Check [boom's README](https://github.com/holman/boom#readme) for the complete
usage low-down, but basically it goes down like this:

{% highlight bash %}
    $ boom gifs kyle-wink "http://cl.ly/326M/content#.gif"
    Boom! "kyle-wink" in "gifs" is "http://cl.ly/326M/content#.gif". Got it.

    $ boom all
      gifs
        kyle-wink: http://cl.ly/326M/content#.gif
{% endhighlight %}

And then maybe Kyle says something snarky in Campfire tomorrow and I think to
myself, hey! I have a hilarious animated gif of him winking at me. Where did I
put that again?

{% highlight bash %}
    $ boom kyle-wink
    Boom! Just copied http://cl.ly/326M/content#.gif to your clipboard.
{% endhighlight %}

And then it's ready to be pasted, earning me lots of stars in our Campfire
transcript as everyone has a jolly laugh.

<img src="http://cl.ly/326M/animated.gif" />

The [code's on GitHub](https://github.com/holman/boom), of course, and I'd love
to hear how you're using boom, if you're doing something particularly cool with
it, or if you've got a bugfix or pull request for me to add.
