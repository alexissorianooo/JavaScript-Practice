// Potholes

function solution(S) {
    var roadArray = S.split('')
    var patches = []
    var counter = 0
    var segments = []

    var answer = 0
    // grouping
    for(let i=0; i<roadArray.length; i++){
        if(counter < 3){
            segments.push(roadArray[i])
            counter++
        }else if(counter>=3){
            patches.push(segments)
            segments = []
            segments.push(roadArray[i])
            counter = 1
        }

        if(i===roadArray.length-1){
            patches.push(segments)
        }
    }

    // determining the number of machine could patch
    for(item of patches){
        if(item.indexOf('X') >= 0){
            answer++
        }
    }

    return answer
}

const ans = solution('.X..X')
console.log(ans)