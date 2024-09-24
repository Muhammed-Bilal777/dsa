//Sort a string in JavaScript
function sortString(str) {
  const strArr = str.split("").sort().join("");
  return strArr;
}

const str = "javascript";
console.log(sortString(str));
