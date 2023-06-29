// This keywiord inform that current value

const user = {
  username: "Raushan",
  password: "<roy@99>",
  prise: 999,
  welcomemessage: function () {
    console.log(`${this.username}, welcome to my websites`);
    // console.log(this);
  },
};
// user.welcomemessage();
// user.username = " roy";
// user.welcomemessage();

// console.log(this);

// function chai() {
//   let username = "Raushan"; // these value are not decelear in function only  access for object
//   //   console.log(this.username);/
//   console.log(this);
// }
// chai();

// ++++++++++++++++++++++++++ Arrow function ++++++++++++++++

// this is first method
const chai = () => {
  let username = "Raushan";
  console.log(this.username);
};
chai();

// this is second method
const addTwoNo = (num1, num2) => num1 + num2;
console.log(addTwoNo(50, 678));

// and 3rd method
// const addNon = (num1, num2) => num1 + num2;
// console.log(addNon(50, 600));

// and  // return are objectr  then this methoid used
const addNon = () => ({ username: "raushan" });
console.log(addNon());
