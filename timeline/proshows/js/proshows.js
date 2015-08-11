$('document').ready(function() {
	curtain();
	alink();
	$(window).scroll(function() {
		scrollcontrol();
	});
});

function alink() {
	$('.proside input[type="radio"]').click(function() {
		address = $(this).val();
		$('html,body').animate({scrollTop:$(address).position().top},700);
    });

	$('.profoot').click(function() {
		max = document.getElementById("pro1").scrollHeight;
		if($('body').scrollTop() < max)
			address = "#pro2";
		else
			address = "#pro1";
		$('html,body').animate({scrollTop:$(address).position().top}, 700);
    });
	
}

function scrollcontrol() {
	max = document.getElementById("pro1").scrollHeight;
	if($('body').scrollTop() < max) {
		$('.prohead').css({'width':'100%', 'font-size':'1em', 'transition':'all ease-in-out 1s'});
		$('.proside').css({'display':'none', 'transition':'all ease-in-out 1s'});
		$('.profoot').css({'width':'100%', 'left':'0%'});
		$('.profoot #down').css({'left':'48%', 'transform':'rotate(0deg)', 'transition':'all ease-in-out 1s'});
	}
	else {
		$('.prohead').css({'width':'20%' ,'left':'1%', 'font-size':'0.5em', 'transition':'all ease-in-out 1s'});
		$('.proside').css({'display':'block', 'transition':'all ease-in-out 1s'});
		$('.profoot').css({'width':'80%', 'left':'20%'});
		$('.profoot #down').css({'left':'90%', 'transform':'rotate(900deg)', 'transition':'all ease-in-out 1s'});
	}
}

function curtain() {
	$('.prohead , .profoot').fadeTo(4500,'1');
	$('#cleft, #cright').animate({'width':'4%'},4000);
}