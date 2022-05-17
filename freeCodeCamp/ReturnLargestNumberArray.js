/**
 * Return an array consisting of the largest number from each provided sub-array. 
 * For simplicity, the provided array will contain exactly 4 sub-arrays.
 * Remember, you can iterate through an array with a simple for loop, 
 * and access each member with array syntax arr[i].
 */

 function largestOfFour(arr) {
    let big = -100
    let newArr = []
    for(let x=0; x<arr.length; x++){
      for(let y=0; y<arr[x].length; y++){
        if(arr[x][y]>big){
          big = arr[x][y]
        }
      }
      newArr.push(big)
      big=-100
    }
    console.log(newArr)
    return newArr;
  }
  
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

  /**
   * The value of big variable is not reliable and reusable.
   */
