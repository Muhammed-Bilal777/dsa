function maxArea(heights) {
	let left = 0;
	let right = heights.length-1;
	let maxAreas = 0;
	while (left < right) {
		let width = right - left;
		let height = Math.min(heights[left], heights[right]);
		let area = width * height;
    maxAreas = Math.max(maxAreas, area);
    if (heights[left] < heights[right]) {
					left++;
				} else {
					right--;
				}
	}
	

	return maxAreas;
}

let heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let maxAreass = maxArea(heights);
console.log(maxAreass); // Output: 49
