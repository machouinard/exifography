(function exifDisplay( $ ) {
	'use strict';

	$( function () {

		var image_id,
		    post_id;

		//* Iterate through each image and, if it has our data-attributes, get EXIF info via AJAX
		$.each( $( 'img' ), function ( i, v ) {

			//* Get data-attributes
			image_id = $( v ).data( 'image_id' );
			post_id  = $( v ).data( 'post_id' );

			if ( undefined !== image_id ) {

				//* Ajax call to get EXIF data to display
				var data = {
					'action':   'insert_exif',
					'image_id': image_id,
					'post_id':  post_id,
					'security': exifOpts.exif_nonce
				};

				$.post(
					exifOpts.ajaxurl,
					data,
					function ( response ) {

						//* Add EXIF after the image anchor tag
						$( v ).parent().after( response.data.output );

					}
				);

			}
		} );

	} );

})( jQuery );