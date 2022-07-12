/**
 * Task
 * Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
 * For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], 
 * drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, 
 * which leads to [1,2,3,1,2,3].
 * With list [20,37,20,21] and number 1, the result would be [20,37,21].
 */

// Topics:
//  slice()
//  for... of
//  for... in
//  splice()
//  lastIndexOf()

 function deleteNth(arr,n){
    const answer = arr.slice()
    const count={}
    for(item of answer){ // count items inside "answer" array
        if(count[item]){ // if count[item] exist add 1
            count[item]+=1
        }else{ // if not exit, create and add default value of 1
            count[item]=1
        }
    }
    for(item in count){ // iterate keys of count
        while(count[item] > n){ // compare value of the key to the maximum available repeats of number (n)
            answer.splice(answer.lastIndexOf(parseInt(item)),1) // remove the number inside answer array
            count[item]-=1
        }
    }
    return answer
    
}

console.log(deleteNth([1,2,3,1,2,1,2,3], 2)) // [1,2,3,1,2,3]

/**
 * BEST PRACTICE
 */

 function deleteNth(arr,x) {
    var cache = {};
    return arr.filter(function(n) {
      cache[n] = (cache[n]||0) + 1;
      return cache[n] <= x;
    });
  }