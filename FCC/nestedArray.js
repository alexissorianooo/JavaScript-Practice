function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    var row
    for (row=0; row<arr.length; row++){
        if(arr[row].indexOf(elem)>-1){ // if existing
            console.log(row, arr[row].indexOf(elem), arr[row])
            // delete arr[row] // easy fix
            arr.splice(row, 1)
            row-=1; 
            // we cannot do "row=0" becasue of "row++" in "for loop"
            // instead we can step back from loop, example if we found match in row 4,
            // we decrease row by 1 so that when "for loop" do its increment 
            // it will start from row 3 to row 4
        }else{
            console.log("here")
            newArr.push(arr[row])
        }
    }

 
    // Only change code above this line
    return newArr;
  }
  
//   console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18))
//   console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2))