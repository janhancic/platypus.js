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

# Proof of concepts
Currently there are five versions:

- `index.html`: JavaScript is inside a CSS comment `/*#platypus# … #platypus#*/`, the CSS is then loaded with AJAX and inserted into the page. JavaScript is "collected" with a simple regex and again inserted into the page.
- `index2.html`: JavaScript is inside a `content` CSS attribute under the `#platypus` selector. After the page is loaded the value of the attribute is read and inserted into the page.
  - `index3.html`: same as `index2.html` only that the JavaScript is base64 encoded in the CSS.
  - `index4.html`: same as `index3.html` only that encoded JS code is bigger (whole jQuery + a bit of client code)
  - `index5.html`: same as `index4.html` but it loads JS code from two CSS files. The difference is that the first CSS file must have a element with id `platypus-0`, the second `platypus-1` and so on.
    - `index5_big.html`: same as `index5.html` but it loads a much bigger CSS file with larger JS code. It loads the [Cosmo Bootstrap theme](http://bootswatch.com/cosmo/).

Although both approaches work (in Chrome at least, haven't tested the others), this really is just a proof of concept at the moment.

The first version (`index.html`) has some potential (once I remove the jQuery code), as you could use any JS code you would want. The second version has some problems with quotes and is probably to limited for any actual code. The third version uses the technique from `index2.html` but uses base64 encoded JS.

## Demos
You can find live demos of the experiments here: [http://janhancic.github.com/platypus.js/](http://janhancic.github.com/platypus.js/).

## Browser support
Tested against all the experiments:

**works**
- Chrome 26.0.1386.0 dev (OS X) & Version 24.0.1312.52 m (Windows 7)
- Safari 6.0.2 (OS X)
- Firefox 18.0.1 (OS X & Windows 7) *doesn't work on example 2, but it doesn't matter*
- Opera 12.12 (OS X)
- Dolphin on Android 4.0.3
- Chrome on Android 4.0.3
- stock browser on Android 4.0.3

**doesn't work**
- Internet Explorer 9 (Windows 7)

## Platypus?
Well it's a [funny animal](http://en.wikipedia.org/wiki/Platypus) that's half duck and half beaver (well not actually). And this project is trying to join two different things into one … so platypus.