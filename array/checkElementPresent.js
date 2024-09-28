//Check if an Element is Present in an Array Using JavaScript
function checkElementPresent(arr,ele) {
  for (const item of arr) {
    if (item === ele) {
      return true;
    }
  }
} 

let arr = [19, 11, 15, 17, 12, 17, 14, 101, 23, 55, 77, 100];
const ele = 14
console.log(checkElementPresent(arr,ele))
