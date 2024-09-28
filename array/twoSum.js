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
 