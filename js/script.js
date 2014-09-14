if ($ === undefined) {
    console.log('jQuery не подключён.');
} else {
   console.log('Версия jQuery: ' + $.fn.jquery);
}
$(function () {
    $('nav ul li a').click(function () {
        //$('nav').fadeTo("slow" , 0.8);
        $('nav ul li a').removeClass("active");
        $(this).toggleClass("active");
        var aId = $(this).attr("href");
        if (aId != "#") {
            $('nav').fadeTo("slow" , 0.2);
        }
    });
    $('nav').mousedown(function () {
        $(this).fadeTo("slow" , 0.8);    
    });
});