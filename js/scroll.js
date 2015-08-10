

function slide() {
	$("html, body").mousewheel(function(e, delta) {
	
	  	this.scrollLeft -= (delta * 30);
		e.preventDefault();		
	});
}
