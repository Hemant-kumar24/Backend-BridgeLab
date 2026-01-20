function  capitalize(str){
    if(!str ||  typeof str==null) return "";
    return str.charAt(0).toUpperCase()+str.slice(1);
}
function reverse(str){
    if(!str || typeof str==null) return "";
    return str.split("").reverse().join("");
}
module.exports={capitalize,reverse}