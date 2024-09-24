//How to iterate over characters of a string in JavaScript

function traverseChar(str) {
  //let char = [];
  //  //first method
//   for (let i = 0; i < str.length; i++) {
//     char.push(str[i]);
    //   }
    //return char;

  //secondmethod
  for (const char of str) {
    console.log(char);
  }
  
}



const str='Javascript is best programming language'

console.log(traverseChar(str))