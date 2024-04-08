//Understanding Event Driven & Non Blocking
const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res)=>{

    const url = req.url;
    const method = req.method;
    
    if(url=='/'){
        res.setHeader('Content-type','text/html')
        res.write('<html>')
        res.write('<head><title>Enter form details</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="Send"></form></body>')
        res.write('</html>')
        return res.end();
    }

    if(url=="/message" && method=="POST"){
        const body = [];

        req.on('data',(chunk)=>{
            body.push(chunk);
            console.log(chunk);
        })

        //acts as asyncronous code!
        //only executed when data is fully received
        //node.js is event driven and non blocking

        req.on('end',()=>{
            console.log("End event received");
            const parsedBody = Buffer.concat(body).toString(); 
            console.log(parsedBody);

            const message = parsedBody.split('=');
            fs.writeFileSync('hello_app8.txt',message[1]);
        })

        //exec is from here!
        console.log("file write completed!");
        fs.writeFileSync('hello.txt','DUMMY')
        res.setHeader('Location','/')
        res.statusCode=302;
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