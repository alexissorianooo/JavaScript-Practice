// reverse the number
let given = 564782;
let reverse="";

while(given>0){

   
    //My solution
    reverse = reverse + String(given%10);
    given = parseInt(given / 10);
}
console.log(reverse);

// found in YT
let givenYT = 564782;
let reverseYT =0;

while(givenYT>0){
    reverseYT = reverseYT*10 + givenYT%10; // basically multiplying 10 to add another single digit.
    givenYT = parseInt(givenYT / 10);
}
console.log(reverseYT);