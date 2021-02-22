/* fadilxcoder */

$(document).ready( function() { /* same as $(function(){  orr jQuery(document).ready( function() { */
	console.log('init!');
	
	// AJAX
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
		.done( function (data, textStatus, jqXHR) { 
			// successFunction(data, textStatus, jqXHR);
		})
		.fail( function (jqXHR, textStatus, errorThrown) { 
			// errorFunction(jqXHR, textStatus, errorThrown);
		})
		.always( function(reponse, textStatus, jqXHR) {
			// console.log('always!');
			// console.log(data); // Response .done() from function.php OR error fron .fail()
		})
		.then( function(reponse, textStatus, jqXHR){
			/* N.B : Called only if succeed */
			// triggerMe(reponse, textStatus, jqXHR);
		})
		;
	});
	
	// AJAX GET ~ API

	// var $url = 'https://reqres.in/api/users/2'; // Specific User
	// var $url = 'https://reqres.in/api/users'; // All users
	// var $url = 'https://reqres.in/api'; // Fake
	var $url = 'get-ajax.php';


	$.get($url, {number: 7}, function(url, textStatus, jqXHR) {
		// getAjax(url, textStatus, jqXHR);
	})
	.done( function (data, textStatus, jqXHR) {
		// successFunction(data, textStatus, jqXHR);
	})
	.fail( function (jqXHR, textStatus, errorThrown) {
		// errorFunction(jqXHR, textStatus, errorThrown);
	})
	.always( function (reponse, textStatus, jqXHR) {
		// triggerMe(reponse, textStatus, jqXHR);
	})
	.then( function (reponse, textStatus, jqXHR) {
		// triggerMe(reponse, textStatus, jqXHR);
	})
	;

	// AJAX POST - API

	var $url = 'https://reqres.in/api/users/';

	var $obj = { "name": "NameOfUser", "job": "Web Dev"};

	$.post($url, $obj, function(url, textStatus, jqXHR) {
		// postAjax(url, textStatus, jqXHR);
	})
	.done( function (data, textStatus, jqXHR) {
		// successFunction(data, textStatus, jqXHR);
	})
	.fail( function (jqXHR, textStatus, errorThrown) {
		// errorFunction(jqXHR, textStatus, errorThrown);
	})
	.always( function (reponse, textStatus, jqXHR) {
		// triggerMe(reponse, textStatus, jqXHR);
	})
	.then( function (reponse, textStatus, jqXHR) {
		// triggerMe(reponse, textStatus, jqXHR);
	})
	;
});

function successFunction(data, textStatus, jqXHR)
{
	console.log(data); // Response from server
	console.log(textStatus); // --> success
	console.log(jqXHR); // Object
}

function errorFunction(jqXHR, textStatus, errorThrown)
{
	console.log(jqXHR); // Object
	console.log(jqXHR.status) // Getting values in the object --> 404
	console.log(textStatus); // --> error
	console.log(errorThrown); // --> Not Found (in $.ajax)
}

function triggerMe(reponse, textStatus, jqXHR)
{
	console.log(reponse); // Response from function.php
	console.log(textStatus); // --> success
	console.log(jqXHR); // Object
	console.log(jqXHR.status); // Getting values in the object --> 200
}

function getAjax(data, textStatus, jqXHR)
{
	// console.log(data); // Response from server
	// console.log(textStatus); // --> success
	// console.log(jqXHR); // Object
	// console.log(jqXHR.statusCode); // --> 200 OK
	// console.log(data.data.email); // --> shows email of Specific User

	const objectArray = Object.entries(data.data); // Convert JSON response to array

	objectArray.forEach(([key, value]) => {
		// Converting the JSON string as an Associative array's key ['firstname']
		// Converting ths JSON value as the Associative array's key value : ['firstname' => ''value]  ; It can either be an object, an object of object
		console.log('[' + key + '] => ' + value); 
	});
}

function postAjax(data, textStatus, jqXHR)
{
	console.log(data); // Response from server
	console.log(textStatus); // --> success
	console.log(jqXHR); // Object
}

// FETCH in JS
const url = 'https://reqres.in/api/users/7';

fetch(url)
	.then( function(response) {  // .then((resp) => resp.json())
		// return response.json(); // Convert response into JSON
	})
	.then( function(data) { // ==> .then((data) => {
		// console.log(data); // Response from Server
		// console.log(data.data.email); // user email
	})
;

// Change Text

$(document).on('click', '#change-btn', function (e) {
	e.preventDefault();
	$.ajax({
		url			: 'views/response.php',
		dataType	: 'json',
	})
	.done( function(data) {
		console.log(data);
		console.log(data.status);
		if (data.status === 'ok') {
			$('#ajax-render').html(data.view);
		}
	})
	;
});

$(document).on('click', 'h4[data-action="center-content"]', function(e) {
	var target = this.dataset.target;
	$(target).css({
		'right' : '275px',
		'left' : 'initial'
	});
	$(this).css({
		'text-align' : 'center',
	});
});