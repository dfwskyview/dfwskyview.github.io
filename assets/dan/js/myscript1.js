    $(document).ready(function() {

	// Add my video for mobile or desktop
	myvid = $("section[data-bg-video]").attr("data-bg-video");
	$("section[data-bg-video]").html('<video class="mbr-background-video" poster="samples/homeposter01.jpg" muted autoplay loop playsinline> <source src="'+myvid+'" type="video/mp4"> Your browser does not support HTML5 video.  </video>')

        if (!$.isMobile()) {   // This is the Desktop section 
	    // For nicer video placement on desktop, should happen first?
            $("section[data-bg-video]").css({"top": "50px", "padding-bottom": "0"});

	    // Fade in as poor mans animation of the poster, until make it a gif.
            $("section[data-bg-video]").fadeTo(0,0);
            $("section[data-bg-video]").fadeTo(2000, 1);

	    //So Desktop text can be wide and centered in these text info sections
	    $("section#info1-18").find(".title").removeClass("col-lg-7 col-md-6");
	    $("section#info1-19").find(".title").removeClass("col-lg-7 col-md-6");

	    //So Desktop shows different text than the default for mobile 
	    $("section#info1-18").find("h3").html("<br><br>Add 360 Interaction to your website<br> <br>Select neighborhood. &nbsp Drag to view. &nbsp Zoom with mouse-wheel.");
	    $("section#info1-19").find("h3").html("<br>Select neighborhood. &nbsp Drag to view. &nbsp Zoom with mouse-wheel.");
	    var myArrow = $('<div class="mbr-arrow hidden-sm-down" aria-hidden="true"></div>');
	    var myArrow2 = myArrow.clone()

	    myArrow.html('<a href="#info1-v"> <i class="mbri-down mbr-iconfont"></i> </a>');
	    $("section[data-bg-video]").append(myArrow);

	    // Works but not tested with kuula
	    //myArrow2.html('<a href="#form1-h"> <i class="mbri-down mbr-iconfont"></i> </a>');
	    //$("section#info1-18").find(".title").append(myArrow2);

	}

    });

