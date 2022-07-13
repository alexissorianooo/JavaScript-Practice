/**
 * Write a function that will find all the anagrams of a word from a list. 
 * You will be given two inputs a word and an array with words. 
 * You should return an array of all the anagrams or an empty array if there are none. 
 */

 function anagrams(word, words) {
    var wordArray = word.split('').sort()
    var anagramsList = []

    for(item of words){
        var testItem = item.split('').sort()
        var checker = 0
        for(let i=0; i<testItem.length; i++){
            if(wordArray[i] !== testItem[i]){
                continue
            }else{
                checker+=1
            }
        }
        checker === testItem.length && anagramsList.push(item)
    }
    console.log(anagramsList)
}

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])

/**
 * CLEVER
 */

 String.prototype.sort = function() {
    return this.split("").sort().join("");
  };
  
  function anagramsCLEVER(word, words) {
    return words.filter(function(x) {
        return x.sort() === word.sort();
    });
  }