# platypus.js

Experimental JavaScript loader.

## What is this?
A proof of concept that you can load both CSS and JavaScript with only one request.

The idea is that you hide your JavaScript code inside your CSS, load the CSS file, extract the JavaScript code and execute it.

## Seriously?
**Yes!** Currently there are two versions:

- `index.html`: JavaScript is inside a CSS comment `/*#platypus# … #platypus#*/`, the CSS is then loaded with AJAX and inserted into the page. JavaScript is "collected" with a simple regex and again inserted into the page.
- `index2.html`: JavaScript is inside a `content` CSS attribute under the `#platypus` selector. After the page is loaded the value of the attribute is read and inserted into the page.
- `index3.html`: same as `index2.html` only that the JavaScript is base64 encoded in the CSS.

Although both approaches work (in Chrome at least, haven't tested the others), this really is just a proof of concept at the moment.

The first version (`index.html`) has some potential (once I remove the jQuery code), as you could use any JS code you would want. The second version has some problems with quotes and is probably to limited for any actual code. The third version uses the technique from `index2.html` but uses base64 encoded JS. Now I have to test how big this encoded strings can get.

## Why?
Firstly: why not? Secondly: to remove as many requests as possible & make things faster.

## Platypus?
Well it's a [funny animal](http://en.wikipedia.org/wiki/Platypus) that's half duck and half beaver (well not actually). And this project is trying to join two different things into one … so platypus.