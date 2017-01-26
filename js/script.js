$(document).ready(function(){
	
	//getting all of the input elements
	var inputs = $("input");
	console.log(inputs[inputs.length-1].id);

	//when the input area is clicked away from
	$("input").on('blur', function(){
		var element = $(this);
		console.log($(this).attr("id"));
		//if the element val is not empty
		console.log(element.val());
		if(element.val() != ""){
			console.log("filled");
			$(element).addClass('filled');
		}	else {
			console.log("unfilled");
			$(element).removeClass('filled');
		}
	});
});