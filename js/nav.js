$(function () { setRouterLinkActive(); });

function setRouterLinkActive() {
    var absolutePath = window.location.pathname;

    if(absolutePath.endsWith('menuDieta/')) {
        $("#default").addClass('active');
    } else {
        $(".nav a").each(function () {
            var relativePath = $(this).attr('href');
    
            if (absolutePath.includes(relativePath)) {
                $(this).closest('a').addClass('active');
            }
        });
    }
}