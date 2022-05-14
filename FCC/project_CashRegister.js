/**
 * Cash Register
 * Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
 * payment as the second argument (cash), and cash-in-drawer (cid) as the third argument. 
 * cid is a 2D array listing available currency.
 * 
 * The checkCashRegister() function should always return an object with a status key and a change key.
 * 
 * Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
 * or if you cannot return the exact change.
 * 
 * Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is 
 * equal to the change due.
 * 
 * Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, 
 * sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

 */

/**
 * idea: use nested for loop for 2D array
 * (if else) to know what currency units to use.
 * 
 */

 function checkCashRegister(price, cash, cid) {
    let changeNum = (parseFloat(cash)-parseFloat(price))
    let obj = {
      status: "",
      change: []
    }
    let limit = 0
  
    // console.log(price, cash, cash-price)
    // console.log(cid)
  
    // FOR CHANGE
    console.log(typeof parseFloat(changeNum))
    for(let i=0; i<8; i++){ // will run until I complete the change array
  
      if(changeNum >= 100){ //greater than 100
      }else if(changeNum >= 20 && cid[7][1]>0){ // between 99 and 20
        
        let num = 0 
        let insideCid = cid[7][1]
        console.log(insideCid)
        limit = changeNum > insideCid ? insideCid : changeNum
        for(let change=20; change<=limit; change+=20){
          num += 20
        }
        cid[7][1] = insideCid - num
        console.log("inside twenty", cid[7][1])
        changeNum = (changeNum - num).toFixed(2)
        console.log(num, changeNum)
        obj.change.push(["TWENTY", num])
  
      }else if(changeNum >= 10 && cid[6][1]>0){ // between 19 and 10
        
        let num = 0 
        let insideCid = cid[6][1]
        console.log(insideCid)
        limit = changeNum > insideCid ? insideCid : changeNum
        for(let change=10; change<=limit; change+=10){
          num += 10
        }
        cid[6][1] = insideCid - num
        console.log("inside ten", cid[6][1])
        changeNum = (changeNum - num).toFixed(2)
        console.log(num, changeNum)
        obj.change.push(["TEN", num])
  
      }else if(changeNum >= 5 && cid[5][1] > 0){ // between 9 and 5
        let num = 0 
        let insideCid = cid[5][1]
        console.log("inside five", cid[5][1])
        let limit = changeNum > insideCid ? insideCid : changeNum
        for(let change=5; change<=limit; change+=5){
          num += 5
        }
        cid[5][1] = insideCid - num
        console.log("inside five", cid[5][1])
        changeNum = (changeNum - num).toFixed(2)
        console.log(num, changeNum)
        obj.change.push(["FIVE", num])
  
      }else if(changeNum >= 1 && cid[4][1] > 0){ // between 4 and 1
  
        let num = 0 
        let insideCid = cid[4][1]
        limit = changeNum > insideCid ? insideCid : changeNum
        for(let change=1; change<=limit; change+=1){
          num += 1
        }
        cid[4][1] = insideCid - num
        changeNum = (changeNum - num).toFixed(2)
        console.log(num, changeNum)
        obj.change.push(["ONE", num])
  
      }else if(changeNum >= 0.25 && cid[3][1] > 0){ // between .9 and .25
        let num = 0
        let insideCid = cid[3][1]
        limit = changeNum > insideCid ? insideCid : changeNum
        for(let change=0.25; change<=limit; change+=0.25){
          num += 0.25
        }
        cid[3][1] = insideCid - num
        changeNum = (changeNum - num).toFixed(2)
        console.log(num, changeNum)
        obj.change.push(["QUARTER", num])
  
      }else if(changeNum >= 0.1 && cid[2][1] > 0){ // between .24 and .1
        let num = 0 
        let insideCid = cid[2][1]
        limit = changeNum > insideCid ? insideCid : changeNum
        for(let change=0.1; change<=limit; change+=0.1){
          num += 0.1
        }
        cid[2][1] = insideCid - num
        changeNum = (changeNum - num).toFixed(2)
        console.log(num, changeNum)
        obj.change.push(["DIME", num])
  
      }else if(changeNum >= 0.05 && cid[1][1] > 0){ // between .09 and .05
        let num = 0 
        let insideCid = cid[1][1]
        limit = changeNum > insideCid ? insideCid : changeNum
        for(let change=0.05; change<=limit; change+=0.05){
          num += 0.05
        }
        cid[1][1] = insideCid - num
        changeNum = (changeNum - num).toFixed(2)
        console.log(num, changeNum)
        obj.change.push(["NICKEL", num])
  
      }else if(changeNum >= 0.01 && cid[0][1] > 0){ // between .049 and .01
        let num = 0 
        let insideCid = cid[0][1]
        console.log("insideCid: ",parseFloat(insideCid), typeof parseFloat(insideCid))
        limit = parseFloat(changeNum) >= insideCid ? parseFloat(insideCid) : parseFloat(changeNum)
        console.log("limit:",parseFloat(limit), typeof parseFloat(limit))
        for(let change=0.01; change<=parseFloat(limit+Number.EPSILON); change+=0.01){
          num += (0.01+Number.EPSILON)
          
        }
        console.log("num ROUND:",  num , typeof num)
        cid[0][1] = (parseFloat(insideCid) - parseFloat(num)).toFixed(2)
        console.log("cid[0][1]", cid[0][1])
        changeNum = ( parseFloat(changeNum).toFixed(2) -  num.toFixed(2) )
        console.log(num, changeNum)
        console.log("changenum:", changeNum)
        obj.change.push(["PENNY", parseFloat(num.toFixed(2))])
      }
    }
    
    let openCounter = 0 
    for(let item of cid){
        if(item[1]>0){
            openCounter++
        }
    }

    if(openCounter>0 && parseFloat(changeNum) === 0){
        obj.status = "OPEN"
    }else if(openCounter === 0  && parseFloat(changeNum) === 0){
        obj.status = "CLOSED"
        let template = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
        console.log(obj.change[0][0], template[0][0], obj.change.length, template[0], obj.change[0][0] != template[0][0], template.length)
        for(let i=0; i<obj.change.length; i++){
            for(let j=0; j<template.length; j++){
                if(obj.change[i][0] !== template[j][0]){
                    obj.change.push(template[j])
                }
                
            }
            console.log(obj)
            return obj
        }
    }else if(parseFloat(changeNum) > 0){
        obj.status = "INSUFFICIENT_FUNDS"
        obj.change = []
    }

    
    console.log(obj)
    return obj
  }
  
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
//   checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// {status: "INSUFFICIENT_FUNDS", change: []}
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// {status: "INSUFFICIENT_FUNDS", change: []}
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}