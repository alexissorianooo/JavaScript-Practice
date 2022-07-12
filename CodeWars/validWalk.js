/**
 * You live in the city of Cartesia where all roads are laid out in a perfect grid. 
 * You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
 * The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button 
 * it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
 * You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, 
 * so create a function that will return true if the walk the app gives you will take you exactly ten minutes 
 * (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
 */

function isValidWalk(walk){
    if(walk.length !== 10){
        return false
    }
    var directions={}
    var nsIsEqual = true
    var weIsEqual = true
    walk.map(item =>{
        directions[item] ? directions[item]++ : directions[item]=1
    })
    for(items in directions){
        switch(items){
            case 'n':
            case 's':
                if(directions.n !== directions.s){
                    nsIsEqual = false
                }else{
                    nsIsEqual = true
                }
                break;
            case 'w':
            case 'e':
                if(directions.w !== directions.e){
                    weIsEqual = false
                    console.log(directions.w, directions.e)
                }else{
                    weIsEqual = true
                    console.log(directions.w, directions.e)
                }
                break;
        }
    }
    if(nsIsEqual && weIsEqual){
        return true
    }else{
        return false
    }
}
const answer = isValidWalk([ 'e', 'e', 'e', 'w', 'n', 's', 'n', 's', 'e', 'w' ])
console.log(answer) // false




/**
 * BEST PRACTICES
 */

 function isValidWalk_BESTPRACTICE(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
  }