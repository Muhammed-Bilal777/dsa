//checkstring is palindrome or not in JavaScript
function palindrome(str, str1) {
  //return str === str.split('').reverse().join('')  //true
  return str1 === str1.split("").reverse().join(""); //false
}

const str = "java";
const str1 = "javascript";
console.log(palindrome(str, str1));
