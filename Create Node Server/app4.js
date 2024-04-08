//Routing request
const http = require('http');

const server = http.createServer((req,res)=>{

    const url = req.url;

    if(url=='/'){
        res.setHeader('Content-type','text/html')
        res.write('<html>')
        res.write('<head><title>Enter form details</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="Send"></form></body>')
        res.write('</html>')
        return res.end();
    }
    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<head><title>JD tutorial</title></head>');
    res.write('<body><h1>Hello from Node.js</h1></body>')
    res.write('</html>')
    res.end();
});
server.listen(3000);