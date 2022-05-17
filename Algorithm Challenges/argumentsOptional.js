/**
 * Arguments Optional
 * Create a function that sums two arguments together. 
 * If only one argument is provided, then return a function that 
 * expects one argument and returns the sum.
 * 
 * For example, addTogether(2, 3) should return 5, 
 * and addTogether(2) should return a function.
 * 
 * Calling this returned function with a 
 * single argument will then return the sum:
 */

 function addTogether(a,b=0) {
  
    console.log(a, b)
    console.log(/^[0-9]/.test(b))
    console.log(typeof b)
    if(typeof a !== 'number' || typeof b !== 'number'){
      console.log(a)
      return undefined
    }
  
    if(b===0){
      return function addTogether(b){
        if(typeof b !== 'number'){
          return undefined
        }
        return a+b
      }
    }
  
    return a+b
      
    
    
  }
  
  // addTogether(2,3);
  // addTogether(5)(7)
  // addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
  // addTogether(2, "3")
  addTogether(2)([3])