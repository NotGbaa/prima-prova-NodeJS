//require è la stessa cosa dell'import 
let http = reqire("http");
http.createServer(function (request, response) {
    response.writeHead(200, { 'content-type': "text/plane" });
    response.end("Hello world\n");
}).listen(8080);
console.log("server running on port 8080");
