(function($) {
    $(document).ready(function() {
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
        })

        $('#filters').on( 'change', 'input', function() {
          var filterValue = $( this ).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
    })
})(jQuery)