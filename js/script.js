$(function () {

    $('.rateYo').rateYo({
        onSet: function (rating, rateYoInstance) {
            alert('Rating is set to: ' + rating);
        }
    });

    var mixer = mixitup('.blog__list');

    $('.blog__button').on('click', function () {
        $('.blog__button').removeClass('blog__button--active')
        $(this).addClass('blog__button--active')
    })

    $('.review__slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        draggable: false,
        accessibility: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 450,
        // waitForAnimate: false,
        appendArrows: $('.review__slider-arrows'),
        appendDots: $('.review__slider-dots'),
    })

    $('.review__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.review__slider').slick('slickPrev')
    })

    $('.review__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.review__slider').slick('slickNext')
    })

    $('.review__slider-dot').on('click', function (e) {
        e.preventDefault()
    })


    $('.questions__block-link').on('click', function(e){
        e.preventDefault()
        
        if ($(this).hasClass('questions__block-link--active')) {
            $(this).removeClass('questions__block-link--active')
            $(this).children('.questions__text').slideUp()
        }
        else {
            $('.questions__block-link').removeClass('questions__block-link--active')
            $('.questions__text').slideUp()
            $(this).addClass('questions__block-link--active')
            $(this).children('.questions__text').slideDown()
        }
    })
});


