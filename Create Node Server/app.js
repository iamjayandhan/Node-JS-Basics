//why const??
//why not var? let? 
// we are going to create a single server
//value should not be changed! to avoid confusion, we use const!
const http = require('http');

//require() -> wont require file extension!
//1. require('./http') -> look for http file in current folder
//2. require('http') -> core module of node!


//create server
//calls func when server gets request!
const server = http.createServer((req,res)=>{
    console.log(req);
    process.exit(); // to stop server after getting a response
});
server.listen(3000); //server listens!

//now open browser
//localhost:3000 or 127.0.0.1:3000
//go to dev tools -> network -> now click enter, 
//browser creates req that is visible in network tab
//you see that req info because of console statement inside func.


