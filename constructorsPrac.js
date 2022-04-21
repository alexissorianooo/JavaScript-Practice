// constrctor function should have a capital first letter in function
// this is a traditional way of creating a class
function Alien(name, tech,plsHide){
    this.name = name;
    this.tech = tech;
    let hiddenName = plsHide;

    this.work = function(){
        console.log("Solving bugs for 12 hours");
    }

    this.detailShow = function(){
        console.log(this.hiddenName, "is solving bugs for 12 hours");

        console.log(`${hiddenName} is solving bugs for 12 hours`);
        console.log(hiddenName, "is solving bugs for 12 hours");
    }

    this.getName = () => {
        return hiddenName;
    }

}

let alien1 = new Alien('Alexis', "MERN", "someHidden")
let alien2 = new Alien("Kean", "MERN", "someHidden_Again")

alien1.tech = "JAVA"

// console.log(alien1.name, alien1.tech);
// console.log(alien2.name, alien2.tech);

// alien1.work();

// console.log("Alien1's name is:", alien1.hiddenName);
// console.log("Alien1's name is:", alien1.getName());
// alien1.detailShow();



// ----------------- ES6 way-----------------------------

class Human{
    #hideNamePLS; // a requirement for making private fields
    constructor(givenName, tech, hidehide){
        this.name = givenName; 
        this.tech = tech;
        this.#hideNamePLS = hidehide; // by using var/let, we can hide the information
    }
    work(){
        console.log(this.name ,"is solving bugs for 12 hours");
    }
    getHiddenName(){
        console.log(this.#hideNamePLS)
    }
    setHiddenName(hidehide){
        this.#hideNamePLS = hidehide;
    }
    greet(){
        console.log(`Hello there ${this.name}, your hidden name is ${this.#hideNamePLS}`);
    }

}

let human1 = new Human("Justin", "JavsScript","someHiddenName");
let human2 = new Human("Soriano", "Java","someHiddenName");

// console.log(human1.name);
// console.log(human2.tech);
human1.work();
human1.getHiddenName();
human1.setHiddenName("Alexis Pogi");
human1.getHiddenName();
human1.greet();
