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
});
