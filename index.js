const express = require('express');
// const pug = require('pug');
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.urlencoded({extended: true}));
server.set("view engine", "pug");

server.use('/public', express.static(__dirname + '/public'));
server.use('/style', express.static(__dirname + '/style'));
server.use('/JS', express.static(__dirname + '/JS'));


server.get('/', function(req, res) {
	res.render("frontpage")
});

//Get time server side.
function serverTime() {
	let currentServerTime = (new Date()).toString();
	return currentServerTime
};

server.get('/serverTime', function (req, res) {
	res.send(serverTime())
});

server.listen(3000, function() {
	console.log("Server running on port 3000");
});