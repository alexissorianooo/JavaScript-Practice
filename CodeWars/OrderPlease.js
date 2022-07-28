/**
 * Your task is to sort a given string. Each word in the string will contain a single number. 
 * This number is the position the word should have in the result.
 * Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
 * If the input string is empty, return an empty string. 
 * The words in the input String will only contain valid consecutive numbers.
 */

 function order(words){
    var arr = words.split(' ')
    var ordered = []
    for(let i=0; i<arr.length; i++){
        var reg = new RegExp(i+1) // loop through regex 
        for(let j=0; j<arr.length; j++){ // check ever item in the array
            if(reg.test(arr[j])){ // if found 
                ordered.push(arr[j]) // push to empty array
            }
        }
    }
    return ordered.join(' ')
}

console.log(order("is2 Thi1s T4est 3a"))