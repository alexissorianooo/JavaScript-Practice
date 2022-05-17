let nums = new Set(); // output Set(6) { 'b', 'o', 'k', 'e', 'p', 'r' }
// sets do not have repeated values
nums.add("hello")
nums.add("hi")
nums.add("HI")
nums.add(6)
nums.add(8)
nums.add(10)
nums.add(10)
// console.log(nums);

// nums.forEach(function(item, item2,nums){
//     console.log(item, item2, nums);
// })
// output
// hello hello Set(6) { 'hello', 'hi', 'HI', 6, 8, 10 }
// hi hi Set(6) { 'hello', 'hi', 'HI', 6, 8, 10 }
// HI HI Set(6) { 'hello', 'hi', 'HI', 6, 8, 10 }
// 6 6 Set(6) { 'hello', 'hi', 'HI', 6, 8, 10 }
// 8 8 Set(6) { 'hello', 'hi', 'HI', 6, 8, 10 }
// 10 10 Set(6) { 'hello', 'hi', 'HI', 6, 8, 10 }


// console.log(nums.has(8)); // true


// other way of printing the set values
// for(item of nums){ 
//     console.log(item)
// }