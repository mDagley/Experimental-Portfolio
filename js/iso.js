// external js: isotope.pkgd.js


// init Isotope
var $grid = $('.grid').imagesLoaded( function(){
    $grid.isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        getSortData: {
        name: '.name',
        year: '.year parseInt',
        platform: '.platform',
        category: '[data-category]'
    
        }
    })
  
});

// filter functions

var filterFns = {
  // show if year greater than 2015
  yearGreaterThan2015: function() {
    var year = $(this).find('.year').text();
    return parseInt( year, 10 ) > 2015;
  }
}




// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
    if(sortByValue == 'year')
        {
            $grid.isotope({ sortBy: sortByValue, sortAscending: false })
        }
    else{
  $grid.isotope({ sortBy: sortByValue, sortAscending: true });
    }

});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});