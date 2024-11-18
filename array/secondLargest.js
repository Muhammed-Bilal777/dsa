//second Largest in array

// function secondLargest(arr) {
//   const sortedArr = arr.sort((a, b) => a - b);
//   return sortedArr[arr.length - 2];
// }

function secondLargest(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;
  for (let item of arr) {
    if (item > max) {
      secondMax = max;
      max = item;
    } else if (item > secondMax && item !== max) {
      secondMax = item;
    }
  }

  return secondMax;
}

const arr = [1, 3, 44, 5, 6, 77, 88, 4, 22, 111, 88];
console.log(secondLargest(arr));
