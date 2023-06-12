// Các loại functions trong Javascript

// 1. Function Declaration, naming function
// Có hoisting
// sum(10, 15);
function sum(a, b) {
  const sum = a + b;
  console.log(`${a} + ${b} = ${sum}`);
}

// 2. Expression function
const greeting = function (name) {
  console.log(`Hello ${name}`);
};

// 3. Immediately invoke function expression: IIFE
// (function () {
//   console.log("Hello mindx");
// })();

// 4. Arrow functions
// Không có cơ chế hoisting
const sumArrow = (a, b) => {
  const sum = a + b;
  console.log(`Arrow function sum: ${a} + ${b} = ${sum}`);
};

// Hình thái khác của ông arrow function

// Return về giá trị mà không thực hiện
// thêm logic

const getSQRT = (num) => Math.sqrt(num);

// Return về object
const getPersonObject = (name, age) => ({
  name: `My name is ${name}`,
  age: `I am ${age} years old`,
});

// DEMO FUNCTIONS
// sumArrow(10, 14);
// greeting("CIJS MindX");
// console.log(getSQRT(16));
// console.log(getPersonObject("CR7", 38));

// Sự khác nhau về context giữa normal function và arrow function

const person = {
  name: "CR7",
  sayHi: function () {
    console.log("Hello, my name is:", this.name);
  },
};

const person2 = {
  name: "Messi",
  sayHi: () => {
    console.log(this);
    console.log("Hello, my name is:", this.name);
  },
};

person.sayHi();
person2.sayHi();
console.log(this);
