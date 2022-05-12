/**
 * Sum All Primes
 * A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
 * For example, 2 is a prime number because it is only divisible by 1 and 2. 
 * In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
 * Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
 */


function sumPrimes(num) {

    /**
     * plan is to use for loop
     * until it reaches the num
     * finally return sum using reduce
     */
    const numArr = []
    
  
    for(let i=2; i<=num; i++){
      let flag = 0
  
      for(let j=2; j<i; j++){
        if(i%j==0){
          flag=1
          break;
        }
      }
  
      if(flag==0 && i>0){
        numArr.push(i)
      }
    }
  
    num = numArr.reduce((item, nextItem) => item+nextItem)
    console.log(numArr, num)
    return num;
  }
  
  sumPrimes(10);