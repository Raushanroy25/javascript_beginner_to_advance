// filter

// let student = [
//   { id: "01", name: "Raushan", age: 23, sport: "cricket" },
//   { id: "02", name: "Golu", age: 20, sport: "football" },
//   { id: "03", name: "Prabhash", age: 22, sport: "Hockey" },
//   { id: "04", name: "Raja", age: 23, sport: "basketBall" },
//   { id: "05", name: "Vikash", age: 23, sport: "cricket" },
// ];

// const newStudent = student.filter((currentVall) => {
//   if (currentVall.id % 2 == 0) return true;
//   else false;
// });
// console.log(newStudent);

// map method
// const newStudent = student
//   .filter((currVall) => {
//     if (currVall.sport === "Hockey") return true;
//     else false;
//   })
//   .map((currVall) => {
//     return currVall.name || currVall.age === 20;
//   });
// console.log(newStudent);

function SetUserName(username) {
  this.username = username;
}

function createuser(username, email, password) {
  SetUserName.call(this, username);
  this.email = email;
  this.password = password;
}

let chai = new createuser("roy", "roy@google.com", 251299);
console.log(chai);
