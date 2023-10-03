$(document).ready(function () {
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('#nav').onePageNav({
        currentClass: 'active'
    });
});

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 20) {
        $('.header-area').addClass('sticky');
    } else {
        $('.header-area').removeClass('sticky');
    }
    if ($(this).scrollTop() > 300) {
        $('#return').addClass('scroll-top');
    } else {
        $('#return').removeClass('scroll-top');
    }
    $('#return').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })
});
// $(window).on('scroll', function () {
    
// })