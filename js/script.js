// 


// ============= venobox
$(document).ready(function () {
    $('.venobox').venobox();
});
// ============= venobox


// ============= testi img slider
$('.testi_img_slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.text_slider',
});
// ============= testi img slider


// ============= testi text_slider
$('.text_slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.testi_img_slider',
});
// ============= testi text_slider


// =========== back to top

$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $(".nav_menu").addClass("fixed_nav")
    } else {
        $(".nav_menu").removeClass("fixed_nav")
    }

    if ($(window).scrollTop() > 700) {
        $("#back_to_top").fadeIn(500)
    } else {
        $("#back_to_top").fadeOut(500)
    }
})

$("#back_to_top").click(function () {
    $('html, body').animate({
        scrollTop: 0,
    })
})


// ========= scrollspy

$('body').scrollspy({
    target: '.navbar'
})