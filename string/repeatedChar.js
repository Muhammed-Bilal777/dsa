//How to count  repeated char occurrence in string using JavaScript

function countReaptedchar(str) {
  const myMap = new Map();
  for (const char of str) {
    if (myMap.has(char)) {
      myMap.set(char, myMap.get(char) + 1);
    } else {
      myMap.set(char, 1);
    }
  }
  const repeatedwords = [];
  for (const [key,value] of myMap) {
    if (myMap.get(key) > 1) {
            repeatedwords.push({ key, value });
    }
  }
 
  return repeatedwords;
}

const str = "Javascripteee";
console.log(countReaptedchar(str));
