// reduce

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// // Expected output: 10

const myNums = [1, 2, 3, 4];
// mytotal = myNums.reduce(function (acc, curvall) {
//   console.log(`acc :${acc} and curvall : ${curvall}`);
//   return acc + curvall;
// }, 0);
// console.log(mytotal);

// us for arrow function

myTotal = myNums.reduce((acc, currval) => acc + currval, 0);
console.log(myTotal);

const shopingCart = [
  {
    course: "javaScript",
    price: 2999,
  },
  {
    course: "python",
    price: 999,
  },
  {
    course: "java",
    price: 2999,
  },
  {
    course: "Data Scientist",
    price: 10999,
  },
  {
    course: "MERN STACK",
    price: 18999,
  },
];

const totalprice = shopingCart.reduce((acc, course) => acc + course.price, 0);
console.log(` Total course prise : ${totalprice} `);
