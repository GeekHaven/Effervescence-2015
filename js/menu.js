$(document).ready(function(){
    var flag = 0;
    $("#btn1").click(function(){
        if (flag == 0) {
            $("#box").animate({height: "300px",width:"270px"},{duration:400,easing:'swing'});
            $("#text1").delay(50).animate({left: '240px'},{duration: 300,easing:'swing'});
            $("#text2").delay(100).animate({left: '150px'});
            $("#text3").delay(200).animate({left: '150px'});
            $("#text4").delay(300).animate({left: '150px'});
            $("#text5").delay(400).animate({left: '210px'});
            $("#text6").delay(500).animate({left: '150px'});
            $('#btn1').attr('src', 'image/up.png');
            flag = 1;
        } else {

            $("#box").animate({height: "0px"},{duration:900});
            $("#text1").delay(500).animate({left: '-150px'},{duration: 300,easing:'swing'});
            $("#text2").delay(400).animate({left: '-150px'});
            $("#text3").delay(300).animate({left: '-150px'});
            $("#text4").delay(200).animate({left: '-150px'});
            $("#text5").delay(100).animate({left: '-190px'});
            $("#text6").delay(0).animate({left: '-150px'});
            $('#btn1').attr('src', 'image/down.png');
            flag = 0;
        }
    });
});
