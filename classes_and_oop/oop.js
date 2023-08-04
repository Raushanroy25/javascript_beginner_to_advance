const user2 = {
  username: "raushan",
  loginCount: 8,
  signedIn: true,
  userdetails: function () {
    // console.log("Username:", this.username);
    // if (this.loginCount > 5 && !this.signedIn) {
    //   return `${this.username}, you are a new user`;
    // }
    console.log(this);
  },
};

// console.log(`Userename is ${this.username} `);
// this refers to the global object in Node environment and hence it will print undefined as there's no

function user(username, logidIn, loggidinCount) {
  this.username = username;
  this.logidIn = logidIn;
  this.loggidinCount = loggidinCount;
  this.greeting = function () {
    console.log(`welcome$(this.username)`);
  };
  return this;
}

const userOne = new user("raushan", 12, true);
const userTwo = new user("chai or code", 11, false);
console.log(userOne.constructor);

// promiseOne = new Promise((resolve, reject) => {});
// const date = newDate();
