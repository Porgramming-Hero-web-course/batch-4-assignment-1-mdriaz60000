function sumArray(numbers) {
    return numbers.reduce(function (aSum, current) { return aSum + current; }, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));
//2222222222222222
function removeDuplicates(numbers) {
    return numbers.filter(function (num, index) { return numbers.indexOf(num) === index; });
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
