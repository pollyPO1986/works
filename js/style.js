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

// 作品輪播-Slick carousel
$(function() {
  $('.jq_carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 769,
        settings: 'unslick'
      }
    ]
  });

  $(window).on('resize', function() {
    $('.jq_carousel').slick('resize');
  });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpfbWFpbi5qcyIsInpfcGx1Z2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAkKCcuZnVsbGJveCcpLmNzcyh7XHJcbiAgICB3aWR0aDogJCh3aW5kb3cpLndpZHRoKCksXHJcbiAgICBoZWlnaHQ6ICQod2luZG93KS5oZWlnaHQoKVxyXG4gIH0pO1xyXG5cclxuICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyICR3ID0gJCh3aW5kb3cpO1xyXG4gICAgJCgnLmZ1bGxib3gnKS5jc3Moe1xyXG4gICAgICB3aWR0aDogJHcud2lkdGgoKSxcclxuICAgICAgaGVpZ2h0OiAkdy5oZWlnaHQoKVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxudmFyIHR5cGVkID0gbmV3IFR5cGVkKCcjdHlwZWQnLCB7XHJcbiAgc3RyaW5nc0VsZW1lbnQ6ICcuY2FwdGlvbl90eXBlZCcsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICB0eXBlU3BlZWQ6IDEwMCxcclxuICBiYWNrU3BlZWQ6IDBcclxufSk7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgUGFydGljbGVzLmluaXQoe1xyXG4gICAgc2VsZWN0b3I6ICcuc2xpZGVyX21hc2snLFxyXG4gICAgY29sb3I6IFsnIzMzMzMzMycsICcjNjY2NjY2JywgJyNhYWFhYWEnXSxcclxuICAgIGNvbm5lY3RQYXJ0aWNsZXM6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA4MDAsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgY29sb3I6ICcjMDBDOUIxJyxcclxuICAgICAgICAgIG1heFBhcnRpY2xlczogODAsXHJcbiAgICAgICAgICBjb25uZWN0UGFydGljbGVzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0pO1xyXG59O1xyXG5cclxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDEwMCkge1xyXG4gICAgJCgnI2dvdG9wJykuZmFkZUluKCdmYXN0Jyk7XHJcbiAgfSBlbHNlIHtcclxuICAgICQoJyNnb3RvcCcpXHJcbiAgICAgIC5zdG9wKClcclxuICAgICAgLmZhZGVPdXQoJ2Zhc3QnKTtcclxuICB9XHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAvLy1NZW51XHJcbiAgJCgnI3RvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcjb3ZlcmxheScpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNtZW51IGxpJylcclxuICAgIC5jaGlsZHJlbignYVtocmVmKj1cXFxcI106bm90KFtocmVmPVxcXFwjXSknKVxyXG4gICAgLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xyXG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3BcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEwMDBcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gIC8vLWdvIHRvcFxyXG4gICQoJyNnb3RvcCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgalF1ZXJ5KCdodG1sLGJvZHknKS5hbmltYXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgIH0sXHJcbiAgICAgIDEwMDBcclxuICAgICk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCIvLyDkvZzlk4HovKrmkq0tU2xpY2sgY2Fyb3VzZWxcclxuJChmdW5jdGlvbigpIHtcclxuICAkKCcuanFfY2Fyb3VzZWwnKS5zbGljayh7XHJcbiAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA3NjksXHJcbiAgICAgICAgc2V0dGluZ3M6ICd1bnNsaWNrJ1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSk7XHJcblxyXG4gICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuanFfY2Fyb3VzZWwnKS5zbGljaygncmVzaXplJyk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXX0=
