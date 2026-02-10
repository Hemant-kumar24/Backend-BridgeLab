import fs from 'fs';

// fs.mkdir("new_directory/folder1",(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     else{
//         console.log("folder created");
//     }
// });
// fs.mkdir("folder/folder1/folder2",{recursive:true},(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     else{
//         console.log("folder created");
//     }
// }
// )
// fs.readdir("folder",(err,files)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     else{
//         console.log(files);
//     }
//     })
fs.rmdir("folder",{recursive:true},(err)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log("folder deleted");
    }
})


