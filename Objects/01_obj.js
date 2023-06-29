// singleton

// objects.create

// objects literals

const mysym1 = Symbol(mykey1);

const jsUser = {
  name: "raushan",
  last_name: "roy",
  "full name": "Raushan roy",
  age: 23,
  [mysym1]: "mykey1",
  email: "raushan@google.com,",
  location: "noida",
  gender: "male",
};

console.log(jsUser.last_name);
console.log(jsUser["full name"]);

jsUser.email = "raushan@chatgpt.com";
Object.freeze(jsUser);
jsUser.email = "raushan@microsoft.com";

console.log(jsUser[mysym1]);

console.log(jsUser);

const greetinjg = function () {
  console.log(`hello JS User ,${this.name}`);
};
console.log(jsUser.greetinjg());
