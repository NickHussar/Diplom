$( window ).on ( "scroll", function () {
  var y_scroll = window.pageYOffset;
  var top_scroll = 10;

  if (y_scroll > top_scroll) {
    $('header').css (
      'box-shadow', '0 2px 5px rgba(0, 0, 0, 0.2)'
    )
  } else {
    $('header').css (
      'box-shadow', 'none'
    )
  }
});
