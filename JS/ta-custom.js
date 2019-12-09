/*!*************************************************************************************************
 * https://github.com/invokeImmediately/teachingacademy.wsu.edu/JS/ta-custom.js ↓↓↓
 * -------------------------------------------------------------------------------------------------
 * SUMMARY:  Site-specific JS for use on the website of the (WSU President's Teaching Academy)[https
 *  ://stage.web.wsu.edu/teachingacademy/].
 *
 * SUMMARY:  Site-specific JS for the website of the WSU President's Teaching Academy.
 *
 * AUTHOR: Daniel Rieck (danielcrieck@gmail.com)[https://github.com/invokeImmediately]
 *
 * LICENSE: ISC - Copyright (c) 2019 Daniel C. Rieck.
 *
 *    Permission to use, copy, modify, and/or distribute this software for any purpose with or
 *    without fee is hereby granted, provided that the above copyright notice and this permission
 *    notice appear in all copies.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS" AND DANIEL C. RIECK DISCLAIMS ALL WARRANTIES WITH REGARD TO
 *    THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT
 *    SHALL DANIEL C. RIECK BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR
 *    ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF
 *    CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 *    PERFORMANCE OF THIS SOFTWARE.
 **************************************************************************************************/

////////////////////////////////////////////////////////////////////////////////////////////////////
// TABLE OF CONTENTS
// -----------------
//   §1: DOM Ready Bindings...................................................................39
//   §2: Membership directory filtering.......................................................50
////////////////////////////////////////////////////////////////////////////////////////////////////

( function ( $ ) {
	'use strict';
	
	
	//////////////////////////////////////////////
	// §1: DOM Ready Bindings
	
	$( function() {
		initializeDirectoryFiltering( {
			directorySel: '#tablepress-3_wrapper #tablepress-3',
			filterSel: '#gform_wrapper_1 #input_1_1',
			targetCol: 3
		} );
	} );

	//////////////////////////////////////////////
	// §2: Membership directory filtering
	
	function initializeDirectoryFiltering( params ) {
		var $clearButton = undefined;
		var $directory = $( params.directorySel );
		var $filter = $( params.filterSel );
		var table = undefined;
 
		if ( $directory && $directory.length && $filter && $filter.length ) {
			table = $directory.DataTable();
			$filter.change( function() {
				var newFiltVal = $filter.val();
				table.search( '' ).columns().search( '' ).draw();
				if ( newFiltVal != '' ) {
					table.column( params.targetCol ).search( newFiltVal ).draw();
				}
			} );
			$clearButton = $( '#clear-filter' );
			if ( $clearButton.length ) {
				$clearButton.click( function( e ) {
					e.preventDefault();
					$filter.val( '' );
					table.search( '' ).columns().search( '' ).draw();
				} );
			}
		}
	}
} )( jQuery );

/*!
 * ↑↑↑ ta-custom.js
 * -------------------------------------------------------------------------------------------------
 */
