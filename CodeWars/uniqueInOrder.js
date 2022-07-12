/**
 * Implement the function unique_in_order which takes as argument a sequence and 
 * returns a list of items without any elements with the same value next to each other 
 * and preserving the original order of elements.
 */

 var uniqueInOrder = iterable => {
    var answer = []
    var newIterable = typeof iterable === 'string' ? iterable.split('') : iterable.slice()
    for(let i = 0; i<newIterable.length; i++){
        newIterable[i] !== answer[answer.length-1] && answer.push(newIterable[i])
    }
    return answer
  }
 const answer = uniqueInOrder('aaDDDAaAA')
 console.log(answer) // [ 'a', 'D', 'A', 'a', 'A' ]