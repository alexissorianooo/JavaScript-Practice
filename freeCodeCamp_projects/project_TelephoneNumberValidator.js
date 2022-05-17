/**
 * Telephone Number Validator
 * Return true if the passed string looks like a valid US phone number.
 * The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
 * The following are examples of valid formats for US numbers (refer to the tests below for other variants):
 * 
 * 555-555-5555
 * (555)555-5555
 * (555) 555-5555
 * 555 555 5555
 * 5555555555
 * 1 555 555 5555
 * 
 * For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
 * Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
 * The area code is required. If the country code is provided, you must confirm that the country code is 1. 
 * Return true if the string is a valid US phone number; otherwise return false.
 */

/**
 * idea: use regex
 * use array to group all options
 * use for loop to test evvery options to a string
 */

 function telephoneCheck(str) {
    let opt1 = /^(1\s\d{3}|\d{3})-\d{3}-\d{4}$/
    let opt2 = /^(1\(\d{3}\)|\(\d{3}\))\d{3}-\d{4}$/ 
    let opt3 = /^(1\s\(\d{3}\)\s|\(\d{3}\)\s){1}\d{3}-\d{4}$/ 
    let opt4 = /^\d{3}\s{1}\d{3}\s{1}\d{4}$/ 
    let opt5 = /^\d{10}$/ 
    let opt6 = /^1\s{1}\d{3}\s{1}\d{3}\s{1}\d{4}$/
  
    const optArr = [opt1,opt2,opt3,opt4,opt5,opt6]
  
    for(let i=0; i<optArr.length; i++){
      if(optArr[i].test(str)){
        console.log(true)
        return true
      }
    }
    console.log(false)
    return false
  
    console.log("test:",opt6.test(str))
    console.log("match:",str.match(opt6))
  }
  
  // probs
  
  telephoneCheck("1 555-555-5555") // should return true.
  telephoneCheck("1 (555) 555-5555") // should return true.
  telephoneCheck("1(555)555-5555") //should return true.
  
  
  // telephoneCheck("555-555-5555"); // opt1
  // telephoneCheck("(555)555-5555"); // opt2
  // telephoneCheck("(555) 555-5555"); // opt3
  // telephoneCheck("555 555 5555"); // opt4
  // telephoneCheck("5555555555"); // opt5
  // telephoneCheck("1 111 555 5555") // opt6