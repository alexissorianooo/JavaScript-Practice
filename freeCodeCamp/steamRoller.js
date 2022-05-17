
/**
 * Steamroller
 * Flatten a nested array. 
 * You must account for varying levels of nesting.
 */


function steamrollArray(arr) {
    return arr.reduce((array, iterate) => {
      if(Array.isArray(iterate)){
        return array.concat(steamrollArray(iterate))
      }
      return array.concat(iterate)
    }, [])
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);