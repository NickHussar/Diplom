$('.burger, .grey')
  .on ( "click", function () {
    $('.sidebar').toggleClass ("sidebar-active");
    $('.grey').toggleClass ("grey-active");
});
