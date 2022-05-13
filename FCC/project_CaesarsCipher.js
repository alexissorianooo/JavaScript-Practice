/**
 * Caesars Cipher
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
 * In a shift cipher the meanings of the letters are shifted by some set amount.
 * 
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
 * 
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 * All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */

 function rot13(str) {
    // 65-90
    let newStr = str.split(" ")
    let wordStr = []
    const finalStr = []
    let extras = []
  
    for(let i=0; i<newStr.length; i++){
      wordStr = []
      extras = []
      for(let j=0; j<newStr[i].length; j++){
        
        if(newStr[i][j].charCodeAt()<=90 && newStr[i][j].charCodeAt()>=65){
          let newCharCode = newStr[i][j].charCodeAt()+13
          if(newCharCode>90){
            let minus = newCharCode-90
            newCharCode = 64+minus
          }
          wordStr.push(String.fromCharCode(newCharCode))
        }else{
          extras.push(newStr[i][j])
        }
  
      }
      finalStr.push(wordStr.join("").concat(extras))
    }
  
  
    console.log(finalStr.join(" "))
    return finalStr.join(" ")
  }
  
  rot13("SERR CVMMN, URER!"); // FREE PIZZA, HERE!                   