function passingCallback(arr) {
	console.log(arr);
	func();
}

function func() {
	console.log("call back");
}
arr = [1, 2, 3];

passingCallback(arr, func);
