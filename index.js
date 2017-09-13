const express = require('express');
// const pug = require('pug');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');

const server = express();

//Makig users for practice
let users = [
	{
		"name" : " ",
		"password": " ",
		"e-mail": " "
	},
	{
		"name" : " ",
		"password": " ",
		"e-mail": " "	
	}
];

//Load hashed passwords


server.use(bodyParser.urlencoded({extended: true}));
// this works when the data send is plain text. In the fetch body
// plain text.
// In the fetch header you need
// "content-type": "text/plain"
server.use(bodyParser.text());
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

server.post('/sup', function (req, res) {
	console.log("getting stuff sdfsdfds");
	console.log("req.body = ", req.body);
	res.send("back at you");
})

server.listen(3000, function() {
	console.log("Server running on port 3000");
});