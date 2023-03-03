$(function () {

    $(".rateYo").rateYo({
        onSet: function (rating, rateYoInstance) {
            alert("Rating is set to: " + rating);
        }
    });

    let burger = document.querySelector('.burger');
    let menu = document.querySelector('.menu__nav');
    burger.addEventListener('click', function () {
        menu.classList.toggle('active');
    })
});
