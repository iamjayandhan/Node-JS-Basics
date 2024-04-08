//writeFileSync -> wait till read/write is complete
//sync -> should happen quickly, but induces delay for completion
//writeFile vs writeFileSync methods!
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

        return req.on('end',()=>{
            console.log("End event received");
            const parsedBody = Buffer.concat(body).toString(); 
            console.log(parsedBody);

            const message = parsedBody.split('=');
            //creates delay!
            //till file write, response is delayed.
            // fs.writeFileSync('hello_app8_fix.txt',message[1]);
            fs.writeFile('hello_app8_fix.txt',message[1],(err)=>{
                console.log("file write completed!");
                res.setHeader('Location','/')
                res.statusCode=302;
                return res.end();
            });
        })
    }

    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<head><title>JD tutorial</title></head>');
    res.write('<body><h1>Hello from Node.js</h1></body>')
    res.write('</html>')
    res.end();
});
server.listen(3000);

//go to notion!
//listen to topic : Events!