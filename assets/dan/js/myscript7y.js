    $(document).ready(function() {

        loadVideo();

	//Make all info txt centered.
	$(".title, #info1-2z").removeClass("col-lg-7 col-md-6");
	$(".title, #info1-18").removeClass("col-lg-7 col-md-6");
	$(".title, #info1-19").removeClass("col-lg-7 col-md-6");

        if (!$.isMobile()) adjustDesktop();

    });


     // Add my local background video, + optional poster
     // Check for "vid.mp4" vs "vid.mp4 poster.jpg"
     //
     function loadVideo() {
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
	// Stop page jump
	return false;
     }

     // These are desktop mode overrides as mystyle*.css was built for mobile
     //
     function adjustDesktop() {
	 // Build myArrow
	    var myArrow  = $(`<div class="mbr-arrow hidden-sm-down" aria-hidden="true">
	                      <a href="#info1-v"> <i class="mbri-down mbr-iconfont"></i> </a>
	                      </div>`);

	 // Add Arrow navagation first, from video to first info1 section, prices.
	 // Then fade in as poor mans animation of the poster, until make a loading gif.
            $("#header2-f").append(myArrow)
	                   .fadeTo(0,0)
                           .fadeTo(2000, 1);


         // Larger marzipano viewport on desktop.  Now default
	 // $('iframe').height(500);

	    $("#info1-19").find("h3").html("<br>Select neighborhood. &nbsp Drag to view. &nbsp Zoom with mouse-wheel.");

	 // Desktop nav bar to be sticky
	    $('nav').addClass('navbar-fixed-top');

	 // Stop page jump
            return false;
     }
