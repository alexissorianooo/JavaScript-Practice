function diagonalDifference(...arr) {
    let d1=[], d2=[]
    console.log(arr)
    
    for(let i=0; i<arr.length; i++){
        let d2Index = arr[i].length-1
        for (let j=0; j<arr[i].length; j++){
            if(i === j){
                d1.push(arr[i][j])
                d2.push(arr[i][d2Index-i])
            }
            
        }
    }
    // console.log(d1.reduce(((a,b) => a+b),0))
    console.log(d2)
    console.log(Math.abs(d1.reduce(((a,b) => a+b),0) - d2.reduce(((a,b) => a+b),0)))
}


diagonalDifference([ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ])