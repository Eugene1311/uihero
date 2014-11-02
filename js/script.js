if ($ === undefined) {
    console.log('jQuery не подключён.');
} else {
   console.log('Версия jQuery: ' + $.fn.jquery);
}
$(function(){ // on document load
	$('#horizontalmenu').ddscrollSpy({ // initialize first demo
		scrolltopoffset: -100
	});
	$('.slider-dots').click(function (e) {
		var clicked = $(e.target);
		$('.slider-dots li').removeClass('active-dot');
		clicked.addClass('active-dot');
		var tabName = clicked.attr("data-tab");
		console.log(tabName);
		$('.slider div').fadeOut(600).removeClass('active-slide');
		$('.slider').find('[data-tab="'+tabName+'"]').fadeIn(600).addClass('active-slide');
	});
	$('.arrow-next').click(function() {
		var currentSlide = $('.active-slide');
    	var nextSlide = currentSlide.next();
		var currentDot = $('.active-dot');
    	var nextDot = currentDot.next();
		if(nextSlide.length === 0) {
		  nextSlide = $('.slide').first();
		  nextDot = $('.dot').first();
		}
		currentSlide.fadeOut(600).removeClass('active-slide');
    	nextSlide.fadeIn(600).addClass('active-slide');
		currentDot.removeClass('active-dot');
    	nextDot.addClass('active-dot');
	});
	$('.arrow-prev').click(function() {
		var currentSlide = $('.active-slide');
    	var prevSlide = currentSlide.prev();
		var currentDot = $('.active-dot');
    	var prevDot = currentDot.prev();
		if(prevSlide.length === 0) {
		  prevSlide = $('.slide').last();
		  prevDot = $('.dot').last();
		}
		currentSlide.fadeOut(600).removeClass('active-slide');
		prevSlide.fadeIn(600).addClass('active-slide');
		currentDot.removeClass('active-dot');
    	prevDot.addClass('active-dot');
	});
	
});
	/*var scrolling = $(window).scroll(function () {
        		$('nav').slideDown("slow");
    		});
    $('nav ul li a').click(function () {
        $('nav ul li a').removeClass("active");
        $(this).addClass("active");
        var aId = $(this).attr("href");
        if (aId !== "#") {
            $('nav').slideUp("slow",function (e) {
        		//e.stopImmediatePropagation();
    		});
		 }
    });*/