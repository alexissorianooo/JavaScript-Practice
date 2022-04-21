function something(item1, item2){
    let summer = 0;
    function add(value1,value2){
        return value1+value2;
    }
    summer = add(item1,item2);
    return summer;
}

let result = something(23,2)


console.log(result);
