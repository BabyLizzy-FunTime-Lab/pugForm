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

