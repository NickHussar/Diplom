$('.button-column').click(function () {
  $('#goods').each(function () {
    $( this ).addClass("goods-column").removeClass("goods-row");
  })
  $('#goods > div').each(function () {
    $( this ).addClass("element-column").removeClass("element-row");
  })
  $('.button-row').removeClass("button-active");
  $('.button-column').addClass("button-active");
});
$('.button-row').click(function () {
  $('#goods').each(function () {
    $( this ).addClass("goods-row").removeClass("goods-column");
  })
  $('#goods > div').each(function () {
    $( this ).addClass("element-row").removeClass("element-column");
  })
  $('.button-column').removeClass("button-active");
  $('.button-row').addClass("button-active");
});
