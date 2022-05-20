let bigNum = 0
function extraLongFactorials(n) {
    // let bigNum = 1n
    // for(let i=1; i<=n; i++){
    //     bigNum*=BigInt(i)
    // }
    // console.log(bigNum.toString())
    if(n<=0){
        return 1
    }
    return n*extraLongFactorials(n-1)

}

console.log(extraLongFactorials(25))