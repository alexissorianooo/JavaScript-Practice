/**
 * Sort The Odd.
 * 
 * You will be given an array of numbers. 
 * You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
 * 
 * [7, 1]  =>  [1, 7]
 * [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
 * [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
 * 
 */

function oddSorter(num){
    const sortedNum = num
                        .filter(item => item%2) // get all odds
                        .sort((a,b) => a-b) // sort odds
    
    num.forEach((item,i) => item%2!==0 && num.splice(i,1,parseInt(sortedNum.splice(0,1).join(''))))
    console.log(num)
}

oddSorter([5, 8, 6, 3, 4])

/**
 * BEST SOLUTION
 */

 function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x); // if the item is odd, push odd's first item inside array else remain the same
  }