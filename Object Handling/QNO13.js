//Write a JavaScript function to retrieve all the names of object's own and inherited properties.
let user = {
    name:"usama",
    age : 27,
};
let prop = Object.keys(user);
console.log(prop);
