$(document).ready(function(){
var message = "";
var collect = 17;
function verify (collect){
	var bool = true;
		if(isNaN(collect)){
			message = 'This is not a number';
			bool = false;
		}	else if (collect % 1 !=0) {
			message = 'No decimals allowed';
			bool = false;
		}	else if (collect <= 0){
			message = 'Enter positive numbers';
			bool = false;
		}	else if (collect > 1000){
			message = 'Too big';
			bool = false;	
		}	else {
			message = collect + ' is your number';
			console.log(collect);
		}	
		return bool;
	}
	var fizzBuzz = function(collect){
		var x = collect;
		for (var i = 1; i <= x; i++) {
			if(i % 3 === 0 && i % 5 === 0) {
		 			$('.results').append('<p>fizz buzz</p>');
			} else if (i % 3 === 0) {
				$('.results').append('<p>fizz</p>');
			} else if (i % 5 === 0) {
				$('.results').append('<p>buzz</p>');
			} else {
				$('.results').append('<p>' + i + '</p>');
			}
		}
	};
	var handler = function (){
		var collect = $('#fbNum').val();
		/*$('.results p').remove();*/
		$('.results').html(" ");
		if ($.trim(collect) != "") {
			collect = +collect;
			if (verify(collect)) {
				fizzBuzz(collect);
			};
		};
		/*console.log(message);*/
		$('.message-holder').text(message);
	};
	$('button').click(handler);
	$('#fbNum').keypress(function(event){
		if(event.which == 13){
			handler();
		};
	});
});	
