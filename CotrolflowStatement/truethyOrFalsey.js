// const userEmail = "roy@raushan.ai";
// if (userEmail) {
//   console.log("user email is here");
// } else {
//   console.log("don't have user here");
// }

// const userEmail = [];
// if (userEmail) {
//   console.log("user email is here");
// } else {
//   console.log("don't have user here");
// }

// FALSY VALUE
// false, 0 , -0, "" , undefined, BigInt 0n , NaN ,

// TRUETHY VALUE
//  "0" ,"Flase", " " , {}, [], function(){}

// if (userEmail.length === 0) {
//   console.log("array is empty");
// }

// const emptyObj = {};
// if (Object.keys(emptyObj).length === 0) {
//   console.log("empty objects");
// }

// Nullish Coalescing Operator  (??): null undefined

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 15;

console.log(val1);

// Terniary operator

const iceTeaprice = 100;
iceTeaprice <= 80 ? console.log("lessthan 80") : console.log("greterthan 80");
