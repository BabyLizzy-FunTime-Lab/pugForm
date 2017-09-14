//Ajax to get time
//Use fetch
//Every 3 seconds get time and display in servertime div
function updateClock() {
	fetch('/servertime').then(
			function (response) {
				let timediv = document.getElementById("serverTime");
				
				response.text().then(function(text) {
					timediv.innerHTML = text;
					console.log(text)
				})
			}
		)
	.catch(function (err) {
		console.log('Fetch sux!!')
	});
};

setInterval(updateClock, 3000);



function sup(event) {
	event.preventDefault();
	let formElement = document.getElementById('greetingForm');
	console.log("This is the form" + formElement);
	let form = new FormData (formElement);
	// let bar = new FormData();
	// bar.append("daskj", "xxxx");
	// bar.append("foo", document.getElementById("greetingInput").value);
	let serverGreet = document.getElementById("sup");
	console.log("send");
	console.log(form);

	fetch('/sup', {
		method: "POST",
		headers: new Headers({
			"Accept": "application/json, application/xml, text/plain, text/html",
			"Content-Type": "application/x-www-form-urlencoded"
			// "Content-Type": "multipart/form-data"
		}),
		body: form
	})
	.then(function (response) {
		response.text().then(function(text) {
			serverGreet.innerHTML += text;
			console.log(text)
		})
	})
	.catch( 
		function (error) {
		console.log("derp on sup")
		}
	);
};

document.addEventListener("DOMContentLoaded", function() {
	// This way you don't need an onclick in the button element. 
	// You run sup() on click.
	document.getElementById("submitBtn").addEventListener("click", sup);
});