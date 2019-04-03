    $(document).ready(function() {

    // Add my local background video, + optional poster 
    // Check for "vid.mp4" vs "vid.mp4 poster.jpg"
    // Sadly, selectors via IDs are faster than by classes or attributes

    //  var $bgvidSection = $("section[data-bg-video]"); //store selector result container
	var $bgvidSection = $("#header2-f");             
	var myVid = $bgvidSection.attr("data-bg-video"); 
	if (myVid.indexOf(' ') !== -1) {
	    var myParse = myVid.split(" "); //arg0 = video file,  arg1 = poster image
	    $bgvidSection.html('<video class="mbr-background-video" poster="'+myParse[1]+'" \
	                         muted autoplay loop playsinline> \
			         <source src="'+myParse[0]+'" type="video/mp4"> \
				 Your browser does not support HTML5 video.  </video>');
        } else  { // No poster sent as 2nd arg 
	    $bgvidSection.html('<video class="mbr-background-video" \
	                         muted autoplay loop playsinline> \
			         <source src="'+myVid+'" type="video/mp4"> \
			         Your browser does not support HTML5 video. </video>');
        }

	// These are desktop mode overrides as mystyle1.css was built for mobile
        if (!$.isMobile()) { 

	 // Build myArrow
	 // var myInfoId = $("section.info1").first().attr("id");
	    var myArrow  = $('<div class="mbr-arrow hidden-sm-down" aria-hidden="true">' +
	                     '<a href="#info1-v"> <i class="mbri-down mbr-iconfont"></i> </a>' +
	                     '</div>');

	    // Nicer video placement on desktop.  Move css to top?
	    // Then fade in as poor mans animation of the poster, until make a loading gif.
	    // Then add Arrow navagation from video to first info1 section, prices.
            $bgvidSection.fadeTo(0,0)
                         .fadeTo(2000, 1)
                         .append(myArrow);


	 // Make Kuula Desktop text wide-centered in both these info sections
	 // $('h3:contains("neighborhood")').parent().removeClass("col-lg-7 col-md-6");


	 // Build Arrow navigation from kuula-info to last info1 section, kuula-viewport.
	 // var myKuula = $("section.info1").last().attr("id");
	    var myArrow2  = $('<div class="mbr-arrow hidden-sm-down" aria-hidden="true">' +
	                     '<a href="#info1-19"> <i class="mbri-down mbr-iconfont"></i> </a>' +
	                     '</div>');

	    //Make Kuula Desktop show different text than mobile,wide and add arrow navigation
	    $(".title, #info1-18").removeClass("col-lg-7 col-md-6");
	    $(".title, #info1-19").removeClass("col-lg-7 col-md-6");

	    $("#info1-18").append(myArrow2)
	                  .find("h3").html("<br><br>Add a 360 Viewport to your website");

	    $("#info1-19").find("h3").html("<br>Select neighborhood. &nbsp Drag to view. &nbsp Zoom with mouse-wheel.");

	 // Desktop nav bar to be sticky
	    $('nav').addClass('navbar-fixed-top');
	}

    });

