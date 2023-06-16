// let, const - var
/*
    Giống nhau
     + Khai báo biến
    
    Khác nhau
        + scope
            . let, const => block scope
            . var => function, global scope

        + hoisting
            . var => có cơ chế hoisting
            . let và const => không có hoisting

        +re-assign
            . let, var => có thể gán lại giá trị mới (re-assign)
            . const => KHÔNG thể gán lại
*/

// Demo về scope
// {
//   {
//     let b = 10;
//     const c = 100;
//     var a = 5;
//     console.log("Giá trị của b là:", b);
//     console.log("Giá trị của c là:", c);
//   }
//   console.log("Giá trị của a là:", a);
// }

// Demo hoisting
function greeting() {
  var name;
  var sum;
  const isMale = true;

  console.log(name);
  name = "Peter"; // Biến name được được đua lên đầu scope (hoisiting)
  //   let name = "Peter";

  if (isMale) {
    console.log("Hi Bro", name);
  } else {
    console.log("Hi Sis");
  }

  sum = 100;
}
greeting();

// re-assign
let PI = 3.14;
PI = 3.14142;
console.log("Hằng số PI là:", PI);

// Best practices
// Try to use  const as much as possible
let cart = []; // => sync local storage
//=> /index.html
//=> /cart.html // => get from local storage
