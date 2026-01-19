import fs from 'fs'
import http from 'http'
import { parse } from 'path';
import url from 'url'


const server=http.createServer((req,res)=>{
    const originalname="hemant";
    const password="1234";
    const parseurl=url.parse(req.url,true);
    
    if(parseurl.pathname=='/'){
        res.end("hello");
    }
    else if(parseurl.pathname=="/admin"){
        const name=parseurl.query.name;
        const pass=parseurl.query.pass;
        if(name==originalname && pass==password){
            fs.readFile("admin_dashboard.html",(err,data)=>{
                console.log(err);  
                
                res.end(data);
            })
        }
        else{
             res.writeHead(401,{"content-type":"text/html"})
            res.end("<h1>invalid credentials</h1>");
            

        }
    }

    }
)

server.listen(8000);