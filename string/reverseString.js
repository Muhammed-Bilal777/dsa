//Reverse a string in JavaScript
function reverseStr(str){
    let rev = '';
    for(let i=str.length-1;i>0; i--){
        rev= rev + str[i]
    }
    return rev
}
const str='Javascript is the best  programming  language'

console.log(reverseStr(str))