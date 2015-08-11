
$(document).ready(function(){
    $("#open121").click(function(){
        
        $("#pop121").fadeIn(600);
    });
    $("#close121").click(function(){
        
        $("#pop121").fadeOut(600);
    });

});

$(document).ready(function(){
 $("#option1121").click(function(e){
        e.preventDefault();
        $("#b1121").show();
		$("#b2121").hide();
		$("#b3121").hide();
		$("#b4121").hide();
	});
});

$(document).ready(function(){
 $("#option2121").click(function(e){
        e.preventDefault();
        $("#b2121").show();
		$("#b1121").hide();
		$("#b3121").hide();
		$("#b4121").hide();
	});
});

$(document).ready(function(){
 $("#option3121").click(function(e){
        e.preventDefault();
        $("#b3121").show();
		$("#b4121").hide();
		$("#b2121").hide();
		$("#b1121").hide();
	});
});

$(document).ready(function(){
 $("#option4121").click(function(e){
        e.preventDefault();
        $("#b4121").show();
		$("#b3121").hide();
		$("#b2121").hide();
		$("#b1121").hide();
	});
});

