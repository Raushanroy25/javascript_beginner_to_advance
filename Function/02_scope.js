// let a = 10;
// const b = 20;
// var c = 20;

// console.log(a, b, c);
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  var c = 20;
  //   console.log("inner:", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Raushan";
  function two() {
    websites = "youTube";
    // console.log(username);
  }
  //   console.log(websites);
  //   two();
}
// one();

if (true) {
  const username = "Raushan";
  if (username === "Raushan") {
    const websites = " youTube";
    // console.log(username + websites);
  }
  //   console.log(websites);
}
// console.log(username);

// +++++++++++++++++++ Intresting ++++++++++++++++++
console.log(addone(5));
function addone(num) {
  return num + 1;
}
// addone(5);
// console.log(addtwo(5));
const addtwo = function (num) {
  return num + 2;
};
// addtwo(5);
console.log(addtwo(5));
