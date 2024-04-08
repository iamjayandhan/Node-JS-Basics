//Handle chunk data
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

        //handle chunk data
        const body = [];

        req.on('data',(chunk)=>{
            body.push(chunk);
            console.log(chunk);
        })


        //to indicate end of chunk transfer by browser to nodejs
        //also to combine all chunk data together & readable
        req.on('end',()=>{

            //toString() -> convert hexa to readable format
            const parsedBody = Buffer.concat(body).toString(); 
            console.log(parsedBody);

            //to seperate key value pair output
            const message = parsedBody.split('=');
            fs.writeFileSync('hello_app7.txt',message[1]);
        })


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