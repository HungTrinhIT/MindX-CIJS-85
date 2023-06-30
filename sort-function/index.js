// Order an array
// We will use sort methods
/*
    Syntax: arr.sort(function(a,b) {})
                        ^ compare function

    if compare function:
        + return < 0 => a đứng TRƯỚC b : (a,b) => a,b
        + return > 0 => a đứng SAU b : (a,b) => b,a
        + = 0        => a và b giữ nguyên vị trí
*/

const nums = [1, 10, 20, 22, 9, 7, -5, 16];

const ascendingNums = nums.sort((a, b) => a - b);
// console.log("asecendingNums:", ascendingNums);

const descendingNums = nums.sort((a, b) => b - a);
// console.log("descendingNums:", descendingNums);

// referenceStr.localeCompare(compareStr)
// a - b = 97 - 98 = -1

console.log("a".charCodeAt(0));
console.log("b".charCodeAt(0));
