// forEach loop

const coding = ["javascript", "python", "java", "ruby", "rust"];
coding.forEach(function (val) {
  console.log(val); // do not usee for function name thats use for  {under parathesi  parameter}
});

// with arrow function

const item = ["rosogulla", "gulab_jamun", "rashmalay", "kaju_katli"];
item.forEach((sweet) => {
  console.log(sweet);
});

// forEach in complex arr in
[{}, {}, {}, {}];
const mylanguage = [
  {
    language_name: "javascript",
    language_notation: "js",
  },
  {
    language_name: "java",
    language_notation: "java",
  },
  {
    language_name: "python",
    language_notation: "js",
  },
];

mylanguage.forEach((item) => {
  console.log(item.language_name);
});
