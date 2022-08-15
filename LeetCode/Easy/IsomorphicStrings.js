var isIsomorphic = function(s, t) {
    var one = new Map()
    var two = new Map()
    
    for(let i = 0; i<s.split('').length; i++){
        if(one.has(s.split('')[i]) || two.has(t.split('')[i])){
            if(one.get(s.split('')[i]) !== t.split('')[i] || two.get(t.split('')[i]) !== s.split('')[i]){
                return false
            }
        }
        one.set(s.split('')[i],t.split('')[i])
        two.set(t.split('')[i],s.split('')[i])
    }
    return true
};

// var isIsomorphic = function(s, t) {
//     var one = new Map()
//     var two = new Map()
    
//     for(let i = 0; i<s.split('').length; i++){
//         one.set(s.split('')[i],i)
//         two.set(t.split('')[i],i)
//     }

//     if(two.size !== one.size){
//         return false
//     }

//     const oneCheck = [...one.values()]
//     const twoCheck = [...two.values()]

//     for(let i=0; i<oneCheck.length; i++){
//         if(oneCheck[i]!==twoCheck[i]){
//             return false
//         }
//         return true
//     }
// };

// console.log(isIsomorphic("egg","ads")) // false
// console.log(isIsomorphic("paper","title")) // true
// console.log(isIsomorphic("foo","bar")) // false
// console.log(isIsomorphic("bbbaaaba","aaabbbba")) // false
console.log(isIsomorphic("badc","baba")) // false
