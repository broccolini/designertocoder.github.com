---
layout: post
title: Parallaxing Parallax on iOS
script: "
    $('#plax1').plaxify({'xRange':10,'yRange':10});
    $('#plax2').plaxify({'xRange':20,'yRange':20,'invert':true});
    $('#plax3').plaxify({'xRange':30,'yRange':30,'invert':true});
    $('#plax4').plaxify({'xRange':50,'yRange':30,'invert':true});
    $.plax.enable();"
---

<script type="text/javascript" src="/javascript/plax.js"></script>

GitHub has a bit of a friendly competition complex. When [Corey
Johnson](http://twitter.com/probablycorey) released [URL
Hunter](http://probablyinteractive.com/url-hunter), there was a lot of talk
about how that minigame could be topped. [Cameron
McEfee](http://twitter.com/cameronmcefee), the famed designer behind all of the
parallax effects on GitHub's site (the [404](https://github.com/404) page, the
[500](https://github.com/500) page, the [about page](https://github.com/about),
and so on) took Corey's URL bar game and [parallaxed
it](http://cameronmcefee.com/parallax-url/). In doing all of this parallax
work, Cameron open sourced his parallax plugin for jQuery itself:
[plax](https://github.com/cameronmcefee/plax).

Parallax is a perspective-based animation technique: move your mouse and you
simulate moving your frame of reference around. Cameron's plax only worked
based on mouse movement, though:

<div style="position: relative; height: 100px; z-index: 1">
  <img src="http://gravatar.com/avatar/6f63cde8b16b035280ca615f621a6c8c?s=142" width="35" style="position: absolute; top: 05px; left: 250px; display: inline" id="plax1" />
  <img src="http://gravatar.com/avatar/6f63cde8b16b035280ca615f621a6c8c?s=142" width="55" style="position: absolute; top: 10px; left: 300px; display: inline" id="plax2" />
  <img src="http://gravatar.com/avatar/6f63cde8b16b035280ca615f621a6c8c?s=142" width="75" style="position: absolute; top: 15px; left: 190px; display: inline" id="plax3" />
  <img src="http://gravatar.com/avatar/6f63cde8b16b035280ca615f621a6c8c?s=142" width="90" style="position: absolute; top: 0px; left: 330px; display: inline" id="plax4" />
</div>

...which means all of these gorgeous animations of this handsome fellow didn't
work on your favorite iOS device. What a bummer. So I parallaxed his parallax
and [added support](https://github.com/cameronmcefee/plax/pull/6) for the
accelerometer and gyroscope present in iPhones and iPads, which Apple
generously gave us access to in the iOS 4.3 release last year.

So now we can do cool things to [GitHub's Cloud](http://cloud.github.com):

<iframe src="http://player.vimeo.com/video/25872573" width="650" height="366" frameborder="0"></iframe>

## Safari's Accelerometer Support

It's really pretty easy to add this to your own apps and libraries. Apple
exposes the accelerometer to us through `DeviceMotionEvent`, a [class that
handles "signification change in
motion"](http://developer.apple.com/library/safari/#documentation/SafariDOMAdditions/Reference/DeviceMotionEventClassRef/DeviceMotionEvent/DeviceMotionEvent.html).
(You might also want to take a look at
[DeviceOrientationEvent](http://developer.apple.com/library/safari/documentation/SafariDOMAdditions/Reference/DeviceOrientationEventClassRef/DeviceOrientationEvent/DeviceOrientationEvent.html),
too.) The change to plax is pretty straightforward, but it's really just a
matter of handling the `ondevicemotion` event and grabbing the values from that
motion:

{% highlight javascript %}
window.ondevicemotion = function(e) {
  x = e.rotationRate.beta
  y = e.rotationRate.alpha
}
{% endhighlight %}

In this case, `rotationRate` is the rate of rotation, which is a bit more
relevant for parallax. You can also grab `rotationRate.gamma`, which is the
rotation positive out of the screen on the z axis. Unfortunately `rotationRate`
is for those devices with gyroscopes: in other words, iPhone 4 and above. Once
we have the rotation rate pulled from the phone we can pipe that information
into plax and plax handles the coordination of layers based on that.

Depending on your use case, you also might want to take a look at
`accelerationIncludingGravity`, which gives you a measurement of the
acceleration of the movement happening on the device.

## Todo

This at least gives us some real-world parallax support on iOS, which is great.
There's some improvements that could be made to retaining rotation position in
parallax (which would give it more of a realistic feel), and there's oodles of
accelerometers in Android phones and in laptops, too. If you're looking for a
fun hack day, you might want to build in support for those devices (or create a
library abstraction for movement in JavaScript!) and send us a pull request!
