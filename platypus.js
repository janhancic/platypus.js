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
(function ( document ) {
	'use strict';

	var linkTags = document.querySelectorAll ( 'link[rel="stylesheet"]' );
	for ( var i = 0; i < linkTags.length; i++ ) {
		// create a DOM element that will get the styles from #platypus-X
		var dummyElement = document.createElement ( 'i' );
		dummyElement.id = 'platypus-' + i;
		document.body.appendChild ( dummyElement );

		// get 'content' attribute value
		var styles = document.defaultView.getComputedStyle ( dummyElement, null );
		var js = styles.getPropertyValue ( 'content' );

		// remove element
		dummyElement.parentNode.removeChild ( dummyElement );

		if ( js !== '' ) {
			// some browsers put single and some dobule quotes when they return the data
			if ( js[0] === "'" || js[0] === '"' ) {
				js = js.substr ( 1, js.length - 2 );
			}

			var scriptTag = document.createElement ( 'script' );
			try {
				// base64 decode
				scriptTag.innerHTML = atob ( js );
				document.body.appendChild ( scriptTag );
			} catch ( e ) {
			}
		}
	};
} ( document ) );