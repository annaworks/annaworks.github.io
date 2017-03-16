$(window).on('scroll', function() {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > 190){
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
  };

});

// AFTER PAGE LOAD
$(function() {
  // Header Fade in Animation
  $('#logo').hide().delay(400).fadeIn(1000);
  $('#workTitle').hide().delay(800).fadeIn(800);

  // Card Layover Show on click
  $('.card').on('click', function(){
    var a=$(this).attr('id');
    $('#modal-'+a).fadeIn();
    $('#modal-img-'+a).fadeIn(50);
    $('.modal-overlay').css('display', 'block');
    $(window).on('click', function(e){
      var b=e.toElement.className;
      var c=e.toElement.innerText;
      if(b=='modal-overlay' || c=='CLOSE') {
        $('.modal-overlay').hide();
        $('#modal-'+a).fadeOut();
        $('#modal-img-'+a).fadeOut(50);
      }
    });
  });

  $('.carousel').carousel();


  // if($('.modal').is(":visible")==true) {
  //
  // }

});
