/**
 * Removing Vowels
 */

function disemvowel(str) {
    var reg = /[aeiou]/ig
    console.log(str.replace(reg,''))
  }

disemvowel("Fundamentals Check!") // Fndmntls Chck!