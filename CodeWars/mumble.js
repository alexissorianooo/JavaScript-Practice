let str = "cat"
let answer = "";

for (let i=0; i<str.length;i++){
    for(let j=0; j<(i+1);j++){
        j===0 ? answer+="-"+str[i].toUpperCase() : answer+=str[i].toLowerCase()
    }
}
console.log(answer.substring(1)); // C-Aa-Ttt