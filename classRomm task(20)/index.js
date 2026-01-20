import fs from 'fs'

fs.copyFile("test.txt","newTest.txt",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file copied")
    
    }
})

fs.unlink("newTest.txt",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file deleted")
    }
})
