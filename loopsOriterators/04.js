// for in loop\

const myObjects = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};
// for (const key in myObjects) {
//   console.log(key);
// }

for (const key in myObjects) {
  // console.log(`${key} shortcurt is for ${myObjects[key]}`);
}

const programing = ["js", "py", "java", "ruby"];
for (const key in programing) {
  // console.log(key);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States America");
map.set("FR", "France");
map.set("IN", "India");

for (const key in map) {
  console.log(key);
}
