// const x = {};
// const y = { key: "y" };
// const z = { key: "z" };
// x[y] = "fatfish";
// x[z] = "medium";
// console.log(x[y]);

// const len = 5;
// const nums = [];
// for (var i = 0; i < len; i++);
// {
//   nums.push(i + 1);
// }

// console.log(nums);

// function sayName() {
//   name = {
//     name: "Raushan",
//     last_Name: "Roy",
//   };
//   return name.last_Name;
// }
// function greeting(myName) {
//   var myName = sayName("Ifeoma");
//   console.log(`Hello ${myName}`);
// }
// greeting();

// let a = "Age";
// let person = {
//   [a]: 30,
// };
// console.log(person);

var a = 10;
{
  var a = -10;
}
let b = a;
{
  let b = -20;
}

console.log(b);
