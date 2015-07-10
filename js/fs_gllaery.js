/* 
	Kenburns Type Gallery Slider Script
	Version : 1.0.0
	Site	: under construction
	---
	Author	: Art Dark
	License : MIT License / GPL License
*/

jQuery.fn.fs_gallery = function(fs_options) {
	//Set Variables
	var fs_el = $(this),
		fs_base = this;
	var fs_interval = setInterval('nextSlide()', fs_options.slide_time);

	$('body').append('<div class="fs_gallery_wrapper"><ul class="fs_gallery_container '+fs_options.fx+'"/><a href="javascript:void(0)" class="fs_slider_prev"/><a href="javascript:void(0)" class="fs_slider_next"/><div class="fs_title_wrapper"><h1 class="fs_title"></h1><h6 class="fs_descr"></h6></div><div class="fs_thmb_viewport"><div class="fs_thmb_wrapper"><ul class="fs_thmb_list" style="width:'+fs_options.slides.length*88+'px"/></div></div>');
	$('header ul.menu').append('<li class="thumb_toggle"><a href="javascript:void(0)"></a></li>');
	$fs_container = $('.fs_gallery_container');
	$fs_thmb = $('.fs_thmb_list');
	$fs_title = $('.fs_title_wrapper');
	thisSlide = 0;
	while(thisSlide <= fs_options.slides.length-1){
		$fs_container.append('<li class="fs_slide slide'+thisSlide+'" data-count="'+thisSlide+'" data-fit="'+fs_options.slides[thisSlide].fit+'" data-src="'+fs_options.slides[thisSlide].image+'"></li>');
		$fs_thmb.append('<li class="fs_slide_thmb slide'+thisSlide+'" data-count="'+thisSlide+'"><img alt="'+fs_options.slides[thisSlide].alt+' '+thisSlide+'" src="'+fs_options.slides[thisSlide].thmb+'"/><div class="fs_thmb_fadder"></div></li>');
		thisSlide++;
	}	
	$fs_container.find('li.slide0').addClass('current-slide').attr('style', 'background:url('+$fs_container.find('li.slide0').attr('data-src')+') no-repeat; background-size:'+$fs_container.find('li.slide0').attr('data-fit')+';');
	$fs_container.find('li.slide1').attr('style', 'background:url('+$fs_container.find('li.slide1').attr('data-src')+') no-repeat; background-size:'+$fs_container.find('li.slide1').attr('data-fit')+';');
	$('.fs_title').text(fs_options.slides[0].title);
	$('.fs_descr').text(fs_options.slides[0].description);
	$('.fs_thmb_viewport').width($(window).width()-$fs_title.width()-58);
	
	$('.fs_slide_thmb').click(function(){
		goToSlide(parseInt($(this).attr('data-count')));
	});
	$('.fs_slider_prev').click(function(){
		prevSlide();
	});
	$('.fs_slider_next').click(function(){
		nextSlide();
	});
	$('.thumb_toggle a').click(function(){
		$('.fs_title_wrapper').toggleClass('fs_hide');
		$('.fs_thmb_viewport').toggleClass('fs_hide');
	});
	
	nextSlide = function() {
		beforeChange();
		clearInterval(fs_interval);		
		thisSlide = parseInt($('.fs_gallery_container').find('.current-slide').attr('data-count'));
		thisSlide++;
		cleanSlide = thisSlide-2;
		nxtSlide = thisSlide+1;
		if (thisSlide == $('.fs_gallery_container').find('li').size()) {
			thisSlide = 0;
			cleanSlide = $('.fs_gallery_container').find('li').size()-3;
			nxtSlide = thisSlide+1;
		}
		if (thisSlide == 1) {
			cleanSlide = $('.fs_gallery_container').find('li').size()-2;
		}

		$('.fs_title').fadeOut(300);
		$('.fs_descr').fadeOut(300, function(){
			$('.fs_title').text(fs_options.slides[thisSlide].title);
			$('.fs_descr').text(fs_options.slides[thisSlide].description);			
			$('.fs_title').fadeIn(300);
			$('.fs_descr').fadeIn(300);
		});
		
		$('.fs_gallery_container').find('.slide'+cleanSlide).attr('style', '');
		$('.fs_gallery_container').find('.slide'+thisSlide).attr('style', 'background:url('+$('.slide'+thisSlide).attr('data-src')+') no-repeat; background-size:'+$('.slide'+thisSlide).attr('data-fit')+';');
		$('.fs_gallery_container').find('.slide'+(nxtSlide)).attr('style', 'background:url('+$('.slide'+(thisSlide+1)).attr('data-src')+') no-repeat; background-size:'+$('.slide'+nxtSlide).attr('data-fit')+';');
		$('.current-slide').removeClass('current-slide');
		$('.slide'+thisSlide).addClass('current-slide');
		fs_interval = setInterval('nextSlide()', fs_options.slide_time);
		setTimeout("afterChange()",500);
	}

	prevSlide = function() {
		beforeChange();
		clearInterval(fs_interval);		
		thisSlide = parseInt($('.fs_gallery_container').find('.current-slide').attr('data-count'));
		thisSlide--;
		nxtSlide = thisSlide-1;
		cleanSlide = thisSlide+2;
		if (thisSlide < 0 ) {
			thisSlide = $('.fs_gallery_container').find('li').size()-1;
			cleanSlide = 1;
		}
		if (thisSlide == $('.fs_gallery_container').find('li').size()-2) {
			cleanSlide = 0;
		}
		$('.fs_title').fadeOut(500);
		$('.fs_descr').fadeOut(500, function(){
			$('.fs_title').text(fs_options.slides[thisSlide].title);
			$('.fs_descr').text(fs_options.slides[thisSlide].description);			
			$('.fs_title').fadeIn(500);
			$('.fs_descr').fadeIn(500);
		});

		$('.fs_gallery_container').find('.slide'+(cleanSlide)).attr('style', '');
		$('.fs_gallery_container').find('.slide'+thisSlide).attr('style', 'background:url('+$('.slide'+thisSlide).attr('data-src')+') no-repeat; background-size:'+$('.slide'+thisSlide).attr('data-fit')+';');
		$('.fs_gallery_container').find('.slide'+(nxtSlide)).attr('style', 'background:url('+$('.slide'+(thisSlide+1)).attr('data-src')+') no-repeat; background-size:'+$('.slide'+nxtSlide).attr('data-fit')+';');
		$('.current-slide').removeClass('current-slide');
		$('.slide'+thisSlide).addClass('current-slide');
		fs_interval = setInterval('nextSlide()', fs_options.slide_time);		
		setTimeout("afterChange()",500);
	}
	
	goToSlide = function(set_slide)  {	
		beforeChange();
		clearInterval(fs_interval);
		oldSlide = parseInt($('.fs_gallery_container').find('.current-slide').attr('data-count'));
		thisSlide = set_slide

		$('.fs_title').fadeOut(300);
		$('.fs_descr').fadeOut(300, function(){
			$('.fs_title').text(fs_options.slides[thisSlide].title);
			$('.fs_descr').text(fs_options.slides[thisSlide].description);			
			$('.fs_title').fadeIn(300);
			$('.fs_descr').fadeIn(300);
		});
		
		$('.fs_gallery_container').find('.fs_slide').attr('style', '');
		$('.fs_gallery_container').find('.slide'+thisSlide).attr('style', 'background:url('+$('.slide'+thisSlide).attr('data-src')+') no-repeat; background-size:'+$('.slide'+thisSlide).attr('data-fit')+';');
		$('.fs_gallery_container').find('.slide'+(thisSlide+1)).attr('style', 'background:url('+$('.slide'+(thisSlide+1)).attr('data-src')+') no-repeat; background-size:'+$('.slide'+thisSlide+1).attr('data-fit')+';');
		$('.current-slide').removeClass('current-slide');
		$('.slide'+thisSlide).addClass('current-slide');
		fs_interval = setInterval('nextSlide()', fs_options.slide_time);
		setTimeout("afterChange()",500);
	}
	
	beforeChange = function(slide) {
		//$fs_title.addClass('change');
	}
	afterChange = function(slide) {
		//$fs_title.removeClass('change');
	}

	$('.fs_thmb_viewport').width($(window).width()-$fs_title.width()-58)
		.mouseenter(function(){
			var h = $(this).width(),
				tlist = $('.fs_thmb_list');
				window._s_top = parseInt(tlist.css('left'));
				window._sh = setInterval(function(){
				if (
					(window._s_top >= 0 && window._sp > 0) || 
					(window._s_top < 0 && window._s_top > -(tlist.width() - h)) || 
					(window._sp < 0 && window._s_top <= -(tlist.width() - h))
				) {
					var sign = (window._sp >= 0),
						val = Math.pow(window._sp * 15, 2),
						val = (sign)?val:-val;
					window._s_top -= val;
					if (window._s_top > 0){
						window._s_top = 0;
					}
					if (window._s_top < -(tlist.width() - h)){
						window._s_top = -(tlist.width() - h);
					}
					if ($('.fs_thmb_list').width() > $('.fs_thmb_viewport').width()) {
						tlist.stop().animate({
							left: window._s_top
						}, 500);
					}
				}
			}, 100);
		}).mouseleave(function(){
			clearInterval(window._sh);
		}).mousemove(function(e){
			var correction = $fs_title.width()+58;
				y = e.pageX-correction;
				h = $(this).width(),
				p = y / h;
										
			if (y > ($(window).width()-correction)*0.8) {
				window._sp = Math.round((p - 0.5) * 50) / 50;
			}
			else if (y < ($(window).width()-correction)*0.2) {
				window._sp = Math.round((p - 0.5) * 50) / 50;
			}
			else {window._sp =0}
		});		
}
/*function nextSlide() {
}*/


$(document).ready(function(){
	$('.fs_thmb_list').mousedown(function(){
		$('.fs_thmb_list').addClass('clicked');
	});
	$('.fs_thmb_list').mouseup(function(){
		$('.fs_thmb_list').removeClass('clicked');
	});
	
});
$(window).resize(function(){
	$('.fs_thmb_viewport').width($(window).width()-$fs_title.width()-58);
	$('.fs_thmb_list').css('left','0px');
});