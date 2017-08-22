$(function(){
	initNewsSlider();
	initEventSlider();
	initStageBanner();

	$('.owl-carousel').each(function(){
		$(this).owlCarousel({
			items: $(this).data('items'),
			nav: true,
			loop: true,
			autoplay: true,
			autoplayTimeout: 7000
		});
	});


	//card photo thumbs
	$('.main-photo__thumbs li').click(function(){
		$('.main-photo__thumbs li').removeClass('active');
		$(this).addClass('active');
		var mainPhoto = $('.main-photo img');
		mainPhoto.css('background-image', 'url('+$(this).find('a').attr('href')+')');
		return false;
	});
	
	//float menu
	if($('.left-menu').length){
		leftMenuInit();
	}


});

function leftMenuInit(){
	var menu = $('.left-menu');
	var target = menu.offset().top;
	var marginTop = 30;
	$(window).scroll(function(){
		goNav(target, $(this).scrollTop());
	});

	function goNav(target, ws){
		if(ws>target-marginTop){
			menu.css('top',ws-target+marginTop )
		}else if(ws<target-marginTop){
			menu.css('top',0)
		}
	}
}