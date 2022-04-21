function isDivideBy(number, a, b) {
    // good luck
    return Math.abs(number%a)===0 && Math.abs(number%b)===0 ? true : false
}

console.log(isDivideBy(-12, 2, -6));