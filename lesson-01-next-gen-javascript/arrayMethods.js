//1. map
//2. filter
//3. find
//4. findIndex
//5. some
//6.every
//7. reduce

// Demo Map
const nums = [1, 10, 100, 15, 7]; // double
const doubleNumbers = nums.map((num) => {});

// const doubleNum = [];
// for (let i = 0; i < nums.length; i++) {
//   const doubleValue = nums[i] * 2;
//   doubleNum.push(doubleValue);
// }

// Demo filter
const oddNumbers = nums.filter((num) => num % 2 === 1);
const evenNumbers = nums.filter((num) => num % 2 === 0);

console.log("nums:", nums);
console.log(doubleNumbers);
console.log(oddNumbers);
console.log(evenNumbers);
