---
layout: post
title: Blog Marketing for Ego-Centric Assholes
hn: http://news.ycombinator.com/item?id=2791007
---

<img src="http://cl.ly/8bI0/pageviews.png" width="650" height="150" alt="Page views" class="noclip" />

My official job title at GitHub is "[Ego Surfer][gh]", a tongue-in-cheek
reaction to my [stars][stars] project, a command line interface I wrote to tell
me who have starred my tweets. GitHub job titles are given to employees in a
comical fashion, but in my case I like to think it's fairly accurate: I really
like to discover and manage people's reactions to my blog posts, tweets, and
product launches.

I use "assholes" in the title somewhat loosely; I hate spam like the rest of
you and being an asshole who pushes their work with wanton disregard for how
disrespectful they're being is never a good idea. That said, if you're writing
good content that could stimulate an appreciative audience, I see nothing wrong
with putting your best foot forward.

This isn't some old-school post about getting indexed in Technorati. Getting
buzz about the posts you write today is a bit different. How you initially
react to someone's *own* reaction to your work can turn your small buzz into a
lot of fucking eyeballs.

## Writing your launch tweet

Twitter is the most important technology to leverage. As I wrote in
[Fame][fame], tweets and their subsequent retweets can really snowball a
mediocre post into one that's discussed all over the internet.

Not all tweets are created equally. Here's how to win:

- When you write a post, simultaneously tweet a link to it.
- Make the tweet body interesting. Either overtly make it vague, or catchy. I
  tend to swear a lot, which can jump out at you. (Or backfire, of course.)
- It's helpful to get others to tweet you at around the same time. I'll usually
  pop into Campfire and pre-announce a post. If my coworkers decide to tweet it
  at the same time, you end up generating a lot of talk on the same link. If
  you have overlapping circles of followers, you can build a feeling of urgency
  and freshness that is appealing to click on — and retweet.
- Reply to criticism and to compliments over Twitter. It's sometimes surprising
  how many outsiders read public @replies. Not only does replying to someone
  directly generate goodwill (regardless of whether or not they ultimately
  agree with your position), but you can sometimes generate interest in third
  parties that would have otherwise missed your post entirely.

## Monitoring tweets

On a good post, you'll see a lot of activity in the first hours and day. The
best ways to monitor that are using [Favstar][favstar] and
[Summizer][summizer].

<a href="http://favstar.fm"><img src="http://cl.ly/8b7U/favstar.png" alt="Favstar" class="noclip" /></a>

[Favstar][favstar] was created by [Tim Haines][tim] as a way to track who
retweets and stars your tweets on Twitter. I use it as a quick benchmark of how
quickly a post is taking off. It's helpful to track who exactly is checking
your post out; sometimes you'll catch some larger players, sometimes you'll be
able to click through and read some discussion on your article. Sometimes it's
just fun to have an ego boost.

<a href="http://fanzter.com/productions/summizer"><img src="http://cl.ly/8avx/summizer.png" alt="Summizer" class="noclip" /></a>

[Summizer][summizer] is an iPhone app by [Fantzer][fantzer] that is effectively
an interface for saved Twitter searches. While there are plenty of Twitter
search apps out there, Summizer does a great job of keep track of read state
(which, surprisingly enough to me, I end up using frequently), and the
interface itself is very quick. I initially assumed that I wouldn't use
Summizer more than once or twice, but find myself using it often: second only
to my main Twitter client on my phone.

## Twitter saved search bonus round

Another hint for Summizer and Twitter saved searches in general: you can do
some fairly [powerful stuff in your search][advanced-search]. I track the term "zachholman.com",
which returns tweets that link to this site (which even works through link
shorteners).

You can also use it as a form of filter. If we just searched Twitter for
"github", we'd pull in a lot of extra noise: post receive Twitter hooks, blog
posts on pages.github.com domains, etc.  We want to see the *discussion*, not
the *noise*. A lot of us at GitHub have a search saved similar to `github
-merge -commit`, which will strip tweets with "merge" and "commit" in the URL
(which are usually just notification tweets).

## Footer hacks

Right now I have a few things in my footer after my posts. One of which is the
[tweet button][button], a brain-dead easy way to let visitors tweet your URL.

Secondly, I have [Boastful][boastful], a tiny jQuery plugin I wrote that
displays the smiling faces of everyone who tweets a link to your post. Humans
are ego-centric. They like seeing their faces in public places. I don't do
comments on my blog posts, but I do like offering this small bit of community.

Thirdly, on more substantial posts I'll add a link to the [Hacker News][hn]
story submission (either submitted by me or whoever else gets to it first).
This serves as a way to facilitate the discussion that I don't allow on the
post itself, and it provides a easier connection for Hacker News visitors to my
site to upvote the actual Hacker News submission. I really like this setup:
Hacker News tends to give you some honest, respectful feedback, and exposes you
to movers and shakers in the industry.

You don't need to go crazy with these sort of "footer pieces of flair", but
having a few smart integration points goes a long way.

## Analytics

I hate Google Analytics. I really care about 1) trends, 2) referrals. Anything
more than that is interesting, but a distraction from those first two
expectations. Google Analytics is a pain to use.

[Gauges][gauges] is not.

<a href="http://gaug.es"><img src="http://cl.ly/8abL/gauges.png" alt="Gauges" class="noclip" /></a>

Gauges is a newcomer this year to the stats game, but it's beautifully-designed
and gets me the information I need quickly (and in real-time, with maps!). The
reason I love Apple is the reason I love Gauges. If you're feeling that Google
Analytics is too heavy for you, check out Gauges. Seriously.

## Always Be Closing

Look. I loathe that there are jobs in "Marketing". I hate that very word. But
you can be smart about a few things and get the word spread about your project
or post faster.

More importantly: everything I've said in this post is completely bullshit if
your content is bullshit. I play the social card heavily on the assumption that
people will want to share my content. If I write a crappy post, people won't
share it and I leave it at that. Get that house in order first, and then from
there you just take steps to make sure more people have the opportunity to talk
about your work.

[gh]: https://github.com/holman
[stars]: https://github.com/holman/stars
[fame]: http://zachholman.com/posts/fame/
[favstar]: http://favstar.fm
[summizer]: http://fanzter.com/products/summizer
[fantzer]: http://fanzter.com
[tim]: http://twitter.com/timhaines
[advanced-search]: http://search.twitter.com/advanced
[button]: https://twitter.com/about/resources/tweetbutton
[boastful]: http://zachholman.com/2010/02/boastful-a-new-tweetback-library-for-your-blog/
[hn]: http://news.ycombinator.com
[gauges]: http://gaug.es
