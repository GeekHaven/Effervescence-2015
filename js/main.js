$("document").ready(function() {
	slide();
	homeback();
	mapshow();
	google.maps.event.addDomListener(window, 'load', mapshow);
	setInterval(counter,1000);
//	imagezoom();
});

function slide() {
	maxscroll = $(".slide2").position().left;
	$("html, body").mousewheel(function(e, delta) {
//  	this.scrollLeft -= (delta * 30); 
		left = $("body").scrollLeft();
		console.log(e.originalEvent.wheelDelta);
		if(e.originalEvent.wheelDelta==120) {
			con = left-maxscroll;
			$(this).animate({scrollLeft:con},{duration:1000});
		}
		if(e.originalEvent.wheelDelta==-120) {
			con = left+maxscroll;
			$(this).animate({scrollLeft:con},{duration:1000});
		} 
		e.preventDefault();
	});
}

function homeback() {
	scopeHalf = $(".scope").width()/2;
	$(".slide1").mousemove(function(e) {
		$(".scope, .scopeFade").css({'left':e.pageX-scopeHalf, 'top':e.pageY-scopeHalf});
	});
}

function counter() {
	var d = new Date();
	var date = d.getDate();
	var month = d.getMonth();
	var year = d.getYear();
	var hour = d.getHours();
	var minute = d.getMinutes();
	var second = d.getSeconds();
	
	var date1 = 15;
	var month1 = 10;
	var year1 = 2015;
	var hour1 = 24;
	var minute1 = 60;
	var second1 = 60;
	
	var months = month1-month;
	var days = date1-date + months*30;
	var hours = hour1-hour;
	var minutes = minute1-minute;
	var seconds = second1-second;
	seconds = days*86400 + hours*3600 + minutes*60 + seconds;
	
	sec = seconds % 60;
	minutes = Math.floor((seconds/60)%60);
	hours = Math.floor((seconds/3600)%24);
	days = Math.floor(seconds/86400);
	if (days < 10)
		days = "0" + days;	
	if (hours < 10)
		hours = "0" + hours;	
	if (minutes < 10)
		minutes = "0" + minutes;
	if (sec < 10)
		sec = "0" + sec;

	$(".days #cvalue").html(days);
	ddays = Math.floor((365-days)*360/365) - 90;	
	daydate(ddays); 

	$(".hours #cvalue").html(hours);
	hhours = Math.floor((24-hours)*360/24) - 90;
	hourhours(hhours);

	$(".minutes #cvalue").html(minutes);
	mminutes = Math.floor((60-minutes)*360/60) - 90;	
	minminutes(mminutes);

	$(".seconds #cvalue").html(sec);
	sseconds = Math.floor((60-sec)*360/60) - 90;	
	secseconds(sseconds);
		
	seconds--;
	
	function daydate(d) {
		$(".days #cline").css("transform",'rotate(' + d + 'deg)');
			d+=180;
			/* 1st half */
			if(d>=90 && d<=270) {
				$(".days #cbackhide").css("background-image","linear-gradient(90deg, white 50%, transparent 50%),linear-gradient(" + d + "deg, #2E2E2E 50%, transparent 50%)");
			}
			/* 2nd half */
			if(d>270 && d<=450) {
				$(".days #cbackhide").css("background-image","linear-gradient(" + d + "deg, #2E2E2E 50%, transparent 50%),linear-gradient(90deg, transparent 50%, #2E2E2E 50%)");
			}
	}
	
	function hourhours(d){
		$(".hours #cline").css("transform",'rotate(' + d + 'deg)');
			d+=180;
			/* 1st half */
			if(d>=90 && d<=270) {
				$(".hours #cbackhide").css("background-image","linear-gradient(90deg, white 50%, transparent 50%),linear-gradient(" + d + "deg, #2E2E2E 50%, transparent 50%)");
			}
			/* 2nd half */
			if(d>270 && d<=450) {
				$(".hours #cbackhide").css("background-image","linear-gradient(" + d + "deg, #2E2E2E 50%, transparent 50%),linear-gradient(90deg, transparent 50%, #2E2E2E 50%)");
			}
	}
	
	function minminutes(d) {
		$(".minutes #cline").css("transform",'rotate(' + d + 'deg)');
			d+=180;
			/* 1st half */
			if(d>=90 && d<=270) {
				$(".minutes #cbackhide").css("background-image","linear-gradient(90deg, white 50%, transparent 50%),linear-gradient(" + d + "deg, #2E2E2E 50%, transparent 50%)");
			}
			/* 2nd half */
			if(d>270 && d<=450) {
				$(".minutes #cbackhide").css("background-image","linear-gradient(" + d + "deg, #2E2E2E 50%, transparent 50%),linear-gradient(90deg, transparent 50%, #2E2E2E 50%)");
			}
	}
	
	function secseconds(d) {
		$(".seconds #cline").css("transform",'rotate(' + d + 'deg)');
			d+=180;
			/* 1st half */
			if(d>=90 && d<=270) {
				$(".seconds #cbackhide").css("background-image","linear-gradient(90deg, white 50%, transparent 50%),linear-gradient(" + d + "deg, #2E2E2E 50%, transparent 50%)");
			}
			/* 2nd half */
			if(d>270 && d<=450) {
				if(d==450)
					d=90;
				$(".seconds #cbackhide").css("background-image","linear-gradient(" + d + "deg, #2E2E2E 50%, transparent 50%),linear-gradient(90deg, transparent 50%, #2E2E2E 50%)");
			}
	}
}

function mapshow() {
	var mapCanvas = document.getElementById('mapcanvas');
	var mapOptions = {
		center: new google.maps.LatLng(25.429988100000000000, 81.772549900000060000),
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);
}	

function imagezoom() {
	$(".slide1 #back").mlens({
		imgSrc: $(".slide1 #back").attr("data-big"),	    // path of the hi-res version of the image
		imgSrc2x: $(".slide1 #back").attr("data-big2x"),  // path of the hi-res @2x version of the image
                                                                   //for retina displays (optional)
		lensShape: "circle",				// shape of the lens (circle/square)
		lensSize: 400,					// size of the lens (in px)
		borderSize: 4,					// size of the lens border (in px)
		borderColor: "#fff",				// color of the lens border (#hex)
		borderRadius: 0,				// border radius (optional, only if the shape is square)
		zoomLevel: 2                                    // zoom level multiplicator (number)
	});
}