// FOR LOOP

// for (let index = 1; index <= 10; index++) {
//     const element = index;
//   if (index == 5) {
//     console.log(`5 is best number`);
//   }
//   console.log(index);
// }

for (let i = 1; i <= 10; i++) {
  //   console.log(`Table of  = ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop value :${j} and outer lop value ${i}`);
    // console.log(i + "*" + j + "=" + i * j);
  }
}

let myArr = ["Raushan", "roy", "golu", "Sonu", "prabhash"];
// console.log(myArr.length);
for (let index = 0; index <= index.length; index++) {
  const element = myArr[index];
  //   console.log(element);
}

// Break or Continue

for (index = 1; index <= 30; index++) {
  if (index == 5) {
    console.log(`detected 5`);
    break;
  }
  console.log(`value of index ${index}`);
}
