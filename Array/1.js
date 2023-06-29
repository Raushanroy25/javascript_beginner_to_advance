//  array
const myArr = [0, 1, 4, 1, "raushan", true];
// console.log(myArr);

const myHeros = ["shaktiman", "narshimha"];

// Array method/
const myArr1 = [0, 1, 2, 3, 4, 5, 6];
// push :- add the value in last index in array
// myArr1.push(9);
// console.log(myArr1);
//  pop :-  remove in last index in array
// myArr1.pop();
// console.log(myArr1);

// unshift :- add value in first index in array
// myArr1.unshift(9);
// console.log(myArr1);

// shift :- remove value in first index in array :

// myArr1.shift();
// console.log(myArr1);

// splice , slice

console.log("A", myArr1);
const myn1 = myArr1.slice(1, 3);

console.log(myn1);
console.log("B", myArr1);
const newArr = myArr1.splice(3, 5);
console.log("C", newArr);
