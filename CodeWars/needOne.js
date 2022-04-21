function check(a, x){
    for(let items of a){
        if(items === x){
        return true
        }
    }
    return false;
}

console.log(check(['what', 'a', 'great', 'kata'], 'kat'))