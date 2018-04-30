const express = require("express");
const app = express();

app.use(express.static(__dirname + '/'));

app.get('/index', function (req, res) {
	res.sendFile(__dirname + "/" + "index.html");
});

app.listen(8080, function () {
	console.log("The app is listening at port 8080...")
});