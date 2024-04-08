//Parsing Request Body

//to view msg passed, check payload tab!
//use ctrl+shift+i on browser

//go to notion
//topic : streams and buffers

const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res)=>{

    const url = req.url;
    const method = req.method;
    

    if(url=='/'){
        res.setHeader('Content-type','text/html')
        res.write('<html>')
        res.write('<head><title>Enter form details</title></head>');
        res.write('<body><form enctype="multipart/form-data" action="/message" method="POST"><input type="text" name="message"><input type="file" name="file"><input type="submit" value="Send"></form></body>')
        res.write('</html>')
        return res.end();
    }

    //redirection code
    //res.statuscode() -> obj!!
    if(url=="/message" && method=="POST"){

        //PARSE BODY
        //data -> event
        //to get input part by part.

        //the chunk is stored temporarly in a buffer.
        //buffer is any memory location
        req.on('data',(chunk)=>{
            console.log('chunk:');
            console.log(chunk);
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