//Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys
function swapKeysandValues(obj){
    let swappedObj = {};
    for(let key in obj){
        swappedObj[obj[key]] = key;
    }
    return swappedObj;
};
let person = {
    name : "usama",
    age : 27,
    class : "BBA"
};
let swapped = swapKeysandValues(person);
console.log(swapped);