---
layout: post
title: "Facelette: On TechCrunch in Three Hours and $0"
hn: http://news.ycombinator.com/item?id=1816788
permalink: /2010/10/facelette-on-techcrunch-in-three-hours-and-zero-dollars
---

Yesterday, Apple announced [FaceTime for
Mac](http://www.apple.com/mac/facetime/). A couple hours later, I launched
[Facelette](http://facelette.com), which is basically like Chat Roulette for
FaceTime. Post your FaceTime ID, we'll hook you up with a stranger, and you
eagerly FaceTime with them.

Response has been great. I'm writing this about half a day after launch, and my
original tweet has been retweeted 125 times, I [made
TechCrunch](http://techcrunch.com/2010/10/20/facetime-chatroulette-facelette/)
in three hours post-launch, and there's been about a tweet a minute about
Facelette this morning. All of this for about an hour of work, and $0 invested.

Basically, I lucked out. This is the dumbest experiment I've done, and I
happened to come upon a novel idea that I figured people would really want to
talk about as soon as they heard it. It's probably not easily repeatable, but
I'd thought I'd share some of my thoughts on the journey itself.

## Technical

I'm not sure things could get more basic on a technical level. There's a time
and a place to experiment with new technology and new platforms... this was not
one of them. I just wanted to get something out the door as fast as possible.
(In my mind, literally **hundreds** of developers were all working on the same
idea! What if I weren't first? It would ruin everything!)

The app itself is 34 lines of application logic in Rails 3.0. Add a stylesheet,
add some HTML, about an hour of time, and you have Facelette.

I'm currently spending zero dollars on the project. It's all hosted on a free
<a href="http://heroku.com">Heroku</a> instance. I host the code through
[GitHub](http://github.com). The domain itself, facelette.com, was somewhere
around $20, but my domain registrar refunded the money. I use
[iWantMyName](http://iwantmyname.com), which is the cleanest, craftiest
registrar I've seen- they have one-click installs for things like Heroku,
GitHub Pages, and Google Apps. Totally awesome, and it's a credit to them that
they're supporting customers who recently dip into some good buzz.

## Usage

The best part of this all was that the damn thing worked. I mean, that's to be
expected since there's not much there in the first place, but this project was
special to me just because *I could talk to my users in real-time*. That was
the entire point of the site. It was a total blast. Within a few hours, I had
talked with Oklahoma, Florida, Brazil, Russia, Spain, and even my arch-nemesis
from BitBucket, [Jesper](http://twitter.com/jespern), in Greece. The entire
thing is such a trip, I love it.

Last night, concurrent FaceTime users were hovering around 3-6; this morning
has been more towards 10-12.

## Monetization

I've seen the post-mortems on Hacker News. I know what I'm supposed to do. I'm
supposed to show you graphs of traffic received from Hacker News vs. TechCrunch
vs. Twitter vs. Whatever else. I've had people ask to run ads on Facelette,
I've had recruiters tell me I'm a great fit for their Stealth Startup that's
written in PHP and other languages I no longer remember, and everyone is
convinced their service would make Facelette a real smash hit.

The Startup World is great because of this. So many people with so much
ambition, trying to squeeze out The Next Big Thing at every turn. Someone puts
together a weekend project and Hacker News descends on them, suggesting
Facebook integration! And real-time chat! And SEO! And node.js! And tips on
their first hire!

I've also come to loathe this mentality, at times. It's the same mentality
where someone whips up a two-page website and asks people to "review their
*startup*!" I think *startup* is a phrase that's been abused. You've made a
project, or a mashup, or a hack, not a *startup*.

And that's cool! Embrace that. More people need to do stupid shit. I mean that
from the bottom of my heart. Don't do it to make money. Don't even do it to
learn *hip new technology X*. Do it for the sake of doing something stupid.
We're in the most ridiculous industry on earth. You can whip something up in a
few hours and before you know it, people around the world will be using it.
That is **insane**. An architect or a fireman or a lawyer or anyone else can't
say that for their profession or their hobby.

> when you don't create things, you become defined by your tastes rather than
> ability. your tastes only narrow & exclude people. so create. 
>
> <cite>[_why the lucky
> stiff](http://favstar.fm/users/_why/status/881768089)</cite>

Don't be afraid to build things for the sake of building them. Since Facelette
launched, you know what's put the biggest smile on my face? It definitely
wasn't being TechCrunch'd; it was two tweets and a comment that said Facelette
put a smile on *their* faces.
