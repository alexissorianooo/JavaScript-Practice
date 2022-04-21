function sumArray(array) {
    if (Array.isArray(array)=== false){
        return 0;
    }
 
    let high = array.indexOf(Math.max(...array))
    array.splice(high,1)
    let low = array.indexOf(Math.min(...array))
    array.splice(low, 1)
    if(array.length >= 1){
        return array.reduce((sum,item)=>sum+item)
    }else{
      return 0;
    }
}


const arr = [ 0, 1, 6, 10, 10 ]
console.log(sumArray(arr))