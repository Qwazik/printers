$(function(){
	initNewsSlider();
	initEventSlider();
	initStageBanner();

	$('input[type="tel"]').inputmask('+7(999)999-99-99');

	$('.owl-carousel').each(function(){
		var items = $(this).data('items');
		var mdItems, smItems = 2, xsItems = 1;
		(items == 4)?mdItems = 3:(items == 3)?mdItems = 2: null;
		// (items == 4)?smItems = 2:(items == 3)?smItems = 2: null;
		$(this).owlCarousel({
			items: items,
			nav: true,
			loop: true,
			autoplay: true,
			autoplayTimeout: 7000,
			responsive: {
				0:{
					items: xsItems
				},
				767:{
					items: smItems
				},
				992:{
					items: mdItems
				},
				1240:{
					items: items
				}
			}
		});
	});

	$('.main-photo__thumbs').owlCarousel({
		items: 4,
		nav: true
	}).addClass('owl-carousel');


	//card photo thumbs
	$('.main-photo__thumbs li').click(function(){
		$('.main-photo__thumbs li').removeClass('active');
		$(this).addClass('active');
		var mainPhoto = $('.main-photo img');
		mainPhoto.css('background-image', 'url('+$(this).find('a').attr('href')+')');
		return false;
	});
	
	//float menu
	// if($('.left-menu').length){
	// 	leftMenuInit();
	// }

	$('.mobile-header div').each(function(){
		var mobileHeader = $('.mobile-header');
		var copyId = $(this).data('copy');
		mobileHeader.append($(copyId).clone());
	});

	$('.mobile-header').on('click', '.catalog-btn > a', function(){
		var menu = $(this).siblings('.submenu');
		menu.toggleClass('open');
		return false;
	});

	$(document).click(function(e){
		var menu = $('.mobile-header .catalog-btn .submenu');
		var noMenu = $(e.target).closest('.catalog-btn').length;
		if(menu.is('.open') && !noMenu){
			menu.removeClass('open');
		}
	});

	// addToCart
	$('.toCart').click(function(){
		$('#modalAddToCart').modal('show');
		//...
		return false;
	});	
	$('.comparison').click(function(){
		$('#modalAddToComp').modal('show');
		//...
		return false;
	});

	$('.main-card__header .fav').click(function(){
		$(this).toggleClass('active');
		return false;
	});

	$('.select-col button').click(function(){
		var valSelector = $(this).siblings('input');
		var val = +valSelector.val();
		if($(this).is('.min')){
			if(val==1) return false;
			val-=1;
		}else{
			val+=1;
		}
		valSelector.val(val);
	});

	mobileSearch($('.search-mobile'), $('#mainSearch'));
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

function mobileSearch(input, output){
	var inputBtn = $(input).find('button[type="button"]');
	var inputFiled = $(input).find('input[type="text"]');
	var outputFiled = $(output).find('#searchbox');
	var outputBtn = $(output).find('button[type="submit"]');
	inputFiled.keyup(function(){
		$(outputFiled).val($(this).val());
	});

	inputBtn.click(function(){
		if($(this).is('.active')){
			$('#search-form').submit();
		}else{
			$(inputFiled).show();
			$(inputBtn).addClass('active');
		}
		return false;
	});

}