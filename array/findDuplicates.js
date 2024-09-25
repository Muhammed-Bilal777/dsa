// repeated numbers in array

function findDuplicates(arr) {
  const numbers = {};
  for (let item of arr) {
    if (numbers[item]) {
      numbers[item] = numbers[item] + 1;
    } else {
      numbers[item] = 1;
    }
  }

  const duplicates = [];
  for (let key in numbers) {
    if (numbers[key] > 1) {
      duplicates.push({ [key]: numbers[key] });
    }
  }
  return duplicates;
}

const arr = [1, 78, 3, 6, 2, 5, 9, 3, 5, 78, 33, 0, 1, 78];

console.log(findDuplicates(arr)); // Output: [0, 6]
