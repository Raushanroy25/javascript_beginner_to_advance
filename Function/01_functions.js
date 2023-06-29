function myName() {
  console.log("R");
  console.log("A");
  console.log("U");
  console.log("S");
  console.log("H");
  console.log("A");
  console.log("N");
}
// myName()
function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
}
let result = addTwoNumber(15, 71);
// console.log("Result :", result);

function addTwoNumber(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  return number1 + number2;
}
// console.log("Result :", result);
// console.log(typeof result);

function userlogedIn(user) {
  if (!user) {
    console.log("please entrer a user");
    return;
  }
  return `${user} just LogedIn`;
}
// console.log(userlogedIn());

function totralprise(...num1) {
  return num1;
}
// console.log(totralprise(200, 500, 700, 1200, 1500));

const user = {
  username: "Raushan",
  email: "raushan@google.com",
  salary: 5000000,
};

function handleObject(anyObject) {
  console.log(
    `user name is ${anyObject.username}  and email is  ${anyObject.email} or salary is ${anyObject.salary} `
  );
}
// handleObject(user);
handleObject({
  username: "sam",
  prise: 399,
});
console.log(handleObject);

const newArr = [200, 500, 700, 900, 1500];

function returnnewvalue(getArr) {
  return getArr[1];
}
// console.log(returnnewvalue(newArr));
console.log(returnnewvalue([200, 500, 700, 900, 1500]));
