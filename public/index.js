const
	express = require("express"),
	app = express(),
	server = require('http').Server(app),
	io = require('socket.io')(server),
	path = require("path"),
	axios = require("axios");

app.get("/", (req, res) => {
	res.sendFile(__dirname + '/index.html');
})

//app.use(express.static(path.join(__dirname, "public")));

io.on("connection", socket => {
	console.log("new connection made")

	socket.emit("msg-from-server", {
		gretting: "Hello from Server"
	})

	socket.on("msg-from-client", msg => {
		io.emit("msg-from-server", {
			gretting: msg
		})
	})
})

server.listen(2000, () => {
	console.log("Runing on 2000")
});