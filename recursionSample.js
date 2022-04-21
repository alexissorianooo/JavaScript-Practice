var counter=0;
function show(){
    console.log("Hi", counter++);
    counter++;
    show();
}

function factorial(number){
    if (number > 0 ){
        
        return number*(factorial(number-1));
    }else{
        return 1;
    }
}


let num = 5;
let result = factorial(num);
console.log(result);

// factorial(5)
//     --> 5*fact(4)
//         factorial(4)
//             --> 4*fact(3)
//                 factorial(3)
//                     --> 3*fact(2)
//                         factorial(2)
//                             --> 2*fact1
//                                 factorial(1)
//                                     --> 1*fact(0)
//                                         factorial(0)
//                                             --> return 1
//                                     // 1
//                             // 2
//                     // 6
//             // 24
//     // 120
                                    