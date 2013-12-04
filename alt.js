// Convert numbers to words
// copyright 25th July 2006, by Stephen Chapman http://javascript.about.com
// permission to use this Javascript on your web page is granted
// provided that all of the code (including this copyright notice) is
// used exactly as shown (you can change the numbering system if you wish)

// American Numbering System
var th = ['','thousand','million', 'billion','trillion'];
// uncomment this line for English Number System
// var th = ['','thousand','million', 'milliard','billion'];

var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine']; var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen']; var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety']; function toWords(s){s = s.toString(); s = s.replace(/[\, ]/g,''); if (s != parseFloat(s)) return 'not a number'; var x = s.indexOf('.'); if (x == -1) x = s.length; if (x > 15) return 'too big'; var n = s.split(''); var str = ''; var sk = 0; for (var i=0; i < x; i++) {if ((x-i)%3==2) {if (n[i] == '1') {str += tn[Number(n[i+1])] + ' '; i++; sk=1;} else if (n[i]!=0) {str += tw[n[i]-2] + ' ';sk=1;}} else if (n[i]!=0) {str += dg[n[i]] +' '; if ((x-i)%3==0) str += 'hundred ';sk=1;} if ((x-i)%3==1) {if (sk) str += th[(x-i-1)/3] + ' ';sk=0;}} if (x != s.length) {var y = s.length; str += 'point '; for (var i=x+1; i<y; i++) str += dg[n[i]] +' ';} return str.replace(/\s+/g,' ');}

// End numbers to words.
function rstring(l) {
	var c = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
	var l = l || 11;
	var s = '';
	for (var i=0; i<l; i++) {
		var r = Math.floor(Math.random() * c.length);
		s += "<span class='ltr'>"+c.substring(r,r+1)+"</span>";
	}
	return s;	
}

function word(word) {
	var string = '';
	for(var i=0; i<word.length; i++) {
		string += "<span class='ltr'>"+word.substring(i,i+1)+"</span>";
	}
	return "<span class='active'>"+string+"</span>";
}

function wordclock() {

  var date = new Date;
  var mins = date.getMinutes();	
  var hour = toWords((date.getHours() > 12) ? date.getHours()-12 : date.getHours()).toUpperCase().replace(/ /g,'');
  var minword = toWords(mins).toUpperCase().split(' ');
    
  var lines = [];
  var html = '';

  lines.push(word('IT')+rstring(1)+word('IS')+rstring(6));
  lines.push(rstring(11)); // Blank line.
      
  // If "O'clock"
  if(mins == 0) {
	  lines.push(word(hour)+rstring(11-hour.length));  	  
	  lines.push(rstring(11)); // Blank line.
	  lines.push(rstring(11)); // Blank line.
	  lines.push(rstring(11)); // Blank line.
	  lines.push(rstring(11)); // Blank line.
	  lines.push(rstring(11)); // Blank line.
	  lines.push(rstring(11)); // Blank line.
	  lines.push(rstring(4)+word('O\'CLOCK'));
  } else {
  	  var minlabel = (mins == 1) ? 'MINUTE' : 'MINUTES';
 	  if(mins <= 30) {
 	  	  jQuery.each(minword, function(key, val) {
	 	  	  lines.push(word(val)+rstring(11-val.length));
 	  	  });
		  lines.push(rstring(11-minlabel.length)+word(minlabel));
		  lines.push(rstring(7)+word('PAST'));	  
	  } else {
 	  	  jQuery.each(minword, function(key, val) {
	 	  	  lines.push(word(val)+rstring(11-val.length));
 	  	  });
		  lines.push(rstring(11-minlabel.length)+word(minlabel));
		  lines.push(rstring(9)+word('TO'));

	  }
	  lines.push(rstring(11));
	  lines.push(word(hour)+rstring(11-hour.length));  
	  lines.push(rstring(11)); // Blank line.
	  lines.push(rstring(11)); // Blank line.
  }  
    
  jQuery.each(lines, function(key, val) {
	 html += val;
  });
   
  jQuery('#clock').html(html);
  
}

wordclock();
setInterval(function() { wordclock(); }, 1000);
