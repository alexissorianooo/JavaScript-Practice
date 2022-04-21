// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

function areYouPlayingBanjo(name) {
    // Implement me
    return name.indexOf('r')===0 || name.indexOf('R')===0 ? `${name} plays banjo` : `${name} does not play banjo`
    
}

areYouPlayingBanjo("Adam")
console.log(areYouPlayingBanjo("bravo"));

// let names = "HELLOR"

// console.log(names.toLowerCase().indexOf('r'));