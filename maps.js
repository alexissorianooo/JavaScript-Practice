let map = new Map(); // basically a collection of key and values

map.set("Alexis", "Java");
map.set("Kiran", "Android")
map.set("Soriano", "Java")
map.set("Alexis", "MERN")

// console.log(map.keys()); // gets all the keys in the map
// console.log(map.has("Soriano")); // returns boolean value
// console.log(map.get("Kiran")) // returns the value of the given key

// for(let [key,values] of map){
//     console.log(key, ":", values);
// }

map.forEach(function (value,key,map) {
    console.log(value,key)
})