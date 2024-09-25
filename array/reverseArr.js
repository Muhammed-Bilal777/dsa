//Reverse an Array in JavaScript
function reverseArr(arr) {
  //first method
  //return arr.reverse()

  //second method
  const revArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr;
}

const arr = [1, 2, 3, 4, 5, 6, 4, 7, 10];
console.log(reverseArr(arr));
