/**
 * Move the first letter of each word to the end of it, 
 * then add "ay" to the end of the word. Leave punctuation marks untouched.
 */

function pigIt(str){
    var words = []
    str.split(' ').map(item => {
        if(/[a-z]/gi.test(item.split('')[item.length-1])){
        words.push(item.substr(1)+item[0]+'ay')
        }else{
        words.push(item)
        }
    })
    return words.join(' ')
}