var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        var look = target-nums[i]
        for(let j=i; j<nums.length;j++){
            if(look === nums[j] && i !== j){
                return [i,j]
            }
        }
    }
}

console.log(twoSum([2,7,11,15],9)) // [0,1]
console.log(twoSum([3,2,4],6)) // [1,2]
console.log(twoSum([-1,-2,-3,-4,-5],-8)) // [2,4]
console.log(twoSum([2,1,9,4,4,56,90,3],8)) // [3,4]