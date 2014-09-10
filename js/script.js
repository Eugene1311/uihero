if ($ === undefined) {
    console.log('jQuery не подключён.');
} else {
   console.log('Версия jQuery: ' + $.fn.jquery);
}
$(function () {
    $('nav ul li a').click(function () {
        $('nav ul li a').removeClass("active");
        $(this).toggleClass("active");
		//$('nav').css('height','30px');
    });
});