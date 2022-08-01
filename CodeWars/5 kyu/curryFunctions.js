/**
 * We want to create a function that will add numbers together when called in succession.
 * add(1)(2); // == 3
 *
 * We also want to be able to continue to add numbers to our chain.
 * add(1)(2)(3); // == 6
 * add(1)(2)(3)(4); //  == 10
 * add(1)(2)(3)(4)(5); // == 15
 * and so on.
 *
 * A single call should be equal to the number passed in.
 *
 * add(1); // == 1
 * We should be able to store the returned values and reuse them.
 *
 * var addTwo = add(2);
 * addTwo; // == 2
 * addTwo + 5; // == 7
 * addTwo(3); // == 5
 * addTwo(3)(5); // == 10
 * We can assume any number being passed in will be valid whole number.
 */

// NOT SOLVED

function add(a) {
  return function (b) {
    return b ? add(a + b) : a;
  };
}

console.log(add(1)(2)());
// console.log(add(1.79)(1.95)(1.5)(1.64)(1.29)(1.32)(1.38)(1.31)(1.0)());

// function add(a) {
//   var adder = (b) => {
//     a += b;
//     return adder;
//   };
//   adder.toString = () => a;
//   return adder;
// }

// var wow = add(1)(2)(3)(10);
// console.log(wow);
