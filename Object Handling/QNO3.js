//Write a JavaScript program to get the length of a JavaScript object.

var student = {

name : "David Rayy",

sclass : "VI",

rollno : 12 };
let length = Object.keys(student).length;
console.log(`The Length of a object is ${length}`);