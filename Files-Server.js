
// #includeing modules

let fs = require("fs");
let http=require('http');
let url  = require('url');

// configing host and port serving
let host='0.0.0.0'
let port=80

//Declaring Vars

let q;let q_path
//Serving

http.createServer((req,res)=>{
q=url.parse(req.url,true);
q_path="."+q.pathname;
 if(q_path=="./")
    q_path="./index.html";
fs.readFile(q_path,(err,data)=>{
    if(err){
        res.writeHead(404,{"content-type":"text/html ; charser=utf-8"});
        res.write("<h1> 404 Not Found </h1?");
        res.end();
        console.log("404 not found request")
    }
    else{
        res.writeHead(200,{"content-type":"text/html ; charser=utf-8"});
        res.write(data);
        res.end();
        console.log("Succeced Request : "+q_path);
    }
})
}).listen(port,host)
