function clousure() {
  let count = 10;
  return () => {
    return count++;
  };
}

let count = clousure();
console.log(count());
