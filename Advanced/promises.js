//  Promises :-   The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//  There is Three state of Promise
// 1) PENDING :- These are Initial state;
// 2) Fulfilled :- operation was  completed and successfull
// 3) Rejected :- operation is failed
// promise jo h wo apne ander  callback leta h

// ------------------------------------------------

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  //DB calls , Cryptography , network
  setTimeout(function () {
    console.log("async task is compeleted");
    resolve();
  }, 1000);
});

// .thend ka relation h resolve ke sath
promiseOne.then(function () {
  console.log("promise consumed ");
});

// 2nd
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

// 3rd  use to arrow function
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve({ username: "chai", email: "chai@gmail.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

//4th

const promisefour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Raushan", password: "123" });
    } else {
      reject("ERROR: Something ewent wrong ");
    }
  }, 1000);
});
//promisefour.then().catch
promisefour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("the promise is either resolved or rejecte");
  });

//five

const promisefive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Raushan", password: "123" });
    } else {
      reject("ERROR: JS ewent wrong ");
    }
  }, 1000);
});
async function consumepromisefive() {
  try {
    const response = await promisefive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumepromisefive();

// async function getAllUser() {
//   try {
//     const response = await fetch("https://dummyjson.com/products");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }
// getAllUser();

// 2nd method

fetch("https://dummyjson.com/products/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));


  