---
layout: post
title: "How GitHub Works: Be Asynchronous"
hn: http://news.ycombinator.com/item?id=2896710
---

<div class="aside">

  You're reading part two of <strong><a href="/posts/how-github-works">How
  GitHub Works</a></strong>, a three-post journey into how we work at GitHub.
  They're all separate posts on different topics, but if you're interested you
  can also read the previous one: <a href="/posts/how-github-works-hours/">Hours
  are Bullshit</a>.

</div>

This is — by far — my favorite aspect of working at GitHub. Everything is
asynchronous.

## Chat

GitHub didn't have an office for the first two years. Chat rooms (in our case,
[Campfire][campfire]) is where things got done. Today we've moved into our
second office, and Campfire is *still* where we get things done. There's a
reason for that: chat is asynchronous.

Asynchronous communication means I can take a step out for lunch and catch up
on transcripts when I get back. Asynchronous communication means I can ask my
coworker a question in-chat and not worry about bothering her since she'll get
back to me when she's available. Asynchronous communication means I can go to
rural Minnesota and feel like I'm working from the office like normal.

## Pull Requests

The majority of our development workflow involves [Pull Requests][pulls]. I'm
going to be going into a lot more detail about this in future blog posts [and
talks][talks] but in the meantime let me say this: living in a pull request
world is sublime.  Gone are days at companies with complicated branching
strategies, with in-person code-on-a-screen code review.

If I want to add a new feature or impact the codebase, I'll push a new branch,
create a Pull Request for it, and my coworkers will review it 1) if they're
impacted by those changes, 2) interested in the subject, or 3) when they have
ample time to check out my changes. At that point, we can run a partial deploy
of that branch on different subsets of machines and try things out in
production, and if everything looks good, merge into master.

With Pull Requests, I don't have to drag anyone into a meeting that's
inconvenient for them and for me. There's a good reason for that, too:

## Meetings are fucking toxic

37signals [originated][37] "meetings are toxic" in Getting Real. I tend to
loathe meetings *even more* than 37signals. I despise them.

Meetings are usually called when you need to hash something out. They tend to
invite more people than necessary, and even if you're pretty interested in the
meeting topic, you're still going to be frustrated because **meetings pull you
from doing actual work in order to talk about doing work**. It's easier to push
a branch up, check out the diff, and then iterate on that diff rather than
assuming you're going to perfectly whiteboard system design ahead of time.

Beyond that, meetings are utterly forgettable. Even if you take meeting notes,
you can't capture them all. You make a judgement at that point in time as to
what to write down for later. Then three weeks later you try to remember what
wasn't written down when it becomes apparent that *that* discussion was more
important. You don't have this problem with chat transcripts. Forcing people to
reduce their otherwise rambling thoughts into concrete sentences helps focus
discussion, too.

We'll have meetings at GitHub, but I can count the number of full "meetings"
we've had in the last year and a half on one hand.

## The Zone

This all goes back to what I was writing about yesterday: you want your
employees to be in "the zone". Putting people in an atmosphere where they can
only work for an hour before a team meeting pulls them out of that flow.

We've found that if you let responsible people handle their own priorities on
their own timeline, they'll end up getting the important stuff finished and
still be able to work productively on other work.

[feedback]: https://github.com/holman/feedback
[campfire]: http://campfirenow.com
[pulls]: https://github.com/features/projects/codereview#codereview_bucket
[talks]: http://zachholman.com/talks
[37]: http://gettingreal.37signals.com/ch07_Meetings_Are_Toxic.php
