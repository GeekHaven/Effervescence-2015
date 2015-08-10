$("document").ready(function() {
	slide();
});

function slide() {
	$("html, body").mousewheel(function(e, delta) {
		maxscroll = $(".sizeblock").position().left; 
		left = $("body").scrollLeft();
		e.preventDefault();
		if(e.originalEvent.wheelDelta==120) {
			con = left-maxscroll;
			$(this).animate({scrollLeft:con},{duration:1000});
		}
		if(e.originalEvent.wheelDelta==-120) {
			con = left+maxscroll;
			$(this).animate({scrollLeft:con},{duration:1000});
		} 
	});
	$('html, body').keydown(function(e){
		maxscroll = $(".sizeblock").position().left;
		left = $("body").scrollLeft();
		e.preventDefault();
		if(e.which==37) {
			con = left-maxscroll;
			$(this).animate({scrollLeft:con},{duration:1000});
		}
		if(e.which==39) {
			con = left+maxscroll;
			$(this).animate({scrollLeft:con},{duration:1000});
		}
	});
}