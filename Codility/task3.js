function solution(H, X, Y) {
    var origX = X
    var origY = Y
    var cars = 0
    var sortedCars = H.sort((a,b) => a-b)

    if(sortedCars.indexOf(X) >= 0){
        cars++
        origX-=origX
        sortedCars.splice(sortedCars.indexOf(X),1)
    }else if(sortedCars.indexOf(Y) >= 0){
        cars++
        origY-=origY
        sortedCars.splice(sortedCars.indexOf(Y),1)
    }
    console.log(sortedCars, origX)

    for(let i=0; i<sortedCars.length; i++){
        if(origX>=sortedCars[i]){
            cars++
            origX-=sortedCars[i]
            sortedCars.splice(sortedCars.indexOf(sortedCars[i]),1)
            if(sortedCars.indexOf(origX) >= 0){
                cars++
                origX-=sortedCars[sortedCars.indexOf(origX)]
                sortedCars.splice(sortedCars.indexOf(origX),1)
            }
            i=0
        }
        if(origY>=sortedCars[i]){
            cars++
            origY-=sortedCars[i]
            sortedCars.splice(sortedCars.indexOf(sortedCars[i]),1)
            if(sortedCars.indexOf(origY) >= 0){
                cars++
                origY-=sortedCars[sortedCars.indexOf(origY)]
                sortedCars.splice(sortedCars.indexOf(origY),1)
            }
            i=0
        }
    }
    return cars
}

// const ans = solution([5, 5, 4, 6], 8, 8)
const ans = solution([6, 5, 5, 4, 3], 8, 9)
// const ans = solution([6, 5, 2, 1, 8], 17, 5)


console.log(ans)