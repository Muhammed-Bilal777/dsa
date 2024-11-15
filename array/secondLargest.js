function findSecondLargest(arr) {
    let first = -Infinity; // Initialize first largest
    let second = -Infinity; // Initialize second largest

    for (let num of arr) {
        if (num > first) {
            second = first; // Update second largest
            first = num; // Update first largest
        } else if (num > second && num < first) {
            second = num; // Update second largest
        }
    }

    return second === -Infinity ? null : second; // Return null if no second largest found
}

// Example usage:
const array = [10, 20, 4, 45, 99, 99, 20];
const secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 45
