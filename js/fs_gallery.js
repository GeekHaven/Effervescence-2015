jQuery.fn.fs_gallery = function(t) {
    var e = ($(this), setInterval("nextSlide()", t.slide_time));
    for ($("body").append('<div class="fs_gallery_wrapper"><ul class="fs_gallery_container ' + t.fx + '"/><a href="javascript:void(0)" class="fs_slider_prev"/><a href="javascript:void(0)" class="fs_slider_next"/><div class="fs_thmb_viewport"><div class="fs_thmb_wrapper"><ul class="fs_thmb_list" style="width:' + 88 * t.slides.length + 'px"/></div></div>'), $("header ul.menu").append('<li class="thumb_toggle"><a href="javascript:void(0)"></a></li>'), $fs_container = $(".fs_gallery_container"), $fs_thmb = $(".fs_thmb_list"), $fs_title = $(".fs_title_wrapper"), thisSlide = 0; thisSlide <= t.slides.length - 1;) $fs_container.append('<li class="fs_slide slide' + thisSlide + '" data-count="' + thisSlide + '" data-fit="' + t.slides[thisSlide].fit + '" data-src="' + t.slides[thisSlide].image + '"></li>'), $fs_thmb.append('<li class="fs_slide_thmb slide' + thisSlide + '" data-count="' + thisSlide + '"><img alt="' + t.slides[thisSlide].alt + " " + thisSlide + '" src="' + t.slides[thisSlide].thmb + '"/><div class="fs_thmb_fadder"></div></li>'), thisSlide++;
    $fs_container.find("li.slide0").addClass("current-slide").attr("style", "background:url(" + $fs_container.find("li.slide0").attr("data-src") + ") no-repeat; background-size:" + $fs_container.find("li.slide0").attr("data-fit") + ";"), $fs_container.find("li.slide1").attr("style", "background:url(" + $fs_container.find("li.slide1").attr("data-src") + ") no-repeat; background-size:" + $fs_container.find("li.slide1").attr("data-fit") + ";"), $(".fs_title").text(t.slides[0].title), $(".fs_descr").text(t.slides[0].description), $(".fs_thmb_viewport").width($(window).width()), $(".fs_slide_thmb").click(function() {
        goToSlide(parseInt($(this).attr("data-count")))
    }), $(".fs_slider_prev").click(function() {
        prevSlide()
    }), $(".fs_slider_next").click(function() {
        nextSlide()
    }), $(".thumb_toggle a").click(function() {
        $(".fs_title_wrapper").toggleClass("fs_hide"), $(".fs_thmb_viewport").toggleClass("fs_hide")
    }), nextSlide = function() {
        beforeChange(), clearInterval(e), thisSlide = parseInt($(".fs_gallery_container").find(".current-slide").attr("data-count")), thisSlide++, cleanSlide = thisSlide - 2, nxtSlide = thisSlide + 1, thisSlide == $(".fs_gallery_container").find("li").length && (thisSlide = 0, cleanSlide = $(".fs_gallery_container").find("li").length - 3, nxtSlide = thisSlide + 1), 1 == thisSlide && (cleanSlide = $(".fs_gallery_container").find("li").length - 2), $(".fs_title").fadeOut(300), $(".fs_descr").fadeOut(300, function() {
            $(".fs_title").text(t.slides[thisSlide].title), $(".fs_descr").text(t.slides[thisSlide].description), $(".fs_title").fadeIn(300), $(".fs_descr").fadeIn(300)
        }), $(".fs_gallery_container").find(".slide" + cleanSlide).attr("style", ""), $(".fs_gallery_container").find(".slide" + thisSlide).attr("style", "background:url(" + $(".slide" + thisSlide).attr("data-src") + ") no-repeat; background-size:" + $(".slide" + thisSlide).attr("data-fit") + ";"), $(".fs_gallery_container").find(".slide" + nxtSlide).attr("style", "background:url(" + $(".slide" + (thisSlide + 1)).attr("data-src") + ") no-repeat; background-size:" + $(".slide" + nxtSlide).attr("data-fit") + ";"), $(".current-slide").removeClass("current-slide"), $(".slide" + thisSlide).addClass("current-slide"), e = setInterval("nextSlide()", t.slide_time), setTimeout("afterChange()", 500)
    }, prevSlide = function() {
        beforeChange(), clearInterval(e), thisSlide = parseInt($(".fs_gallery_container").find(".current-slide").attr("data-count")), thisSlide--, nxtSlide = thisSlide - 1, cleanSlide = thisSlide + 2, thisSlide < 0 && (thisSlide = $(".fs_gallery_container").find("li").length - 1, cleanSlide = 1), thisSlide == $(".fs_gallery_container").find("li").length - 2 && (cleanSlide = 0), $(".fs_title").fadeOut(500), $(".fs_descr").fadeOut(500, function() {
            $(".fs_title").text(t.slides[thisSlide].title), $(".fs_descr").text(t.slides[thisSlide].description), $(".fs_title").fadeIn(500), $(".fs_descr").fadeIn(500)
        }), $(".fs_gallery_container").find(".slide" + cleanSlide).attr("style", ""), $(".fs_gallery_container").find(".slide" + thisSlide).attr("style", "background:url(" + $(".slide" + thisSlide).attr("data-src") + ") no-repeat; background-size:" + $(".slide" + thisSlide).attr("data-fit") + ";"), $(".fs_gallery_container").find(".slide" + nxtSlide).attr("style", "background:url(" + $(".slide" + (thisSlide + 1)).attr("data-src") + ") no-repeat; background-size:" + $(".slide" + nxtSlide).attr("data-fit") + ";"), $(".current-slide").removeClass("current-slide"), $(".slide" + thisSlide).addClass("current-slide"), e = setInterval("nextSlide()", t.slide_time), setTimeout("afterChange()", 500)
    }, goToSlide = function(i) {
        beforeChange(), clearInterval(e), oldSlide = parseInt($(".fs_gallery_container").find(".current-slide").attr("data-count")), thisSlide = i, $(".fs_title").fadeOut(300), $(".fs_descr").fadeOut(300, function() {
            $(".fs_title").text(t.slides[thisSlide].title), $(".fs_descr").text(t.slides[thisSlide].description), $(".fs_title").fadeIn(300), $(".fs_descr").fadeIn(300)
        }), $(".fs_gallery_container").find(".fs_slide").attr("style", ""), $(".fs_gallery_container").find(".slide" + thisSlide).attr("style", "background:url(" + $(".slide" + thisSlide).attr("data-src") + ") no-repeat; background-size:" + $(".slide" + thisSlide).attr("data-fit") + ";"), $(".fs_gallery_container").find(".slide" + (thisSlide + 1)).attr("style", "background:url(" + $(".slide" + (thisSlide + 1)).attr("data-src") + ") no-repeat; background-size:" + $(".slide" + thisSlide + 1).attr("data-fit") + ";"), $(".current-slide").removeClass("current-slide"), $(".slide" + thisSlide).addClass("current-slide"), e = setInterval("nextSlide()", t.slide_time), setTimeout("afterChange()", 500)
    }, beforeChange = function() {}, afterChange = function() {}, $(".fs_thmb_viewport").width($(window).width()).mouseenter(function() {
        var t = $(this).width(),
            e = $(".fs_thmb_list");
        window._s_top = parseInt(e.css("left")), window._sh = setInterval(function() {
            if (window._s_top >= 0 && window._sp > 0 || window._s_top < 0 && window._s_top > -(e.width() - t) || window._sp < 0 && window._s_top <= -(e.width() - t)) {
                var i = window._sp >= 0,
                    s = Math.pow(15 * window._sp, 2),
                    s = i ? s : -s;
                window._s_top -= s, window._s_top > 0 && (window._s_top = 0), window._s_top < -(e.width() - t) && (window._s_top = -(e.width() - t)), $(".fs_thmb_list").width() > $(".fs_thmb_viewport").width() && e.stop().animate({
                    left: window._s_top
                }, 500)
            }
        }, 100)
    }).mouseleave(function() {
        clearInterval(window._sh)
    }).mousemove(function(t) {
        var e = $fs_title.width() + 58;
        y = t.pageX - e, h = $(this).width(), p = y / h, window._sp = y > .8 * ($(window).width() - e) ? Math.round(50 * (p - .5)) / 50 : y < .2 * ($(window).width() - e) ? Math.round(50 * (p - .5)) / 50 : 0
    })
}, $(document).ready(function() {
    $(".fs_thmb_list").mousedown(function() {
        $(".fs_thmb_list").addClass("clicked")
    }), $(".fs_thmb_list").mouseup(function() {
        $(".fs_thmb_list").removeClass("clicked")
    })
}), $(window).resize(function() {
    $(".fs_thmb_viewport").width($(window).width()), $(".fs_thmb_list").css("left", "0px")
});