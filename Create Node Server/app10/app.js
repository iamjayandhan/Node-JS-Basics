//we just made module for server code as routes.js
//then imported here  using require() method 

const http = require('http');
const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);
server.listen(3000);