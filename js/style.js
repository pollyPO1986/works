

$(document).ready(function() {
    $('.fullbox').css({
        'width': $(window).width(),
        'height': $(window).height()
    });

    $(window).resize(function() {
        var $w = $(window);
        $('.fullbox').css({
            'width': $w.width(),
            'height': $w.height(),
        });
    });
});

var typed = new Typed('#typed',{
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
        responsive: [{
            breakpoint: 800,
            options: {
                color: '#00C9B1',
                maxParticles: 80,
                connectParticles: false
            }
        }]
    });
};

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#gotop').fadeIn("fast");
    } else {
        $('#gotop').stop().fadeOut("fast");
    }
});

$(function() {

    //-Menu
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });

    $('#menu li').children('a[href*=\\#]:not([href=\\#])').click(function() {
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
    });

    //-go top
    $("#gotop").click(function() {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 1000);
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
        responsive: [{
            breakpoint: 769,
            settings: 'unslick'
        }]
    });

    $(window).on('resize', function() {
        $('.jq_carousel').slick('resize');
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpfbWFpbi5qcyIsInpfcGx1Z2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmZ1bGxib3gnKS5jc3Moe1xyXG4gICAgICAgICd3aWR0aCc6ICQod2luZG93KS53aWR0aCgpLFxyXG4gICAgICAgICdoZWlnaHQnOiAkKHdpbmRvdykuaGVpZ2h0KClcclxuICAgIH0pO1xyXG5cclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyICR3ID0gJCh3aW5kb3cpO1xyXG4gICAgICAgICQoJy5mdWxsYm94JykuY3NzKHtcclxuICAgICAgICAgICAgJ3dpZHRoJzogJHcud2lkdGgoKSxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICR3LmhlaWdodCgpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxudmFyIHR5cGVkID0gbmV3IFR5cGVkKCcjdHlwZWQnLHtcclxuICAgIHN0cmluZ3NFbGVtZW50OiAnLmNhcHRpb25fdHlwZWQnLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHR5cGVTcGVlZDogMTAwLFxyXG4gICAgYmFja1NwZWVkOiAwXHJcbn0pO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgUGFydGljbGVzLmluaXQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnLnNsaWRlcl9tYXNrJyxcclxuICAgICAgICBjb2xvcjogWycjMzMzMzMzJywgJyM2NjY2NjYnLCAnI2FhYWFhYSddLFxyXG4gICAgICAgIGNvbm5lY3RQYXJ0aWNsZXM6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW3tcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogODAwLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMwMEM5QjEnLFxyXG4gICAgICAgICAgICAgICAgbWF4UGFydGljbGVzOiA4MCxcclxuICAgICAgICAgICAgICAgIGNvbm5lY3RQYXJ0aWNsZXM6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAxMDApIHtcclxuICAgICAgICAkKCcjZ290b3AnKS5mYWRlSW4oXCJmYXN0XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjZ290b3AnKS5zdG9wKCkuZmFkZU91dChcImZhc3RcIik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvLy1NZW51XHJcbiAgICAkKCcjdG9nZ2xlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnI292ZXJsYXknKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI21lbnUgbGknKS5jaGlsZHJlbignYVtocmVmKj1cXFxcI106bm90KFtocmVmPVxcXFwjXSknKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8tZ28gdG9wXHJcbiAgICAkKFwiI2dvdG9wXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGpRdWVyeShcImh0bWwsYm9keVwiKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9KTtcclxufSk7IiwiLy8g5L2c5ZOB6Lyq5pKtLVNsaWNrIGNhcm91c2VsXHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmpxX2Nhcm91c2VsJykuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW3tcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY5LFxyXG4gICAgICAgICAgICBzZXR0aW5nczogJ3Vuc2xpY2snXHJcbiAgICAgICAgfV1cclxuICAgIH0pO1xyXG5cclxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmpxX2Nhcm91c2VsJykuc2xpY2soJ3Jlc2l6ZScpO1xyXG4gICAgfSk7XHJcbn0pOyJdfQ==
