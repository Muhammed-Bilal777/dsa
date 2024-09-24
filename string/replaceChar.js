
//removing a char or replacing char


function removeChar(str,char,replace){
    //first method
    // let res = str.replace(char, replace)
    // return res;

    //second method
    let res = str.split('');
    let index = res.indexOf(char);
    let removeChar = res.splice(index,1,replace)
    return res.join('')
}

const str='javascript';
const char='s'
const replace = "S"
console.log(removeChar(str,char,replace))