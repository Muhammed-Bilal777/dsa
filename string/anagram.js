//checking given 2 strings are anagram or not

function isAnagaram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

const str1 = "baa";
const str2 = "aab";
console.log(isAnagaram(str1, str2));
