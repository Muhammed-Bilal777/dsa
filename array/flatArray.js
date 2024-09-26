// function flatArr(arr) {
//   let flat = [];

//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       flat = flat.concat(flatArr(item));
//     } else {
//       flat.push(item);
//     }
//   }
//   return flat;
// }

// const arr = [1, 2, 3, [4, 5, [6, 7, 8]], [9]];
// console.log(flatArr(arr));

function sortArr(arr) {
  let pivot = arr[0];
  let lesser = [];
  let greater = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      lesser.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return sortArr(lesser).concat(pivot, sortArr(greater));
}

const arr = [1, 2, 34, 5, 78, 9];
console.log(sortArr(arr));
