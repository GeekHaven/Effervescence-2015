$('document').ready(function() {
	
	$(document).mousewheel(function(e, delta) {
		console.log('hereeee');
	  	this.scrollLeft -= (500);
		e.preventDefault();		
	});
});
