//creating responses

const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<head><title>JD tutorial</title></head>');
    res.write('<body><h1>Hello from Node.js</h1></body>')
    res.write('</html>')
    res.end();
});
server.listen(3000);

//res.setHeader -> set the response header
//res.write -> send data in small pieces

//statusCode -> status of the request (200-OK ,404-Not Found)
//writeHead() -> write the headers to the client
