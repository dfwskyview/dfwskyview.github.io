$(document).ready(function(){

	// Mobile override HD video to LD version.
	if ($.isMobile()) {   

	    $("source").each(function() {

	      var HDurl = $(this).attr("src");

	      if (HDurl.indexOf("HD") !== -1) {
	         var LDurl = HDurl.replace("HD","LD");
	      } else {
	         var LDurl = HDurl.replace(".mp4","LD.mp4");
	      }

	      $(this).attr("src", LDurl)
	             .parent()[0].load();

              //console.log(HDurl+' becomes '+LDurl);

	    });
	}
	    
});

