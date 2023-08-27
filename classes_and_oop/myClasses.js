// ES6

// class user {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptedPassword() {
//     return `${this.password}abc`;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new user("raj", "raj@gmail.com", "251299");
// console.log(chai.encryptedPassword());
// console.log(chai.changeUsername());

// behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

user.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
user.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};
const tea = new user("roy", "roy@gmail.com", "251299");
console.log(tea.encryptedPassword());
console.log(tea.changeUsername());
