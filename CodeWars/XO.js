function XO(str) {
    //code here
//   let x=0;
//   let o=0;
//   for (let item of str.toLowerCase()){
//     if(item==='x'){
//       x++
//     }else if(item==='o'){
//       o++
//     }
//   }
//   return x===o ? true : false

    let x = str.match(/x/gi) +"x"
    let o = str.match(/o/gi) +"o"
    
    return x.length === o.length
}

console.log(XO("mp"));