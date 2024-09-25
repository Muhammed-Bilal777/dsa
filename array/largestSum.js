//Find largest sum of pairs

function largestSum(arr) {
  const myMap = new Map();
  let largest = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] > largest) {
        largest = arr[i] + arr[j];
        myMap.set("Largest sum", largest);
        myMap.set("pairs", [arr[i], arr[j]]);
      }
    }
  }
  return myMap;
}

const arr = [1, 3, 44, 5, 6, 77, 88, 4, 22, 111];
console.log(largestSum(arr));
