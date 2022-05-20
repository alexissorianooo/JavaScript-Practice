let reg = /([+*\/-])+([+*\/])/

let subject = "10-2+-/+23" 
let mutant = subject.replace(reg, '$2') // NICE
console.log(reg.test(subject))
console.log(subject)
console.log(mutant)

console.log(eval("5 * - 5"))