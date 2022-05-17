/**
 * Convert the given number into a roman numeral.
 * All roman numerals answers should be provided in upper-case.
 */

/**
 * ---------------NOTES---------------------
 * 
 * 1  5  10  50  100 500 1000
 * I  V  X   L   C   D   M
 * 
 * starting_IDEA 1: I can (convert) the "num" to (array)
 * from there i can determine the position of the number
 * 
 * process_IDEA 1: 
 * (for loop) to automate "I"
 * (for loop) until 3 "I"s
 * (if else) to know when to change letters 
 * 
 */

// MAX LENGTH 4999

 function convertToRoman(num) {
  let numArr = num.toString().split("")
  const romanNumeral = []
  console.log(numArr)
  console.log(numArr.length)

  for(let position=0; position<numArr.length; position++){

    if(numArr.length == 4){ // number.length is 4
      if(numArr[0] >= 1 && numArr[0] <= 4){ // 10 - 40
        for(let i=0; i<numArr[0]; i++){
          romanNumeral.push("M")
        }
        numArr.splice(0,1)
      }
    }

    if(numArr.length == 3){ // number.length is 3
      if(numArr[0] >= 1 && numArr[0] < 4){ // 10 - 40
        for(let i=0; i<numArr[0]; i++){
          romanNumeral.push("C")
        }
        numArr.splice(0,1)
      }else if(numArr[0] == 4){
        romanNumeral.push("CD")
        numArr.splice(0,1)
      }else if(numArr[0] >= 5 && numArr[0] < 9){
        romanNumeral.push("D")
        let diff = numArr[0] - 5
          for(let i=0; i<diff; i++){
            romanNumeral.push("C")
          }
        numArr.splice(0,1)
      }else if(numArr[0] == 9){
        romanNumeral.push("CM")
        numArr.splice(0,1)
      }else if(numArr[0] == 0){
        numArr.splice(0,1)
      }
    }

    if(numArr.length == 2){ // number.length is 2
      if(numArr[0] >= 1 && numArr[0] < 4){ // 10 - 40
        for(let i=0; i<numArr[0]; i++){
          romanNumeral.push("X")
        }
        numArr.splice(0,1)
      }else if(numArr[0] == 4){
        romanNumeral.push("XL")
        numArr.splice(0,1)
      }else if(numArr[0] >= 5 && numArr[0] < 9){
        romanNumeral.push("L")
        let diff = numArr[0] - 5
          for(let i=0; i<diff; i++){
            romanNumeral.push("X")
          }
        numArr.splice(0,1)
      }else if(numArr[0] == 9){
        romanNumeral.push("XC")
        numArr.splice(0,1)
      }else if(numArr[0] == 0){
        numArr.splice(0,1)
      }
    }

    if(numArr.length == 1){ // number.length is 1
      if(numArr[0] >= 1 && numArr[0] < 4){ // 10 - 40
        for(let i=0; i<numArr[0]; i++){
          romanNumeral.push("I")
        }
        numArr.splice(0,1)
      }else if(numArr[0] == 4){
        romanNumeral.push("IV")
        numArr.splice(0,1)
      }else if(numArr[0] >= 5 && numArr[0] < 9){
        romanNumeral.push("V")
        let diff = numArr[0] - 5
          for(let i=0; i<diff; i++){
            romanNumeral.push("I")
          }
        numArr.splice(0,1)
      }else if(numArr[0] == 9){
        romanNumeral.push("IX")
        numArr.splice(0,1)
      }
    }

  }
  console.log("numArr:",numArr)
  console.log("romanNumeral:",romanNumeral.join(''))
  return romanNumeral.join('');
}

convertToRoman(4999);