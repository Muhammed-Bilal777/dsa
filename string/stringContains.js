//JavaScript program to check if a string contains only alphabetic characters

function stringContains(str, word) {
  return str.includes(word);
}

const str = "Javascript is best programming language";
const word = "best";
console.log(stringContains(str, word));
