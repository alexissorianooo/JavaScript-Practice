function smallestCommons(arr) {
    /**
     * 1,3 should be 6
     * since 6 is divisible by 1, 2, and 3
     * 
     * My plan:
     * using loop to create a new array completing from start number to end number
     * from there i can compare divisibility of multiples of every number
     */
    arr.sort((a,b)=>a-b)
    const start = arr[0]
    const end = arr[arr.length-1]
    
    const numberDivisors = end - start + 1;

    let upperBound=1;
    
    for (let i = start; i <= end; i++) {
        upperBound *= i;
    }
    console.log(start,end, numberDivisors, upperBound)
    /**
     * I plan to create an array of multiples of last arrray value and check if 
     * it is divisible my values in newArr
     */
  
    for(let i=end; i<=upperBound; i += end){
        let counter=0
        for(let j=start; j<=end; j++){
            if(i%j===0){
                counter+=1
            }
        }
        if(counter===numberDivisors){
            console.log("answer", i)
            return i
        }
    }
  }
  
//   smallestCommons([1,3]);
  smallestCommons([1, 13]) // 360360.
