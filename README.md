# platypus.js

Experimental JavaScript loader that loads both CSS and JavaScript from one file resulting in only one request.

The idea is that you hide JavaScript code inside a CSS file. This means that the browser only has to load one file (the CSS) and platypus.js then extracts the JavaScript from the CSS file.

## How to use

You include CSS in your HTML as you would normally do in the `head`:

```html
<link rel="stylesheet" href="styles.css" type="text/css" />
```
The CSS file must include a `#platypus-0` selector, with a `background-image` attribute that contains, as it's value, a base64 encoded JavaScript code:

```css
#platypus-0 {
  display: none;
  background-image: url(data:text/js;base64,base64 encoded JavaScript code);
}

/*
any other styles you have
*/
```

Then right before the `</body>` you put platypus.js code:

```html
<!--[if IE]>
<script src="platypus_ie.js"></script>
<![endif]-->
<script src="platypus.js"></script>
```

I recommend that you put it inline and that you use a minified version. For IE we have to include on extra file that provides base64 decoding functionality.

That's it, your JS will now be loaded from the CSS file.

*note*: originally `content` attribute was used, but IE can't read from it

## #platypus-X ?!
You can have multiple CSS files. This allows you to have one common file for all of your page, and sub-page specific CSS files. Standard practise.
And since putting `#platypus {}` in multiple files would override the previous occurrence, I have to somehow target different CSS files. Unfortunately this is currently the best solution I've came up with.
The rule here is, that the first included CSS file must have a selector `#platypus-0`, the second `#platypus-1` and so on.

## OK, but how do I actually use this?
Since nobody will write JavaScript in base64 encoded format directly in CSS, some sort of deploy magic is needed. This part is, for now, left as an exercise for the reader. In the future I suppose there could be some "asset pipeline" modifier for the popular frameworks.

## Is it safe to use?
Look at the current browser support and decide for yourself.

## Browser support
Tested against all the experiments:

**works**
- Chrome 26.0.1386.0 dev (OS X) & Version 24.0.1312.52 m (Windows 7)
- Safari 6.0.2 (OS X & Windows 7)
- Firefox 18.0.1 (OS X & Windows 7) *doesn't work on example 2, but it doesn't matter*
- Internet Explorer 9 (Windows 7)
- Opera 12.12 (OS X & Windows 7)
- Dolphin on Android 4.0.3
- Chrome on Android 4.0.3
- stock browser on Android 4.0.3
- Mobile Safari 6 (iOS 6.0.1 iPad 4)
- Chrome on iOS 6.0.1 (iPad 4)

**doesn't work**
- Internet Explorer 9 in IE8 compatibility mode (Windows 7)
- Internet Explorer 8 and bellow

## Now what?
I now have to fix the code so that it will work on as many browsers as possible. Then I have to create some benchmarks to see if this even makes sense.

## Where can I learn more?
In [this](http://hancic.info/load-javascript-and-css-with-one-request) blog post. On the [project page](http://janhancic.github.com/platypus.js/), where you can see some live demos. And in the old readme file here on GitHub (look into the `experiments` folder).

## Platypus?
Well it's a [funny animal](http://en.wikipedia.org/wiki/Platypus) that's half duck and half beaver (well not actually). And this project is trying to join two different things into one … so platypus.

## License
**MIT Licensing**

Copyright (C) 2013 Jan Hančič

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
