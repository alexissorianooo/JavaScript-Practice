let alien2 = {
    name : "Alexis",
    tech : "JavaScript",
    laptop : {
        cpu : "i7",
        ram : "16gb",
        brand : "Mac",
        something : {
            something1 : "some1",
            something2 : "some2",
        }
    },
    computer : {
        cpu : "i7",
        ram : "32gb",
        brand : "Ryzen",
        something : {
            something1 : "some1",
            something2 : "some2",
        }
    }
}

// only displays underfined when there is no laptop property
// console.log(alien2.laptop?.brand);

// delete a property

// console.log(alien2['laptop']['brand']);
// delete alien2.laptop
// console.log(alien2, typeof alien2.laptop);

// For in loop
for (let item in alien2){
    console.log(item, typeof item, ":",alien2[item], typeof alien2[item]);
    if (typeof alien2[item] === 'object'){ // checks if the value of key(item) is an object
        for (let item2 in alien2[item]){ // gets the value of key(alien2[item]) since it is an object
            console.log(item2, typeof item2,":",alien2[item][item2], typeof alien2[item][item2]);
            if (typeof alien2[item][item2] === 'object'){ // checks if the value of the key is an object
                for(let item3 in alien2[item][item2]){
                    console.log(item3, typeof item3, ":", alien2[item][item2][item3], typeof alien2[item][item2][item3]);
                }
            }
        }
    }
}