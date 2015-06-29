$(window).ready(function() {
	$('.item img').attr('width', window.innerWidth);
	$('.item img').attr('height', window.innerHeight);
});

$(window).resize(function() {
	$('.item img').attr('width', window.innerWidth);
	$('.item img').attr('height', window.innerHeight);
});