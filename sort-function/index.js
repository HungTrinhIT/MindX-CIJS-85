/*
    const nums = [10, 8, 100, 17, 6 ,-5, 70];

    nums.sort(function callbackFunction(a,b){ })
                        ^ compareFunction
    
    if compareFunction:
        + return negative value: (a,b) => a đứng TRƯỚC b 
        + return positive value: (a,b) => a đứng SAU b
        + return 0: keep current position 
*/
const nums = [10, 8, 100, 17, 6, -5, 70];
console.log("Original array:", nums);
// a = 10
// b = 8
// a - b = 2
// (10, 8) => 8 , 10
const ascendingNums = nums.sort((a, b) => a - b);
console.log("Ascending Nums:", ascendingNums);

//  a= 10
//  b = 8
// (10 , 8 )
const descendingNums = nums.sort((a, b) => b - a);
console.log("Descending Nums:", descendingNums);


