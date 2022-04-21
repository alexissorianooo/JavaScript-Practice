function positiveSum(arr) {
    return arr.filter((x)=> x>0) === null ? 0 :
        arr.filter((x)=> x>0).reduce(((x,y)=>x+y),0)
}

let arr = [1,2,3,4,5,-1]
console.log(positiveSum(arr));