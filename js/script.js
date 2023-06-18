$(function () {


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
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    draggable: true,
                }
            }
        ]
    })

    $('.review__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.review__slider').slick('slickPrev')
    })

    $('.review__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.review__slider').slick('slickNext')
    })

    $('.review__slider-dots').on('click', function (e) {
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

    $(window).on('scroll', function (){
        if ($(window).scrollTop() > 0  && $('.header__top').hasClass('header__top--open') === false)  {
            $('.burger').addClass('burger--follow')
        }
        else {
            $('.burger').removeClass('burger--follow')
        }
    })
    


    $('.burger, .overlay').on('click', function (e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')


        if ($('.header__top').hasClass('header__top--open')) {
            $('.burger').addClass('burger--open')
        }
        else {
            $('.burger').removeClass('burger--open')
        }
});

})