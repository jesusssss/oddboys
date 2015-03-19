$(document).ready(function() {
    //$('.noise').noisy({
    //    'intensity' : 1,
    //    'size' : 200,
    //    'opacity' : 0.1,
    //    'fallback' : '',
    //    'monochrome' : false
    //});

    $(".cat").hover(function() {
       $(".cat").not($(this)).addClass("greyScale");
    }, function() {
        $(".cat").removeClass("greyScale");
    });

    console.log($(window).width());
});