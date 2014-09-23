if ($ === undefined) {
    console.log('jQuery не подключён.');
} else {
   console.log('Версия jQuery: ' + $.fn.jquery);
}
$(function () {
		
    $('nav ul li a').click(function () {
        //$('nav').fadeTo("slow" , 0.8);
        $('nav ul li a').removeClass("active");
        $(this).addClass("active");
        var aId = $(this).attr("href");
        if (aId !== "#") {
			//$(window).off(scroll);
            $('nav').slideUp('slow');
				
		}
    });
	$(window).on();
	$(window).scroll(function () {
        //alert("Вы прокрутили содержимое данного окна.");
        $('nav').slideDown("slow");
	});
	
});