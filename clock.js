function wordclock() {
  var date = new Date;
  var mins = date.getMinutes();	
  var rmin = 5 * Math.round(mins/5); // Round to nearest 5 minutes.
  var hour = (mins <= 30) ? date.getHours() : date.getHours() + 1;	
  var desc = (mins <= 30) ? "past" : "to";
  var xmin = (mins <= 30) ? rmin : (60 - rmin);
  var desc = (xmin == 15) ? desc+", .a" : desc;
  jQuery.when(jQuery(".active").removeClass("active")).then(function() {
    jQuery(".min"+xmin+", .hr"+hour+", ."+desc).addClass("active");		
  });		
}

wordclock();
setInterval(function() { wordclock(); }, 1000);
