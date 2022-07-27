const http = require('http');

const server = http.createServer((request,response) => {
	console.log("something else");
	response.write("this is a response");

});

server.listen(3000);
