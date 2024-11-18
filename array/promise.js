const p1 = new Promise((res, rej) => res("data1"));
const p2 = new Promise((res, rej) => res("data2"));
const p3 = new Promise((res, rej) => res("data3"));
let res = Promise.all([p1, p2, p3]);
res
  .then((res) => {
    res.forEach((item) => console.log(item));
  })
  .catch((err) => console.log(err));
