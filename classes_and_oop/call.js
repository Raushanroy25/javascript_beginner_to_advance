function SetUserName(username) {
  this.username = username;
  console.log("roy");
}

function createuser(username, email, password) {
  SetUserName.call(this, username);
  this.email = email;
  this.password = password;
  console.log("code");
}
const chai = new createuser("raushan", "raushan@google.com", "251299");
console.log(chai);
