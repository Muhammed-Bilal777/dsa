//How to Get All Unique Values (Remove Duplicates) in a JavaScript Array

// // repeated numbers in array

function removeDuplicate(arr) {
  //first method
  //  const mySet=new Set(arr)
  //  return mySet

  const allElements = {};
  for (const element of arr) {
    if (allElements[element]) {
      allElements[element] = allElements[element] + 1;
    } else {
      allElements[element] = 1;
    }
  }
  const uniqueElement = [];
  for (const key in allElements) {
    if (allElements[key] === 1) {
      uniqueElement.push(key);
    }
  }

  return uniqueElement;
}

const arr = [1, 1, 2, 3, 7, 4, 5, 6, 4, 7];
console.log(removeDuplicate(arr));
