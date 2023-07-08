// Dates

// let myDtes = new Date();
// console.log(myDtes.toLocaleDateString());

// let Date = new Date();
// let Day = ["sunday", "monday ", "tuesday", "thrusday", "friday", "saturday"];

// console.log(`Today is : ${Day}`);

// current day find

let today = new Date();
let day = today.getDay();
let daylist = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thrusday",
  "friday",
  "saturday",
];

console.log("Today is : " + daylist[day] + ".");

let date = new Date();
console.log(date.getDate);
