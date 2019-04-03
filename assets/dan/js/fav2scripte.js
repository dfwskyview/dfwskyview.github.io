$(document).ready(function(){

	// Mobile override HD video to LD version.
	if ($.isMobile()) {   

	    $("source").each(function() {

	      var HDurl = $(this).attr("src");

	      if (HDurl.indexOf("HD") !== -1) {
	         $(this).attr("src", HDurl.replace("HD","LD"))
	                .parent()[0].load();
	      } else {
	         $(this).attr("src", HDurl.replace(".mp4","LD.mp4"))
	                .parent()[0].load();
	      }

	    });
	}
	    
});

