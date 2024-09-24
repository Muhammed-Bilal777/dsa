//How to make first letter of a string uppercase in JavaScript

function converToUpperCase(str) {
  //firstmethod
  // return str.toUpperCase()

  //second method
  let upperCase = "";
  for (const char of str) {
    upperCase = upperCase + char.toUpperCase();
  }
  return upperCase;
}

const str = "Javascript is best programming language";
console.log(converToUpperCase(str));
