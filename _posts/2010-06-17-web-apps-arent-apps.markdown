---
layout: post
title: Web Apps Aren't Apps
---
I really appreciate all the lengths Apple has gone to give web apps a true native feel. HTML5 hooks into geolocation, animation, local storage. Direct iOS hooks into the Springboard ("Add to Homescreen"), and the ability to remove browser window chrome. These are all great things. It lowers the bar and allows a far greater number of developers to run their own code on their iPhone. Really great stuff. But we're missing out on a few core pieces.

Even though you can send your web app to the home screen, move it around like an app, and make it look like an app, it's still not a true app. That's fine; native apps are always going to have a leg up. But by not being a "true" app, web apps face some unfortunate problems.

Web apps miss out on **multitasking**. I've been using iOS 4.0 for a week or so, and while multitasking works well for web apps, they're relegated to second-class citizens: you have to switch to Safari to access your last page loaded. When I'm in Gmail's mobile client, my context is *mail*. It's distinctly not *web browser that I read my mail in*. I launch the app by tapping the Gmail icon, but I lose that context when I'm stuck looking for the Safari icon when switching apps.

Web apps miss out on **making that money**. I have to believe there's a ton of developers out there that would like to sell their HTML5-based app, but don't want to deal with the billing side of things. That's one of the biggest selling points of AppStore: a lot of people will gladly give Apple a cut in exchange for such a braindead-simple method of distribution.

Web apps miss out on **backups**. I recently did a clean restore. As advertised, my apps got transferred over, my data got transferred over, but my homescreened web apps didn't. I manually went back and re-added what apps I remembered to my homescreen, but it's really a pain in the ass to do. It's not a matter of the data inside of the apps (they usually sync to a central server anyway), it's a simply matter of not being able to restore the Gmail logo to my home screen.

Broadly, I view this as two problems: how do we make web apps behave more like native apps, and how do we leverage AppStore? Two problems, and I think they have one simple answer: make the damn things native. Toss each web app in a native Cocoa wrapper.

This can happen transparently without any changes for web developers and, more importantly, without any changes for the end user. Still allow users to press "+" on a website to add it to the homescreen, but instead of just saving the URL, iOS can slip it into a special wrapper. It'll show up in multitasking, it'll sync to your Mac, it'll just act more like a real app. It needn't be tied to AppStore whatsoever, so you can still use HTML to bypass any of Apple's rules you disagree with.

But the really killer stuff is if you *do* want to play by Apple's rules and tap into AppStore. People are already doing this, I'm told; write a thin Cocoa wrapper around a WebKit view and do the rest over offline HTML or on your external server somewhere. And that's great. But there's a huge market of developers that find XCode a little daunting and don't want to have to deal with that.

Think of how game-changing it would be if you could sign up as a developer and upload a zip of your app's code to Apple directly. In the background, Apple wraps that directory in a loving Cocoa embrace. Your compiled binary is then shipped to AppStore reviewers, where you play by the same rules as every other existing developer, and then you're given your all-important "yay" or "nay". There's no complex changes for Apple to compensate for, and developers play in a realm that they're comfortable with. Both make more money.

You can already do this, so there shouldn't be a [Section 3.3.1](http://daringfireball.net/2010/04/iphone_agreement_bans_flash_compiler) problem here. You can make some [pretty immersive stuff](http://githubissues.heroku.com/) in HTML nowadays, so quality shouldn't be an issue. Besides, we're still playing by AppStore rules, so if the app does suck, please just reject it and we'll move on.

The line has been blending between web apps and desktop apps for quite some time. Let's just nuke the fucking line already.