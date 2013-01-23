## Proof of concepts
**Yes!** Currently there are four versions:

- `index.html`: JavaScript is inside a CSS comment `/*#platypus# … #platypus#*/`, the CSS is then loaded with AJAX and inserted into the page. JavaScript is "collected" with a simple regex and again inserted into the page.
- `index2.html`: JavaScript is inside a `content` CSS attribute under the `#platypus` selector. After the page is loaded the value of the attribute is read and inserted into the page.
  - `index3.html`: same as `index2.html` only that the JavaScript is base64 encoded in the CSS.
  - `index4.html`: same as `index3.html` only that encoded JS code is bigger (whole jQuery + a bit of client code)
  - `index5.html`: same as `index4.html` but it loads JS code from two CSS files. The difference is that the first CSS file must have a element with id `platypus-0`, the second `platypus-1` and so on.
  	- `index5_big.html`: same as `index5.html` but it loads a much bigger CSS file with larger JS code. It loads the [Cosmo Bootstrap theme](http://bootswatch.com/cosmo/).

Although both approaches work (in Chrome at least, haven't tested the others), this really is just a proof of concept at the moment.

The first version (`index.html`) has some potential (once I remove the jQuery code), as you could use any JS code you would want. The second version has some problems with quotes and is probably to limited for any actual code. The third version uses the technique from `index2.html` but uses base64 encoded JS.