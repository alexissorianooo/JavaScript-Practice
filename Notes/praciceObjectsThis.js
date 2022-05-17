let person = {
    name: "Alexis",
    walk() {
        console.log(this)
    }
}

person.walk();

let some = person.walk.bind(person);
console.log("this is some:", some);