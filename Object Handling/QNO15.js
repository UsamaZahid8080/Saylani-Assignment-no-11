//Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
let person = {
    firstName : "usama",
    lastName : "Zahid",
    age : 27,
    class: "BBA"
};
for(const key in person){
    console.log(key +':'+person[key]);
}