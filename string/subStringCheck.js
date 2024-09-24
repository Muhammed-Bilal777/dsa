//Substring check in JavaScript
function insertString(str, word) {
  //return str.includes(word)  //true
  //return str.search(word) //  outPut = 14
  //return str.indexOf(word)  //  outPut = 14
  return str.indexOf(word, 15); //15 is the index from which it starts searching  and return -1 if not there
}

const str = "Javascript is best programming language";
const word = "best";
console.log(insertString(str, word));
