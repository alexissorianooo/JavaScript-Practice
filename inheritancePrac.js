class Person{
    constructor (name){
        this.name = name;
    }
    walk(){
        console.log(this.name, 'is walking');
    }
}

class Soldier extends Person{
    constructor(someName, position){
        super(someName) // Required to pass the superName variable to Person class and psses it to "this.name"
        this.position = position;
    }
    aim(){
        console.log(this.name, "is aiming"); //this.name uses "name" variable from Person class
    }
}

let Alexis = new Soldier("alexis", "general");
Alexis.aim()