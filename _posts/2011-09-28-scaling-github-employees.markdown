---
layout: post
title: "Scaling GitHub's Employees"
---

GitHub has been pretty public about [how we work](/posts/how-github-works/). We
love to write about it, tweet about it, and give talks about it. But there's
usually a lingering question of whether this type of workflow scales.

It does.

## It scales.

We do things differently at GitHub: we work out of chat rooms, we don't enforce
hours, and we have zero managers. People work on what they want to work on.
Product development is driven by whoever wants to drive product.

I'm GitHub employee number nine, and although I wasn't there at the beginning,
I've been hearing and reading the same things since even before I was hired a
year and a half ago: *GitHub really has a great work environment, but it's not
going to scale as they grow*. The common sentiment was once GitHub grew past
five employees, they'll have to start changing their strategy.

Once we made it to five employees, we heard the same thing about ten employees.
Once we made it to ten employees, then they talked about twenty. Then thirty.
Today we're at forty employees, and, if anything, we're even happier with our
way of working than ever before.

## Code gets shipped fast

Central to scaling GitHub's humans is a streamlined way to deliver code. With
each additional employee added, you're exponentially growing potential pain
points as communication paths inside the company get more complex. **Building
more barriers to product development is not the answer.**

Pull Requests are our major breakthrough. Scott Chacon went into great detail
about [how we use Pull Requests at GitHub][github-flow]. I [gave a talk on it,
too][githubx3]. Pull Requests mean we can do away with code review meetings.
Pull Requests mean we can quickly and safely deploy features. Pull Requests
mean our designers and developers work together in one place.

Pull Requests are the way we're able to continually improve our product quickly
without sacrificing code quality.

## Break apart the company

Companies like Instagram, Quora, and Reddit get a lot of press and buzz,
but GitHub's bigger than all of them. Combined. We're still a small company,
but at 42 employees and counting, we're no longer a tiny company.

We have very little hierarchy in GitHub — on some days our CEO ships more code
than the rest of us do — but as we've grown larger we've let natural breaks in
overall development happen. Embracing these as they happen is critical. We're
far past the point where any single person can monitor every changed line of
code.

We have natural groupings: a dozen or two work on the main Rails app, a small
team works on [GitHub Firewall Install][fi], a couple are in charge of [GitHub
Jobs][jobs], one works exclusively on the Git core team, and we break out into
a number of platform-specific teams like the [iPhone app][iphone], the [Mac
app][mac], and open source projects like Eclipse, libgit2, and others. There
aren't a lot of barriers between teams, so we encourage you to move between
teams as your interest allows.

These natural groupings let specific people focus on and own those areas.
Those teams are in charge when things break. Those teams are in charge of
improving the product. Our ability to trust individual teams to work
independently allows us to tackle more and more projects.

## Automate, automate, automate

Another thing GitHub does well is automate tedious — and important — tasks.
There's a [very strong culture][hubot] of building mini-apps and Hubot scripts
if it helps with automation.

There's two reasons for why we push hard on this. The first is most obvious:
you're letting a scripted process save you time so you can focus on doing real
work. The second is more subtle: automation reduces institutional knowledge.
Institutional knowledge leads to a minority group inside of the company
retaining answers. That forces new employees to bother those few in order to
make impactful changes. It becomes a very verbal, synchronous process, which we
try to avoid.

By automating deploys, a brand-new GitHubber can type `hubot deploy github to
production` and deploy changes on their first day without needing to read up on
how our deploy script delivers code updates to 60+ servers. By running tests
automatically for each pushed Git branch, each developer doesn't have to find
out how to get CI to run their tests. By scripting commonly-used Graphite
queries into Hubot, each employee can generate graphs of application
exceptions, deploys, and Twitter mentions to @github to visually determine if
there's a problem with a recent deploy without having to learn the specific
Graphite syntax.

## The Uphill Battle

This stuff doesn't come easily, but it unfortunately leaves easily. Figuring
out ways to streamline, to improve your process, to grow your company as you
grow your employees is a constant struggle. It's something that should be
continually re-evaluated.

Is this workflow going to work for us when we're 500 employees? Likely not. But
core values and ideas last. Figure out what your core values are, and adapt and
refine them as you grow.

[github-flow]: http://scottchacon.com/2011/08/31/github-flow.html
[githubx3]: http://zachholman.com/talk/how-github-uses-github-to-build-github
[jobs]: http://jobs.github.com
[fi]: http://fi.github.com
[iphone]: http://mobile.github.com
[mac]: http://mac.github.com
[hubot]: http://zachholman.com/posts/why-github-hacks-on-side-projects
