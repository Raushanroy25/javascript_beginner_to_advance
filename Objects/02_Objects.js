const tinderUser = new Object(); // this is a singleton objects
// console.log(tinderUser);

const tinderUser1 = {};
// console.log(tinderUser1);

tinderUser1.id = "Raushan@123";
tinderUser1.name = "Raushan";
tinderUser1.isloggedIn = false;
// console.log(tinderUser1);

const regularUser = {
  email: "raushan@123",
  fullname: {
    Userfullname: {
      firstname: "royraushan",
    },
  },
};
// console.log(regularUser.fullname.Userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

const obj4 = Object.assign({}, obj1, obj2, obj3);

console.log(obj4);

const user = [
  {
    id: 1,
    email: "rausha@123",
    name: "raushan",
  },
  {
    id: 1,
    email: "rausha@123",
    name: "raushan",
  },
  {
    id: 1,
    email: "rausha@123",
    name: "raushan",
  },
  {
    id: 1,
    email: "rausha@123",
    name: "raushan",
  },
  {
    id: 1,
    email: "rausha@123",
    name: "raushan",
  },
];
user[1].email;
console.log(user);
// console.log(Object.keys(tinderUser1));
// console.log(Object.values(tinderUser1));

const course = {
  coursename: "javascript hindi",
  prise: 999,
  courseInstructor: "Raushan",
};
// console.log(course.coursename);
const { coursename, courseInstructor, prise } = course;
console.log(coursename, courseInstructor, prise);
