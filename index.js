import fs from 'fs';

import http from 'http';
import { json } from 'stream/consumers';

const server=http.createServer((req,res)=>{
    const url=new URL(req.url,`http://${req.headers.host}`);
    if(url.pathname=='/'){
        res.end('hello world');
    
    }
    if(url.pathname=='/complain'){
        const name=url.searchParams.get('name');
        const issue=url.searchParams.get('issue');
        const priority=url.searchParams.get('priority');
        const id=Math.floor(Math.random()*100);
        if(priority=="high"){
            fs.appendFile("urgent.txt",`${id}       ${name}     ${issue}\n`,function(err){
                if(err){
                    console.log(err);
                }
            });
        }
        else{
            fs.appendFile("normal.txt",`${id}       ${name}     ${issue}\n`,function(err){
                if(err){
                    console.log(err);
                }
            });
        }

        res.end(JSON.stringify({id:id,message:"We will solve your issue soon."}));
    }
})
server.listen(8000);


