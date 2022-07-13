function solution(A, B) {
    var current, next
    var checker = 0
    for(let i=0; i<A.length; i++){
        if(B.indexOf(A[i])<0){
            return false
        }
        current = A[i]
        next = A[i+1] ? A[i+1] : A[0]

        currentB = B[B.indexOf(current)]
        nextB = B[B.indexOf(currentB)+1] ?  B[B.indexOf(currentB)+1] : B[0]
        // console.log('A value:',A[i])
        // console.log('B index:',B.indexOf(A[i]))
        console.log('current',current,'next', next)
        console.log('B current',currentB,'B next',nextB)
        // console.log(A[i],B.indexOf(A[i]))
        // console.log(B.indexOf(2))

        if(current === currentB && next === nextB){
            checker++
        }

        if(checker === A.length){
            return true
        }
    }
    return false

}
const ans = solution([3, 1, 2], [2, 3, 1])
// const ans = solution([1, 2, 3, 4], [2, 1, 4, 3])

console.log('ans', ans)
