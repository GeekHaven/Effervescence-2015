// JavaScript Document
var d = new Date();
var date = d.getDate();
var month = d.getMonth();
var year = d.getYear();
var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();

var date1 = 26;
var month1 = 11;
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

function tick() {
	sec = seconds % 60;
	minutes = Math.floor((seconds/60)%60);
	hours = Math.floor((seconds/3600)%24);
	days = Math.floor(seconds/86400);
    if (sec < 10)
        sec = "0" + sec;
	if (minutes < 10)
        minutes = "0" + minutes;
    if (days < 10)
        days = "0" + days;	


	var dd = document.getElementById("ddays");
	dd.innerHTML= days;
	ddays = Math.floor((365-days)*360/365) - 90;	
	daydate(ddays); 

	var hh = document.getElementById("hhours");
	hh.innerHTML = hours;
	hhours = Math.floor((24-hours)*360/24) - 90;
	hourhours(30);

	var mm = document.getElementById("mminutes");
	mm.innerHTML= minutes;
	mminutes = Math.floor((60-minutes)*360/60) - 90;	
	minminutes(mminutes);

	var ss = document.getElementById("sseconds");
	ss.innerHTML= sec;
	sseconds = Math.floor((60-sec)*360/60) - 90;	
	secseconds(sseconds);
		
	seconds--;
}

function daydate(d) {
	$("#dl").css("transform",'rotate(' + d + 'deg)');
		d+=180;
		/* 1st half */
		if(d>=90 && d<=270) {
			$("#dh").css("background-image","linear-gradient(90deg, white 50%, transparent 50%),linear-gradient(" + d + "deg, red 50%, transparent 50%)");
		}
		/* 2nd half */
		if(d>270 && d<=450) {
			$("#dh").css("background-image","linear-gradient(" + d + "deg, red 50%, transparent 50%),linear-gradient(90deg, transparent 50%, red 50%)");
		}
}

function hourhours(d){
	$("#hl").css("transform",'rotate(' + d + 'deg)');
		d+=180;
		/* 1st half */
		if(d>=90 && d<=270) {
			$("#hh").css("background-image","linear-gradient(90deg, white 50%, transparent 50%),linear-gradient(" + d + "deg, red 50%, transparent 50%)");
		}
		/* 2nd half */
		if(d>270 && d<=450) {
			$("#hh").css("background-image","linear-gradient(" + d + "deg, red 50%, transparent 50%),linear-gradient(90deg, transparent 50%, red 50%)");
		}
}

function minminutes(d) {
	$("#ml").css("transform",'rotate(' + d + 'deg)');
		d+=180;
		/* 1st half */
		if(d>=90 && d<=270) {
			$("#mh").css("background-image","linear-gradient(90deg, white 50%, transparent 50%),linear-gradient(" + d + "deg, red 50%, transparent 50%)");
		}
		/* 2nd half */
		if(d>270 && d<=450) {
			$("#mh").css("background-image","linear-gradient(" + d + "deg, red 50%, transparent 50%),linear-gradient(90deg, transparent 50%, red 50%)");
		}
}

function secseconds(d) {
	$("#sl").css("transform",'rotate(' + d + 'deg)');
		d+=180;
		/* 1st half */
		if(d>=90 && d<=270) {
			$("#sh").css("background-image","linear-gradient(90deg, white 50%, transparent 50%),linear-gradient(" + d + "deg, red 50%, transparent 50%)");
		}
		/* 2nd half */
		if(d>270 && d<=450) {
			if(d==450)
				d=90;
			$("#sh").css("background-image","linear-gradient(" + d + "deg, red 50%, transparent 50%),linear-gradient(90deg, transparent 50%, red 50%)");
		}
}

function startCountdown() {
    setInterval(tick, 1000);
}

$("document").ready(function() {
    startCountdown();
});
