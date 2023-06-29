// two types of memory
// 1) Stack :- (primitive) ke liye use hota h

// 2) Heap :- (non-primitive) keliye use hota h

let mysurname = "roy";
let anothetSurname = mysurname;
anothetSurname = "rai";

console.log(mysurname);
console.log(anothetSurname);

let userOne = {
  email: "raushan@google.com",
  upi: "roy@ybl",
};
let userTwo = userOne;
userTwo.email = "golu@goole.com";
console.log(userOne.email);
console.log(userTwo.email);
