function flatArr(arr) {
  let flat = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      flat = flat.concat(flatArr(item));
    } else {
      flat.push(item);
    }
  }
  return flat;
}

const arr = [1, 2, 3, [4, 5, [6, 7, 8]], [9]];
console.log(flatArr(arr));
