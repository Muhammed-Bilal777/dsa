function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  const less = [];
  const greater = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return quicksort(less).concat(pivot, quicksort(greater));
}

let arr = [19,11,15,17,12,17,14,101,23,55,77,100];
console.log(quicksort(arr));
