function greet(thing1, thing2){
    console.log(`Hello ${thing1}, and ${thing2}`);
}
some1 = 89
some2 = "hehe"
greet(some1, some2);
console.log(typeof greet);

// anonymouse function
let add = function(num1, num2){ // this function is assigned to add variable
    return num1 + num2;
}
let sum = add

console.log(add);
console.log(sum(2,3));