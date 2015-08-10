$(document).ready(function(){
	var flag=0;
	$('#menu-text').click(function(){
		if(flag==0){
    		$("#box").animate({height: "300px"},200);
        	$("#text1").delay(50).animate({left: '280px', top: '255px'});
        	$("#text2").delay(100).animate({left: '280px', top: '260px'});
        	$("#text3").delay(150).animate({left: '280px', top: '265px'});
        	$("#text4").delay(200).animate({left: '280px', top: '270px'});
        	$("#text5").delay(250).animate({left: '280px', top: '275px'});
        	$("#text6").delay(300).animate({left: '280px', top: '280px'});
        	$("#arrow").css({'transform':'rotate(180deg)', 'transition':'all ease-in-out 1s'});
    		flag=1;
    	}
    	else{
    		$("#box").delay(1000).animate({height: "0px"});
       		$("#text1").delay(400).animate({left: '-250px', top: '-180px'},"slow");
        	$("#text2").delay(350).animate({left: '-250px', top: '-150px'},"slow");
        	$("#text3").delay(300).animate({left: '-250px', top: '-120px'},"slow");
        	$("#text4").delay(250).animate({left: '-250px', top: '-90px'},"slow");
        	$("#text5").delay(200).animate({left: '-250px', top: '-60px'},"slow");
        	$("#text6").delay(150).animate({left: '-250px', top: '-30px'},"slow");
        	$("#arrow").css({'transform':'rotate(0deg)', 'transition':'all ease-in-out 1s'});
        	flag=0;
    	}
	});
});