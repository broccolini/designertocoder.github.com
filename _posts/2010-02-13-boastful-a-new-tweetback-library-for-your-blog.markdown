---
layout: post
title: Boastful, a new tweetback library for your blog
---

I [alluded to this yesterday](http://twitter.com/holman/status/9004291322), but finally have been able to release [Boastful](http://github.com/holman/boastful), a jQuery plugin that grabs "tweetbacks" for your blog. Tweetbacks are like trackbacks- every time someone mentions your blog on Twitter, you can pull in those mentions and print them out on your blog. This has gained in prevalence lately with 3rd party services like Disqus, which grabs all those tweets and integrates them with your normal blog comments. That's a really crappy solution.

Every year or so, the blogosphere circles the wagons and self-germinates on the topic of blog comments. Most of the elitist bastards of the internet — myself included — go sans-comments for ease of living without spam and for added focus on your writing. So I'm not terribly interested in pulling in tweets themselves and tossing them on my blog, particularly since I don't have traditional blog comments in the first place. But I like the idea of at least offering some aspect of dialogue, some aspect of community to the site. The Disqus way of doing things — regurgitating tweets on-page like a comment — never made any sense to me for the simple fact that tweets aren't comments. It's not just Disqus, either; almost every implementation I've seen works this way. This is why if you see this functionality on a site it's almost always tweets that take the form of "RT @someone RT @someoneelse RT @originator Hey! A link! http://example.com". 140 characters (minus your short URL) is not a lot of space to add your personal flavor. But it's kind of cool to see who's linking to you, what the general sentiment is, that sort of thing.

So I tackled this a bit differently. You can see it in my blog footer now (once this post gets mentioned online, that is). It looks like this:

<div style="text-align: center; padding-top: -1em"><img src="http://files.droplr.com/files/11322372/oO5q.jquery.boastful.png" alt="boastful screenshot" /></div>

Just the avatars, with a tooltip that lets you look at the tweet if you really are interested. Simple, not obtrusive, and hopefully something where the average reader might say "Hey, I can get some exposure just by tweeting this? Nifty!" (Actually, it might be nice to pull in follower numbers or Twitter bios here, too, as a way for existing readers to find more interesting people to follow. But that'll have to wait for a future version.)

The other difference with this is that it uses [Topsy's](http://topsy.com) API, which handles all the yucky details of old data that Twitter normally wouldn't return results on, and breaks through URL shorteners to get to the actual page in question (usually a search for zachholman.com/some-page won't match a shortened url like is.gd/some-string). So no matter how they link to your blog post, it should still be picked up by boastful.

The [code's on GitHub](http://github.com/holman/boastful), and you can browse the readme there for some additional background on the technical side of things. Hope you dig it, fork it, contribute back, and be merry. Or tweet a link to this page over Twitter. Your mug will look good down there.