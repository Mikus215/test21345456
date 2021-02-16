$(document).ready(function () {
    $('.main__photos').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        mobileFirst: true,
        responsive: [{
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }],

    });
})

$(document).ready(function () {
    $('.main__images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        mobileFirst: true,
        responsive: [{
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }],

    });
})