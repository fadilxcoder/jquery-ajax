/* fadilxcoder */

$(document).ready( function() { /* same as $(function(){  orr jQuery(document).ready( function() { */
    console.log('init!');
    $('#submit-btn').on( 'click', function(f) {

		// Prevent default action
		f.preventDefault();

		// When process include file upload
		var $fd			= new FormData();
		var $getVars	= $('#dataVars').val();
		var $rgsVars	= $('#rgsVars').val();
		var $getImage	= $('#imgVars').prop('files')[0];
		$fd.append('getVars', $getVars);
		$fd.append('rgsVars', $rgsVars);
		$fd.append('fileToUpload', $getImage);

		// process all data except file upload
		var $formData 	= $('#form-process');

		// $(this) take the jquery object and returns it, in this case - [ #submit-btn <=> this ]
		$(this).html("You clicked me !");

		$.ajax({
			url			: 'function.php',
			type		: 'POST',
			//data		: $formData.serializeArray(),
			/* When using FormData(), you need these, contentType & processData */
			data		: $fd,
			contentType : false,
			processData : false,
			/* EOF */
			cache       : false,
			dataType	: 'json',
			statusCode	: {
				// Depending on status code, you can trigger specific codes
				200 : function() {
					console.log('200 OK'); // Success Response code
				}
			},
			beforeSend	: function(){
				// codes to be executed just before sending the form's input data
				$('#submit-btn').attr('disabled', true).css('background-color', 'cyan');
			},
			success     : function(data){
				/* N.B : This part can be replace by .done() , for best practice AVOID */

				// success
				// console.log(data)
			},
			error       : function(e){
				/* N.B : This part can be replace by .fail() , for best practice AVOID */

				// Known errors
				// console.log(e);
				//console.log(e.statusText);
			},
			fail        : function (){
				/* N.B : For best practice AVOID  */

				// Unknown errors
				// console.log('Request Fail');
			},
			complete	: function(){
				/* N.B : This part can be replace by .always() , for best practice AVOID */

				// When ajax is complete after getting response
				// $('#submit-btn').css('display', 'none');
				// console.log("end here...");
			}
		})
		.done( function (data) { 
			//successFunction(data); // Response from function.php
		})
		.fail( function (jqXHR, textStatus, errorThrown) { 
			//errorFunction(jqXHR, textStatus, errorThrown);
		})
		.always( function(data) {
			// console.log('always!');
			// console.log(data); // Response .done() from function.php OR error fron .fail()
		})
		.then( function(reponse, textStatus, jqXH){
			/* N.B : Called only if succeed */
			// triggerMe(reponse, textStatus, jqXH);
		})
		;
	});
	
	function successFunction(data)
	{
		// console.log(data);
	}

	function errorFunction(jqXHR, textStatus, errorThrown)
	{
		// console.log(jqXHR); // Object
		// console.log(jqXHR.status) // Getting values in the object --> 404
		// console.log(textStatus); // --> error
		// console.log(errorThrown); // -> Not Found
	}

	function triggerMe(reponse, textStatus, jqXHR)
	{
		// console.log(reponse); // Response from function.php
		// console.log(textStatus); // --> success
		// console.log(jqXHR); // Object
		// console.log(jqXHR.status); // Getting values in the object --> 200
	}

});