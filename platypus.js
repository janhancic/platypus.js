/*!
 * platypus.js v0.1
 * http://janhancic.github.com/platypus.js/
 *
 * Copyright 2013 Jan Hančič
 * Released under the MIT license
 * https://github.com/janhancic/platypus.js/blob/master/LICENSE.md
 *
 * Date: 2013-01-26
 */
var platypus = (function ( platypus, window, document ) {
	'use strict';

	var linkTags = document.querySelectorAll ( 'link[rel="stylesheet"]' );
	for ( var i = 0; i < linkTags.length; i++ ) {
		// create a DOM element that will get the styles from #platypus-X
		var dummyElement = document.createElement ( 'i' );
		dummyElement.id = 'platypus-' + i;
		document.body.appendChild ( dummyElement );

		// get 'background-image' attribute's value
		var js;
		if ( dummyElement.currentStyle ) {
			// IE
			js = dummyElement.currentStyle['backgroundImage'];
		} else if ( window.getComputedStyle ) {
			// all other
			js = document.defaultView.getComputedStyle ( dummyElement, null ).getPropertyValue ( 'background-image' );
		}

		// remove element
		dummyElement.parentNode.removeChild ( dummyElement );
		if ( js !== '' && js !== 'none' ) {
			// not all browsers return the value the same
			if ( js[4] === '"' ) {
				// url("data:text/js;base64,JSCODE") firefox, ie, ...
				js = js.substring ( 25, js.length - 2 );
			} else {
				// url(data:text/js;base64,JSCODE) chrome, ...
				js = js.substring ( 24, js.length - 1 );
			}

			var scriptTag = document.createElement ( 'script' );
			try {
				// base64 decode
				if ( window.atob ) {
					scriptTag.innerHTML = atob ( js );
				} else {
					scriptTag.innerHTML = platypus.base64Decode ( js );
				}

				document.body.appendChild ( scriptTag );
			} catch ( e ) {
			}
		}
	};

	return platypus;
} ( platypus || {}, window, document ) );