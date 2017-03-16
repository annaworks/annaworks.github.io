$(window).on('scroll', function() {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > 130){
    $('#header').addClass('scale-out').addClass('scale-transition');
    $('#nav-fix').css('display', 'block');
    $('#nav-fix').addClass('fixed');
    $('#nav-fix').addClass('opac-95');
  } else {
    $('#header').removeClass('scale-out');
    $('#header').removeClass('header-hide');
    $('#nav-fix').css('display', 'none');
    $('#nav-fix').removeClass('fixed');
    $('#nav-fix').removeClass('opac-95');
  }
});

$(function() {
  $('#silhouette').hide().delay(400).fadeIn(1000);
  $('#workTitle').hide().delay(800).fadeIn(800);

});
