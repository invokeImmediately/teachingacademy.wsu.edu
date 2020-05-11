(function ($) {
    'use strict';
    
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // DOM READY
    
    $( function() {
        var $directory;
        var $filter;

        $directory = $( '#tablepress-3_wrapper #tablepress-3' );
        $filter = $( '#gform_wrapper_1 #input_1_1' );
        initializeDirectoryFiltering( $directory, $filter );
    } );

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // FUNCTIONS
    
    function initializeDirectoryFiltering( $directory, $filter ) {
        var table;
        var $clearButton;
        if ($directory && $directory.length && $filter && $filter.length) {
            console.log( 'Directory & filter found.' );
            table = $directory.DataTable();
            $filter.change( function() {
                var newVal = $filter.val();
	            console.log( 'Filter value changed; now set to ' + $filter.val() );
                table.search( '' ).columns().search( '' ).draw();
                if (newVal != '') {
                    table.column( 3 ).search( newVal ).draw();
                }
            } );
            $clearButton = $('#clear-filter');
            if ( $clearButton.length ) {
                $clearButton.click( function( e ) {
                    e.preventDefault();
                    $filter.val('');
	                table.search( '' ).columns().search( '' ).draw();
                } );
            }
        }
    }
    
})(jQuery);
