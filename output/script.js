"use strict";
// 1. function params
function multiply(a, b, c) {
    // third one is optional.
    return a * b;
}
// 2. array - single type = let a:string[] = []
let fruites = ["apple", "banana", "orange"];
fruites.push(45);
// 3. object
let person = {
    name: "Mohammad",
    age: 22,
    isProgrammer: true,
};
// person.spouse = "Tania"; // not exist the key
// 4. object with more clear type - explicit object type
let typedPerson;
typedPerson = {
    name: "Mohammad",
    age: 22,
    isProgrammer: true,
    languages: ["JavaScript", "TypeScript", "Python"],
    // country: 'Bangladesh' // invalid key-value
};
// 5. explicit variable type
let a; // explicit type declare
// a = "5"; //invalid type assign
a = 45;
// multiple type
let b;
b = "Mohammad";
// b = false; // invalid type
// 6. dynamic type
let dynamic; //or let dynamic;
dynamic = 5;
dynamic = "Not Found!";
// 7 function type
const myFunc = () => {
    console.log("Typed Function");
};
myFunc();
// 8. function return type
function add(a, b) {
    // explicit return type
    return a + b;
}
const userDetails = (id, user) => {
    console.log(`${id} - Hello ${user.name}`);
};
userDetails(3, { name: "Mohammad", age: 22 });
// 10. Function signatures
// creating signature
let signFunc;
// writing body
signFunc = (a, b) => {
    // or  signFunc = (a:number, b:number)
    return a + b;
};
console.log(signFunc(2, 3));
