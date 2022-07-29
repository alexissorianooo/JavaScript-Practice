/**
 * Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) 
 * that checks whether the two arrays have the "same" elements, with the same multiplicities 
 * (the multiplicity of a member is the number of times it appears). 
 * "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
 * 
 * Examples
 * Valid arrays
 * a = [121, 144, 19, 161, 19, 144, 19, 11]  
 * b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
 * 
 * a = [121, 144, 19, 161, 19, 144, 19, 11] 
 * b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
 */

 function comp(array1, array2){
    var sortedA2 = []
    if(array1 === null || array2 === null){
        return false
    }
    array1.sort((a,b) => a-b)
    array2.sort((a,b) => a-b)
    array2.map(items => {sortedA2.push(Math.sqrt(items))})
    for(let i=0; i<array1.length; i++){
        if(array1[i] !== sortedA2[i]){
            return false
        }
    }
    return true
}

var a1 = [121, 144, 19, 161, 19, 144, 19, 11];
var a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1,a2))// true

