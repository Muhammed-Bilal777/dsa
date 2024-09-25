// Max profit

function maxProfit(arr) {
  let maxProfit = 0;
  let minPrice = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minPrice) {
      minPrice = arr[i];
    } else if (arr[i] - minPrice > maxProfit) {
      maxProfit = arr[i] - minPrice;
    }
  }

  return { maxProfit };
}

const arr = [1, 2, 3, 4, 5, 6, 4, 7,10];
console.log(maxProfit(arr));
