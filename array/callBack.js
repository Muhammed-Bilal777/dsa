function passingCallback(arr, aa) {
  console.log(arr);
  return aa(arr);
}

function func(a) {
  a.forEach((item) => console.log(item));
}
arr = [1, 2, 3];

passingCallback(arr, func);
