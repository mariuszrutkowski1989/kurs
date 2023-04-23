$(document).ready(function () {
    $('#navbarSupportedContent').on('mouseleave', function () {
        if ($(window).width() < 768) {
            $('.navbar-toggler').click();
        }
    });

    $('.nav-link').on('click', function () {
        if ($(window).width() < 768) {
            $('.navbar-toggler').click();
        }
    });
});