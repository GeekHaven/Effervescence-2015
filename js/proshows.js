$('document').ready(function() {
	$('#back1').css({'height':'105%', 'width':'105%', 'transition':'all ease-in-out 3s'});
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
		max = document.getElementById("pro2").scrollHeight;
		if($('body').scrollTop() < max)
			address = "#pro2";
		else
			address = "#pro1";
		$('html,body').animate({scrollTop:$(address).position().top}, 700);
    });
	
}

function scrollcontrol() {
	max = document.getElementById("pro2").scrollHeight;
	if($('body').scrollTop() < max) {
		$('#back1').css({'height':'105%', 'width':'105%', 'transition':'all ease-in-out 3s'});
		$('.profoot').css({'width':'100%', 'left':'0%'});
		$('.profoot #down').css({'left':'48%', 'transform':'rotate(0deg)', 'transition':'all ease-in-out 1s'});
	}
	else {
		$('#back1').css({'height':'100%', 'width':'100%'});
		$('.profoot').css({'width':'75%', 'left':'25%'});
		$('.profoot #down').css({'left':'90%', 'transform':'rotate(900deg)', 'transition':'all ease-in-out 1s'});
	}
}