// arrow function

let greet = function(user){
    console.log(`Hello ${user}`);
    return 22;
}

let returned = greet('Justin'); // printed "Hello Justin" and passed 22 to "returned" variable
console.log("greet(): ",greet('Soriano'), "returned: ",returned);
// greet('Soriano') printed the return value  of the function greet()
// returned printed the passed return value of the function greet()

let noice = (user) => {
    console.log(`Hello ${user}`);
    return 22;
}
returned = noice('Alexis');
console.log("noice(): ", noice('Soriano'), "returned: ", returned);


// another example
let add = function(num1, num2){
    return num1+num2;
}
let summer = add(20,2);
console.log(`summer: ${summer}`);

// using arrow function we can delete the function keyword
// IF we only have 1 statement and it is a return statement, we can also
// delete the return keyword
let add2 = (num1, num2) => num1+num2;
let summer2 = add2(20,5);
console.log(`summer2: ${summer2}`);

// for challenge

let addNeg1 = (num1, num2) =>{
    return num1<0 ? num1*-1+num2 : 
            num2<0 ? num2*-1+num1 : num1+num2;

}

let addNeg2 = (num1, num2) => num1<0 ? num1*-1+num2 : num2<0 ? num2*-1+num1 : num1+num2;


console.log(`addNeg1: ${addNeg1(-5,6)}`);
console.log(`addNeg2: ${addNeg2(-5,6)}`);