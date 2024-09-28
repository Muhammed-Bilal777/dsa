//Check if an Element is Present in an Array Using JavaScript
function checkElementPresent(arr) {
  for (const item of arr) {
    if (item === 14) {
      return true;
    }
  }
} 

let arr = [19, 11, 15, 17, 12, 17, 14, 101, 23, 55, 77, 100];
console.log(checkElementPresent(arr))
