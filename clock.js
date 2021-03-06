function wordclock() {
  var date = new Date;
  var mins = date.getMinutes();	
  var rmin = 5 * Math.round(mins/5); // Round to nearest 5 minutes.
  var hour = (rmin <= 30) ? date.getHours() : date.getHours() + 1;
  if(hour == 24) {
	  hour = 0;
  }
  var desc = "";
  if(rmin == 0) {
	desc = "oclock";
  } else if(rmin <= 30) {
	desc = "past";
  } else {
    desc = "to";
  }
  var xmin = (mins <= 30) ? rmin : (60 - rmin);
  var desc = (xmin == 15) ? desc+", .a" : desc;
  jQuery.when(jQuery(".active").removeClass("active")).then(function() {
    jQuery(".it, .is, .min"+xmin+", .hr"+hour+", ."+desc).addClass("active");		
  });		
}

wordclock();
setInterval(function() { wordclock(); }, 1000);
