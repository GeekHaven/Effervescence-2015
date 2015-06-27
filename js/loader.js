/*loader */
var tl = new TimelineMax();
var num = $('#num');
tl.add("loader");

tl.to($("#bar"), 3, {
  width : "47%"
}, "loader+=1");
tl.to($('#num'), 3, {
  x : "45%"
}, "loader+=1"); 


$(window).load(function() {
  tl.to($('#bar'), 2, {
    width : "98%"
  }, "loader+=2")
  ,tl.to($('#bar'), 1, {
    width : "+=2%"
  }, "loader+=4") 
 , tl.to($('.loader'), 3, {
    opacity : 0,
    height : 0,
	zIndex : 0,
	ease : Power4.none,/*give any ease you want here */
  })
});

/* loader end*/

