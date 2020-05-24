$(function () {
    setNavigation();
});

function setNavigation() {
    var path = window.location.pathname;
    console.log(path)
    $(".nav a").each(function () {
        var href = $(this).attr('href');
        console.log(path.includes(href))
        if (path.includes(href)) {
            $(this).closest('a').addClass('active');
        }
    });
}