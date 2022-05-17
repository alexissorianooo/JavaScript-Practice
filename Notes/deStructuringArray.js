// assigning array elements to different variables

var nums = [7,45,23,6]

//console.log(nums);

// let [a,b,,d] = nums; //sdestructuring the array

// console.log(d);

// not the best way to using destructuring to swamp values
var x = 5
var y = 8

// console.log(x,y);
[x,y] = [y,x]
// console.log(x,y);



// ------------ using split --------------
var words = "my name is alexis justin soriano cool".split(' ')
//var [a,b,c,d,e] = words // assigning variables to every elements in words
var [a,b,,...d] = words // "..." means take the rest of the elements "d" variable gets all words element dstarting from alexis
console.log(d);

