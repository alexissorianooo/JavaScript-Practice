/**
 * Everything Be True
 * Check if the predicate (second argument) 
 * is truthy on all elements of a collection (first argument).
 * 
 * In other words, you are given an array collection of objects. 
 * The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
 * 
 * In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
 * Remember, you can access object properties through either dot notation or [] notation.
 */

 function truthCheck(collection, pre) {

    /**
     * using for of loop
     * using "hasOwnProperty"
     * if yes, compare "==="
     * else return false
     */

    let numOfCollection = collection.length
    let counter=[]
  
    for(let item of collection){
  
      if(item.hasOwnProperty(pre) && item[pre]){
        console.log(item[pre], item, counter)
        counter.push(item)
        console.log(counter)
      }
      if(counter.length===numOfCollection){
        return true
      }
  
    }
    console.log(false)
    return false 
  }
  
  truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");