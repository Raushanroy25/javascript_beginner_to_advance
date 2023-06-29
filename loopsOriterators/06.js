//   forEach
//    forEach method not return an array of  a value

// const coding = ["javaScript", "jabva", "python", "ruby", "rust", "kotlin"];
//const myCoding = coding.forEach((item) => {
//   console.log(item);
//   return item;
// });
// console.log(myCoding);

// filter
//  filter method return an new arr of value
// A function to execute for each element in the array. It should return a truthy value to keep the element in the resulting array

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => {
//   return num > 4;
// });
// console.log(newNums);

const newNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});
console.log(newNums);

// Example

const myBook = [
  {
    title: "atomic Habit",
    author: "jemsClear",
    publish: "1990",
    Edition: "2023",
  },
  {
    title: "bpsc history",
    author: "Raja Ram Mohan Roy",
    publish: "1990",
    Edition: "2015",
  },
  {
    title: "Engg Mathematics",
    author: "Raushan",
    publish: "1920",
    Edition: "2018",
  },
  {
    title: "science",
    author: "Sir Jagadish Chandra Bose",
    publish: "1890",
    Edition: "2005",
  },
  {
    title: "atomic Habit",
    author: "jemsClear",
    publish: "1990",
    Edition: "2023",
  },
  {
    title: "science",
    author: "Sir Jagadish Chandra Bose",
    publish: "1890",
    Edition: "2005",
  },
];

let userBook = myBook.filter((bk) => bk.author === "Raja Ram Mohan Roy");
// userBook = myBook.filter((bk) => bk.title === "science");
userBook = myBook.filter((bk) => {
  return bk.publish < "1990" && bk.title === "science";
});
console.log(userBook);
