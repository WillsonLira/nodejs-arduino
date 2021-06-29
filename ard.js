console.log("iniciando...");

var five = require("johnny-five");
var board = new five.Board();
var http = require("http");

var PORT = 3001;

var server = http.createServer(function(req,res){
		var body = "<body><h1>teste js</h1></body>";
		res.writeHead(200, {
		        'Content-Length' : body.length,
			'Content-Type' :'text/html'
		});
		res.write(body);
	});
server.listen(PORT);

console.log("port"+PORT+" : Node.js Server...");

board.on("ready", function() {
  var led = new five.Led(12);
  led.blink(500);
});

