// function inside an object is called METHODS

function getFastestMachine(machine1, machine2){
    if (machine1.cpu > machine2.cpu){
        console.log(machine1);
    }else{
        console.log(machine2);
    }
}


let laptop = {
    cpu : "M2",
    ram : "64gb",
    brand : "Lenovo",

    greet : () => {
        console.log("Hello world")
    },

    getSpecs : function() {
        let storage = 100;


        console.log(this.cpu); // "this" means the current object
    },

    compareMachine: function(machine){
        this.cpu > machine.cpu ? console.log("this machine is better ",this) : console.log("the other machine is better: ",machine);
    },

}

let laptop1 = {
    cpu : "M1",
    ram : "32gb",
    brand : "Apple",

    greet : () => {
        console.log("Hello world")
    },

    getSpecs : function() {
        let storage = 100;


        console.log(this.cpu); // "this" means the current object
    },

    compareMachine: function(machine){
        this.cpu > machine.cpu ? console.log("this machine is better ",this) : console.log("the other machine is better: ",machine);
    },

}


// laptop.getSpecs();
// laptop1.getSpecs();

// getFastestMachine(laptop, laptop1);

laptop.compareMachine(laptop1);