function getSum( a,b ){
    a > b ? [a, b] = [b, a] : [a, b] = [a, b];
    if(a===b){
      return a
    }
    let sum=[];
     for (let i=a; i<=b; i++){
       sum.push(i);
     }
    
    return sum.reduce((sums, x) => sums+x);
  }

console.log(getSum(0,1));