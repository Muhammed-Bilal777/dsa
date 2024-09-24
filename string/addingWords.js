function addChar(str, word) {
  //adding to the last
  //return str.concat(word)

  //adding at the middle and at the last
  const words = " web";
  let res = "";
  return res = res + str.slice(0, 18) + words + str.slice(18) + word;
}

const str = "Javascript is best programming";
const word = " language";
console.log(addChar(str, word));
