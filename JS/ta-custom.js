( function ( $ ) {
	'use strict';
	
	
	////////////////////////////////////////////////////////////////////////////////////////////////////
	// DOM READY
	
	$( function() {
		initializeDirectoryFiltering( {
			directorySel: '#tablepress-3_wrapper #tablepress-3',
			filterSel: '#gform_wrapper_1 #input_1_1',
			targetCol: 3
		} );
	} );

	////////////////////////////////////////////////////////////////////////////////////////////////////
	// FUNCTIONS
	
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
