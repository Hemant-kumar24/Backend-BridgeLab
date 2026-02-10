import express from 'express'
import fs from 'fs'

const app=express();

// app.use((req,res,next)=>{
//     console.log('middleware1')
//     next()
// })
// app.use((req,res,next)=>{
//     console.log("middleware2")
//     next()
// })
// app.use((req,res,next)=>{
//     const date=new Date().toLocaleString();
//     fs.appendFile("log.txt","time"+date+" method : "+req.method+"\n",(err)=>{
//         if(err){
//             console.log(err)
//         }
//     })
//     next()
// })

const auth=(req,res,next)=>{
    const token=req.header("authorization")
    if(token==="secret"){
        console.log("token is valid")
        next()
    }
    else{
        return res.status(401).send("token is invalid")
    }
    
}
const check=(req,res,next)=>{
    console.log("routebased middleware")
    next()
}
app.get("/",(req,res)=>{
    return res.send('hello world')
})
app.get("/student",auth,(req,res)=>{
    return res.send('hello student')
})
app.listen(3000,(err)=>{
    console.log('server is running on port 3000')
})