# platypus.js

Experimental JavaScript loader.

## What is this?
For now only a proof of concept that you can load both CSS and JavaScript with only one request.

The idea is that you hide your JavaScript code inside your CSS, load the CSS file, extract the JavaScript code and execute it.

## Seriously?
**Yes!** Look into `experiments` folder too see the examples, also read `experiments/README.md` for details.

## Why?
Firstly: why not? Secondly: to remove as many requests as possible & make things faster.

## Now what?
So far I have proven that this new technique works. Now I need to determine which version is better, pack the code into something more generic and make it work on different browsers (I've only tested in Chrome for now). And before that I should probably run some benchmarks to determine if this is really faster than the "traditional" way of including CSS&JS files.

## Demos
You can find live demos of the experiments here: [http://janhancic.github.com/platypus.js/](http://janhancic.github.com/platypus.js/).

## Browser support
Tested against all the experiments:

**works**
- Chrome 26.0.1386.0 dev (OS X) & Version 24.0.1312.52 m (Windows 7)
- Safari 6.0.2 (OS X)
- Dolphin on Android 4.0.3
- Chrome on Android 4.0.3
- stock browser on Android 4.0.3
- Firefox 18.0.1 (Windows 7) *doesn't work on example 2, but it doesn't matter*

**doesn't work**
- Internet Explorer 9 (Windows 7)

## Platypus?
Well it's a [funny animal](http://en.wikipedia.org/wiki/Platypus) that's half duck and half beaver (well not actually). And this project is trying to join two different things into one … so platypus.
