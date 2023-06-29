// for of loop

const arr = [1, 2, 5, 7, 9, 6];
for (const num of arr) {
  //console.log(num);
}

const greeting = "hello world";

for (const greet of greeting) {
  // console.log(`each char is ${greet}`);
}

// Maps
// map is Object they are do not print in duplicate value is the major difference of map and object

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States America");
map.set("FR", "France");
map.set("IN", "India");
//console.log(map);

for (const [key, value] of map) {
  // console.log(key, ":-", value);
}

// operation pof Object
// Object are not a ittrable , thats not use  {for of loop} in objects
// const myObjects = {
//   game1: "NFS",
//   game2: "GTA 5",
// };
// for (const [key, value] of myObjects) {
//   console.log(key, ":-", value);
// }

const myNums = [1, 2, 3, 4, 5, 6];
const newNums = myNums.map((num) => num * 2);
// console.log(`my new Number : ${newNums}`);
// console.log(myNums);

// console.log(newNums);
const newNumber = [];
myNums.forEach((val) => {
  newNumber.push(val * 2);
});
console.log(newNumber, "nnnn");
