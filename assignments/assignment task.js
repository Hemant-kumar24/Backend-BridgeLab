// question-1.
const fs=require('fs');
let length=0;

fs.readFile("file.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        let arr=data.split(" ");
        length=arr.length;
        console.log(length);
    }
    fs.writeFile("file1.txt",String(length),(err)=>{
    if(err){
        console.log(err);
    }
})
})


//question-2.
const stringUtils=require("./stringUtils");
console.log(stringUtils.capitalize("hemant"));
console.log(stringUtils.reverse("hemant"));

// question-3.
const os=require('os');
const fs=require('fs');
const totalMemory=os.totalmem();
const freeMemory=os.freemem();
console.log(totalMemory/(1024*1024*1024));
console.log(freeMemory/(1024*1024*1024));
const platform=os.platform();
console.log(platform);
const info =os.userInfo();
const data={
    "total memory":totalMemory,
    "free memory":freeMemory,
}
setInterval(()=>{
      fs.appendFile("info.txt",JSON.stringify(data)+"\n",(err)=>{

        if(err){
            res.end(err);
        }
        
      })
},5000);
// question-4

setTimeout(() => {
    console.log("setTimeout");
}, 0);

setImmediate(() => {
    console.log("setImmediate");
});

process.nextTick(() => {
    console.log("process.nextTick");
});

Promise.resolve().then(() => {
    console.log("Promise.then");
});