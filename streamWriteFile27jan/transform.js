const transform=require('transform')
const fs=require('fs');
const path=require('path');
const inputFilePath=path.join(__dirname,"input.txt");
const outputFilePath=path.join(__dirname,"output.txt");

const readStream=fs.createReadStream(inputFilePath,{encoding:"utf-8"});
const writeStream=fs.createWriteStream(outputFilePath);
const upperCaseTransform=new Transform({
    transform(chunk,encodung,callback){
        const transformData=chunk.toString().toUpperCase();
        this.path(transformData);
        callback();
    }
})

