var nums = [12,43,65,87,41,65,54,32,78,90]


var result = nums.filter(n => n%2===0) // filters the array depending on the statement given
                    .map(n => n*3) // takes a value and changes it
                    .reduce(function(a,b){
                        console.log(a,b)
                        return a+b
                    },0) // reduces all the array into a single value 

console.log(result);
    
    // .forEach(function(nums){ // gets each element in an array
    //     console.log(nums);
    // })



// var lol = [23,4,5,6,87,43,32]

// var lol2 = lol.filter(function(n){
//     console.log(n%2===0); // returns boolean
//     return n%2===0; // if true, it returns
// })

