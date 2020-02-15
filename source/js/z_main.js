$(document).ready(function() {
  $('.fullbox').css({
    width: $(window).width(),
    height: $(window).height()
  });

  $(window).resize(function() {
    var $w = $(window);
    $('.fullbox').css({
      width: $w.width(),
      height: $w.height()
    });
  });
});

var typed = new Typed('#typed', {
  stringsElement: '.caption_typed',
  loop: true,
  typeSpeed: 100,
  backSpeed: 0
});

window.onload = function() {
  Particles.init({
    selector: '.slider_mask',
    color: ['#333333', '#666666', '#aaaaaa'],
    connectParticles: true,
    responsive: [
      {
        breakpoint: 800,
        options: {
          color: '#00C9B1',
          maxParticles: 80,
          connectParticles: false
        }
      }
    ]
  });
};

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('#gotop').fadeIn('fast');
  } else {
    $('#gotop')
      .stop()
      .fadeOut('fast');
  }
});

$(function() {
  //-Menu
  $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });

  $('#menu li')
    .children('a[href*=\\#]:not([href=\\#])')
    .click(function() {
      var target = $(this.hash);
      $('html, body').animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
      return false;
    });

  //-go top
  $('#gotop').click(function() {
    jQuery('html,body').animate(
      {
        scrollTop: 0
      },
      1000
    );
  });
});
