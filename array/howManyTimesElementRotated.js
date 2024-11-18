function rotatedTimes(arr) {
  let minNum = arr[0];
  let index = arr.length;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < minNum) {
      minNum = arr[i];
      index = i;
    }
  }
  return arr.length - index;
}

console.log(rotatedTimes([3, 4, 5, 1, 2]));
