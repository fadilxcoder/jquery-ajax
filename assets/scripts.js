/* fadilxcoder */

$(document).ready( function() { /* same as $(function(){  orr jQuery(document).ready( function() { */
    console.log('waiting...');
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
					console.log('200 OK')
				}
			},
			beforeSend	: function(){
				// codes to be executed just before sending the form's input data
				$('#submit-btn').attr('disabled', true).css('background-color', 'cyan');
			},
			success     : function(data){
				// success
				console.log(data)
			},
			error       : function(e){
				// Known errors
				console.log(e);
				//console.log(e.statusText);
			},
			fail        : function (){
				// Unknown errors
				console.log('Request Fail')
			},
			complete	: function(){
				// When ajax is complete after getting response
				$('#submit-btn').css('display', 'none');
				console.log("end here...");
			}
		});
    });
});