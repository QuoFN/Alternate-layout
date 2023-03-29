$(function () {

//           З В Е З Д Ы           \\

    $('.rateYo').rateYo({
        onSet: function (rating, rateYoInstance) {
            alert('Rating is set to: ' + rating);
        }
    });

//           В Ы Б О Р  К А Т Е Г О Р И И            \\

    var mixer = mixitup('.blog__list');

    $('.blog__button').on('click', function () {
        $('.blog__button').removeClass('blog__button--active')
        $(this).addClass('blog__button--active')
    })

    //           С Л А Й Д Е Р           \\

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


//           А К К О Р Д Е О Н            \\

    $('.questions__block-link').on('click', function (e) {
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

//           К А Р Т А           \\

    function init() {
        let map = new ymaps.Map("map", {
            center: [40.714606, -74.002800],
            zoom: 12
        })
    }
    ymaps.ready(init);

//           С К Р О Л            \\

    // $(".header__nav-list a, .header__button, .process__button, .get-in-touch__button, .footer__logo-link, .footer__nav-link, .logo").on("click", function (event) {
    //     event   .preventDefault()
    //     var id = $(this).attr('href'),
    //     top = $(id).offset().top
    //     $('body,html').animate({ scrollTop: top }, 800)
    // });
});


