$(document).ready(function(){
	$('button').click(function() {
		var collect = prompt('Please enter a number.');
		if(isNaN(collect)){
			alert('This is not a number');
		}	else {
			var x =+ collect;
			alert(x);
			console.log(collect);
			for (var i = 1; i <= x; i++) {
    			if(i % 15 === 0) {
       	 			$('body').append('<p>fizz buzz</p>');
      			} else if (i % 3 === 0) {
        			$('body').append('<p>fizz</p>');
      			} else if (i % 5 === 0) {
        			$('body').append('<p>buzz</p>');
      			} else {
        			$('body').append('<p>' + i + '</p>');
      			}
			}
		}
	});
});