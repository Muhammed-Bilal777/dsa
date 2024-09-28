// function fibonacci(n) {
// 	if (n <= 1) return n;
// 	return fibonacci(n - 1) + fibonacci(n - 2);
// }
function fibonacci(n) {
	let fib = [0, 1];
	for (let i = 2; i < n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(fib)
	return fib[n - 1];
}

console.log(fibonacci(10));

