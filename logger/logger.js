import fs from 'fs';

function logActivity(message){
    const timestamp=new Date().toLocaleString();
    const logmessage=`${timestamp}:${message}\n`;
    fs.appendFile("activity.log",logmessage,function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log(logmessage);
        }
    })
}
export default logActivity;