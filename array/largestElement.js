//Largest element in array

function findLargest(arr) {
  let largest = 0;
  for (const item of arr) {
    if (item > largest) {
      largest = item;
    }
  }
  return largest;
}

const arr = [1, 3, 44, 5, 6, 77, 88, 4, 22, 111];
console.log(findLargest(arr));
