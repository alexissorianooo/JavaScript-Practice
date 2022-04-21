var isSquare = function(n){
    return Math.floor(Math.sqrt(n)) * Math.floor(Math.sqrt(n)) === n
}

// BEST ANSWER
// function isSquare(n) {
//     return Math.sqrt(n) % 1 === 0;
//   }

console.log(isSquare(41));