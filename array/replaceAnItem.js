function replaceAnItem(arr, replace, value) {
  //    const newArr=[];
  //    arr.forEach((item)=>{
  //     if(item === replace){
  //       newArr.push(value)
  //     }else{
  //       newArr.push(item)
  //     }
  //    })

  //    return newArr
  let newArr = [];
  for (const item of arr) {
    if (item === replace) {
      newArr.push(value);
    }
    newArr.push(item);
  }
  return newArr;
}
const arr = [1, 2, 3, 4, 5, 6, 7];
const replace = 4;
const value = "4";
console.log(replaceAnItem(arr, replace, value));
