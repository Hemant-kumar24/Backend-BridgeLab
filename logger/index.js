import logActivity from "./logger.js";

logActivity("hemant");
 import http from "http";

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type": "application/json" });
    res.end(JSON.stringify({ name: "hemant", age: 21 }));
})


server.listen(8000,()=>{
    console.log("server is running on port 8000");
})

