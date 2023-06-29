// >, < ,>= , <= ==, ===, !=, !==

// IF
// 1)
// let temprature = 41;
// if (temprature < 50) {
//   console.log("Rushan you can go for walk in park");
// } else {
//   console.log("Raushan, you can not go to walk in park ");
// }

// 2)
// const price = 500;
// if (price >= 699) {
//   console.log(`Raushan pocket money, ${price}`);
// } else {
//   console.log(`this is not my pocket money ,${price}`);
// }

// 3)

// const score = 200;
// if (score > 100) {
//   var power = "fly"; // do not use var keyword in block scope and any other my suggetion use for variable keyword cont or let
//   console.log(`user power ${power}`);
// }
// console.log(`user power ${power}`);

// 4)
// SHORT HAND NOTATION
// This is a Implicit scope

// const balance = 1000;
// if (balance > 700) console.log("test");

// 5)

// const balance = 1000;
// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance == 1100) {
//   console.log("your balance are properly ");
// } else if (balance < 600) {
//   console.log("balance less than 600");
// } else {
//   console.log("less than 1200");
// }

// 6)

// && iska matlab sara condition true hona chahiye
// || iska matlab koe ek v condition true hona chahiye

const LoggedIn = true;
const debiteCard = true;
const LoggedInforGoogle = false;
const LoggedInforEmail = true;
if (LoggedIn && debiteCard && 2 == 3) {
  console.log("alow for by a course ");
}
if (LoggedInforGoogle || LoggedInforEmail) {
  console.log("user loggedIn");
}

// find the duplicate Number in  array

const number = [1, 2, 3, 4, 5, 8, 9, 6, 3, 7, 5, 1, 2, 5, 6, 7, 8, 100];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
