//req message contents
const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    process.exit(); 
});
server.listen(3000);

//1. req.url -> returns the requested url path
//localhost:3000 -> /
//localhost:3000/home -> /home

//2. req.method -> GET -> returns type of method used
//3. req.headers -> info about the request like browser details, connection etc