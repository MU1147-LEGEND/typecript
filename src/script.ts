// 1. function params
function multiply(a: number, b: number, c?: number) {
    // third one is optional.
    return a * b;
}

// 2. array - single type = let a:string[] = []
let fruites: (string | number)[] = ["apple", "banana", "orange"];

fruites.push(45);
// 3. object
let person: object = {
    name: "Mohammad",
    age: 22,
    isProgrammer: true,
};

// person.spouse = "Tania"; // not exist the key

// 4. object with more clear type - explicit object type
let typedPerson: {
    name: string;
    age: number;
    isProgrammer: boolean;
    languages: string[];
};

typedPerson = {
    name: "Mohammad",
    age: 22,
    isProgrammer: true,
    languages: ["JavaScript", "TypeScript", "Python"],
    // country: 'Bangladesh' // invalid key-value
};

// 5. explicit variable type
let a: number; // explicit type declare
// a = "5"; //invalid type assign
a = 45;
// multiple type
let b: string | number;
b = "Mohammad";
// b = false; // invalid type

// 6. dynamic type
let dynamic: any; //or let dynamic;
dynamic = 5;
dynamic = "Not Found!";

// 7 function type
const myFunc: Function = () => {
    console.log("Typed Function");
};

myFunc();

// 8. function return type
function add(a: number, b: number): number {
    // explicit return type
    return a * b;
}

// 9. Type Aliases
type ID = string | number;
type USER = { name: string; age: number };

const userDetails = (id: ID, user: USER) => {
    console.log(`${id} - Hello ${user.name}`);
};

userDetails(3, { name: "Mohammad", age: 22 });

// 10.
