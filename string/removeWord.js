//How to remove text from a string in JavaScript

function removeWord(str,removingWord){
    //first method
    //let res = str.replace(removingWord,'')

    //second method
    const strArr = str.split(' ');
    let res = strArr.filter((item) => item !== removingWord) 
    return res.join(' ')
    
   
}


const str='Javascript is best programming language'
const removingWord = 'best'
console.log(removeWord(str,removingWord))