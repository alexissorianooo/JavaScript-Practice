/**
 * This is a demo task.
 * Write a function:
 * function solution(A);
 * that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
 * For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
 * Given A = [1, 2, 3], the function should return 4.
 * Given A = [−1, −3], the function should return 1.
 */

function solution(A) {
    const sortedArray = A.sort((a,b) => a-b)
    for(let i=1;i<A.length;i++){
        if(A.indexOf(i) < 0){
            return i
        }
    }
    return sortedArray[A.length-1]+1
}

console.log(solution([-1, 2, 3]))
// Correctness = 80%
// Performance = 25%
// Task Score = 55%