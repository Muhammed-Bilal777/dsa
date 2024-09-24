 
//How to get the last character of a string in JavaScript

function lastCharOfStr(str){
    return str.slice(str.length-1)  
}

const str='Javascript is best programming language'
console.log(lastCharOfStr(str))