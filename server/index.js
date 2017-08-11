const
	express = require("express"),
	app = express(),
	server = require('http').Server(app),
	io = require('socket.io')(server),
	path = require("path"),
	axios = require("axios");

//app.use(express.static(path.join(__dirname, "public")));

io.on("connection", socket => {
	socket.on("tictacSocket", tictac => {
		io.emit("tictacSocket", {
			tictac,
		})
	})
})

server.listen(2000, () => {
	console.log("Runing on 2000")
});