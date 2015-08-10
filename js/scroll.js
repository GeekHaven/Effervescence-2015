$("document").ready(function() {
	slide();
});

function slide() {
	$("html, body").mousewheel(function(e, delta) {
		console.log('shit');
	  	this.scrollLeft -= (delta * 30);
		e.preventDefault();		
	});
}