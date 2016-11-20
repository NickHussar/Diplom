$( function() {
  $( "#slider-screen" ).slider({
    step: 0.1,
    range: true,
    min: 2.4,
    max: 6.8,
    values: [ 2.4, 6.8 ],
    slide: function ( event, ui ) {
      $( "#diagonal" ).val( ui.values[ 0 ] + " ' - " + ui.values[ 1 ] + " '");
    }
  });
  $( "#diagonal" ).val( $( "#slider-screen" ).slider( "values", 0 ) + " ' - " + $( "#slider-screen" ).slider( "values", 1 ) + " '");
});
$( function() {
  $( "#slider-battery" ).slider({
    step: 50,
    range: true,
    min: 2400,
    max: 3450,
    values: [ 2700, 3450 ],
    slide: function ( event, ui ) {
      $( "#capacity" ).val( ui.values[ 0 ] + " mAh - " + ui.values[ 1 ] + " mAh");
    }
  });
  $( "#capacity" ).val( $( "#slider-battery" ).slider( "values", 0 ) + " mAh - " + $( "#slider-battery" ).slider( "values", 1 ) + " mAh");
});
$( function() {
  $( "#slider-thickness" ).slider({
    step: 0.1,
    range: true,
    min: 5,
    max: 15,
    values: [ 7, 10 ],
    slide: function ( event, ui ) {
      $( "#thickness" ).val( ui.values[ 0 ] + " mm - " + ui.values[ 1 ] + " mm");
    }
  });
  $( "#thickness" ).val( $( "#slider-thickness" ).slider( "values", 0 ) + " mm - " + $( "#slider-thickness" ).slider( "values", 1 ) + " mm");
});
