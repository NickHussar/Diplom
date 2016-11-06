$( function() {
  $( "#slider-range" ).slider({
    step: 0.1,
    range: true,
    min: 2.4,
    max: 6.8,
    values: [ 2.4, 6.8 ],
    slide: function ( event, ui ) {
      $( "#amount" ).val( ui.values[ 0 ] + " ' - " + ui.values[ 1 ] + " '");
    }
  });
  $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + " ' - " + $( "#slider-range" ).slider( "values", 1 ) + " '");
});
