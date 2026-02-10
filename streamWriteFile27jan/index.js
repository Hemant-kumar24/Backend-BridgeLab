const fs=require('fs')
const path=require('path')
const inputfilepath=path.join(__dirname,"input.txt");
const outputfilepath=path.join(__dirname,"output.txt");

const readstream=fs.createReadStream(inputfilepath,{encoding:"utf8"});
const writestream=fs.createWriteStream(outputfilepath);
readstream.pipe(writestream);
writestream.on("finish",()=>{
    console.log("write stream is end");
})



const fs=require('fs')
const path=require('path')
const inputfile=path.join(__dirname,"input.txt");
const outputfile=path.join(__dirname,"output.txt");
const readstream=fs.createReadStream(inputfile,{encoding})
const 
readstream.pipe(writestream)
writestream.on("finish",()=>{
    console.log(write stream end)
})