import os from 'os';
import fs from 'fs';
const tottalmemory=os.totalmem()/(1024*1024*1024);
const freeMemory=os.freemem();
console.log("total memory",tottalmemory);
console.log("free memory",freeMemory);

const platfrom=os.platform();
console.log("platform",platfrom);
const cpu=os.cpus();
console.log("cpu",cpu);

console.log(os.uptime())
console.log(os.userInfo())
const timestamp=new Date().toLocaleString();
const data={
    "Timestamp":timestamp,
    "Total Memory":tottalmemory,
    "Free Memory":freeMemory,
    
}
setInterval(()=>{
    fs.appendFile("system_info.txt",JSON.stringify(data)+"\n",(err)=>{
        if(err){
            console.log(err);
        }
        // else{
        //     console.log("file created")
        // }
        
    })
},5000);