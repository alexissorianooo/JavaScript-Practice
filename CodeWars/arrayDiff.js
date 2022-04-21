function arrayDiff(a, b) {
    for (let i = 0; i<a.length ; i++){
        for (let j = a.length; j>=0; j--){
            if(a[i]===b[j]){
                a.splice(i,1);
                i=0
                j=0
            }
        }
    }
    return a

}

console.log(arrayDiff([1,2,2], [2]));