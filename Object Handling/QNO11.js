//Write a JavaScript function to print all the methods in an JavaScript object.
let classObj = Array.prototype;
console.log(Object.getOwnPropertyNames(classObj).filter(function(x){
    return typeof classObj[x] == 'function';
}));




