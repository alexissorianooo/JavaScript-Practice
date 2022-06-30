/**
 * Build Tower
 * Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.
 * 
 * For example, a tower with 3 floors looks like this:
    [
        "  *  ",
        " *** ", 
        "*****"
    ]

 * And a tower with 6 floors looks like this:
    [
        "     *     ", 
        "    ***    ", 
        "   *****   ", 
        "  *******  ", 
        " ********* ", 
        "***********"
    ]
 */


function towerBuild(floors){
    var block = 1 // initial block (first floor always starts at 1 block)
    var spaces = (floors*2)-1 // to know how many spaces I am going to occupy
    var floorBlock = [] // to create an array of blocks
    var tower = [] // The final array with different levels of floors
    
    for(let i=0; i<floors; i++){
        floorBlock = [] // reset the block
        if(i>=1){
            block+=2 // to increase the numbers of "*" block
            spaces-=2 // to decreate the number of spaces to occupy (the final space is 1)
        }
        for(let j=0; j<spaces; j++){
            if(j === Math.floor(spaces/2)){ // floor because we need to put "*" in middle index
                floorBlock.push(("*").repeat(block)) // repeat to repeat the "*" in the middle index
            }else{
                floorBlock.push(" ") // push spaces
            }
        }
        tower.push(floorBlock.join('')) // Pushing the floorBlock to the final array
    }
    console.log(tower)
}

towerBuild(3)



