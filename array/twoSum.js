//Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

function twoSumSimplified(arr, target) {
  const seenNumbers = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (seenNumbers[complement] !== undefined) {
      return [seenNumbers[complement], i];
    }

    seenNumbers[arr[i]] = i;
  }
}

const arr = [1, 3, 6, 2, 5, 9];
const target = 10;

console.log(twoSumSimplified(arr, target)); // Output: [0, 6]

/*
function twoSum(arr, target) {
  let myMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        if (myMap.has("pairs")) {
          myMap.get("pairs");
        } else {
          myMap.set("pairs", [i, j]);
        }
      }
    }
  }

  return myMap;
}

const arr = [1, 3, 6, 9, 2, 8, 5, 9];
const target = 10;

console.log(twoSum(arr, target));
*/
