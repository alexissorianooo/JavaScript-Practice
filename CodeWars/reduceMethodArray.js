// Write a function that takes an array of numbers and returns the sum of the numbers. 
// The numbers can be negative or non-integer. If the array does not contain any numbers then 
// you should return 0.

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.

// SYNTAX: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

function sum (numbers) {
    "use strict";
    
  return numbers.length > 0 ? numbers.reduce(function(accumulator,currentValue){return accumulator+currentValue},0) : 0;
  
  
};

let arr = [1,-1,2,3] // 5
console.log(sum(arr))


// reduce((a,b) => a+b, 0) ---> 0 is the initial value
// a = 0, b = 1 => a = 1;
// a = 1, b = -1 => a = 0;
// a = 0, b = 2 => a = 2;
// a = 2, b = 3 => a = 5;

// reduce((a,b) => a+b) ---> this wil start at the first element in the array
// a = 1, b = -1 => a = 0; 
// a = 0, b = 2 => a = 2;
// a = 2, b = 3 => a = 5;
let summer = arr.reduce((a,b) => a+b, 0)
arr.re
console.log(summer);