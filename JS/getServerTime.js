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
	console.log(formElement);
	let form = new FormData (formElement);
	// let bar = new FormData();
	// bar.append("daskj", "xxxx");
	// bar.append("foo", document.getElementById("greetingInput").value);
	let serverGreet = document.getElementById("sup");
	console.log("send");
	// console.log(bar);

	fetch('/sup', {
		method: "POST",
		body: form,
		headers: new Headers({
			// "Content-Type": "multipart/form-data"
			"Content-Type": "application/x-www-form-urlencoded"
		})
	})
	.then(function (response) {
		response.text().then(function(text) {
			serverGreet.innerHTML = text;
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
	document.getElementById("submitBtn").addEventListener("click", sup);
});