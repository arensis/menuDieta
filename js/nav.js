$(function () {
    setNavigation();
});

function setNavigation() {
    var path = window.location.pathname;

    $(".nav a").each(function () {
        var href = $(this).attr('href');

        if (path.includes(href)) {
            $(this).closest('a').addClass('active');
        }
    });
}