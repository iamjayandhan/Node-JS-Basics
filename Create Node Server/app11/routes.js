const fs = require('fs')

const requestHandler = (req,res)=>{
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

            fs.writeFile('hello.txt',message[1],(err)=>{
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
}

//METHODS TO EXPORT(1,2,3 - Node.js and 4 - for js)
//1. if only one to export
//module.exports = requestHandler;

//2. export many using object syntax!
// module.exports = {
//     handler:requestHandler,
//     someText:'Printing some text'
// }

//3. another method to export
//exports works with node.js
// exports.handler = requestHandler;
// exports.someText = 'Printing some text';

//4. for js (hey!!! react native syntax)
module.exports.handler = requestHandler;
module.exports.someText = 'Printing some text';
