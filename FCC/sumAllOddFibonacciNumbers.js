/** 
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
 * The first two numbers in the Fibonacci sequence are 1 and 1. 
 * 
 * Every additional number in the sequence is the sum of the two previous numbers. 
 * The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
 * 
 * For example, sumFibs(10) should return 10 because all odd Fibonacci numbers 
 * less than or equal to 10 are 1, 1, 3, and 5.
*/


function sumFibs(num) {

    let n1 = 0;
    let n2 = 1;
    let nextnumber=0;
    let fibArr = []
  
    for( let i=1; nextnumber<=num; i++){
      // console.log(i)
      nextnumber = n1 + n2;
      n1 = n2
      n2 = nextnumber
      fibArr.push(n1)
    }
  
    console.log(fibArr)
    fibArr = fibArr.filter(item => item%2 !== 0)
    let reduced = fibArr.reduce((prev, next) => {
      return prev+next
      
    })
  
    console.log(fibArr, reduced)
    return reduced;
  }
  
  sumFibs(1000);