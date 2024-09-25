function isEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      return false;
    }
  }
  return true;
}

let a = [1, 2, 3, 5];
let b = [1, 2, 3, 5];
console.log(isEqual(a, b));
