//second Largest in array

function secondLargest(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[arr.length - 2];
}

const arr = [1, 3, 44, 5, 6, 77, 88, 4, 22, 111];
console.log(secondLargest(arr));
