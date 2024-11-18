//cannot be hoisted with VAR keyword
// function hoisted() {
//   console.log(a); // undefined
//   var a = 5;
//   console.log(a); // 5
//   if (true) {
//     a = 10;
//     console.log(a); //10
//   }
//   console.log(a); //10
// }

function hoisted() {
  let a = 5;
  console.log(a); // 5
  if (true) {
    let a = 10;
    console.log(a); //10
  }
  console.log(a); //5
}

// function hoisted() {
//   console.log(a); // Error : cannot access before initialization
//   let a = 5;
//   console.log(a);
//   if (true) {
//     let a = 10;
//     console.log(a);
//   }
//   console.log(a);
// }
hoisted();
