function removeEveryOther(arr){
    var counter=0;
    return arr.filter((item)=>{
        counter++;
        if (counter%2!=0){
            return item
        }
    })
  }

let arr = ['Hello', 'Goodbye', 'Hello']
console.log("hello",removeEveryOther(arr))