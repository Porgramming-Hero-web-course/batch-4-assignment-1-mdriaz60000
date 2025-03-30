"use strict";
function sumArray(numbers) {
    return numbers.reduce((aSum, current) => aSum + current, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));
//2222222222222222
function removeDuplicates(numbers) {
    return numbers.filter((num, index) => numbers.indexOf(num) === index);
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
