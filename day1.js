//Activity 1: Variable Declaration

// Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.

var numvar=23;
console.log(numvar); //Output:23


// Task 2: Declare a variable using `let`, assign it a string, and log the value to the console.

let strLet = "Hi, My name is Kunal Garg";
console.log(strLet); // Output: Hi, My name is Kunal Garg

// Activity 2: Constant Declaration

// Task 3: Declare a variable using `const`, assign it a boolean value, and log the value to the console.

const b = false;
console.log(b); // Output: False

// Activity 3: Data Types

// Task 4: Create variables of different data types and log each variable's type using the `typeof` operator.

let arr = [10, 23, 34, 56, 89]; //Output: Array
let str = "OCD"; //Output: String
let bool = false; //Output: Boolean
let num = 10; //Output: Number
let obj = {Name: "Kunal Garg",Roll_Number : 108,Branch : "CSE"}; //Output: Object

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.

let reassignVar = "Init Value";
console.log(reassignVar); // Output: Init Value
reassignVar = "New Value";
console.log(reassignVar); // Output: New Value

// Activity 5: Understanding `const`

// Task 6: Try reassigning a variable declared with `const` and observe the error.

const constvar = "Const Value";
console.log(constvar); // Output: Constant Value
// Uncommenting the next line will cause an error
// constvar = "New Value"; // Error: Assignment to constant variable.

// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let numberType = 108;
let stringType = "This is a string";
let booleanType = true;
let objectType = { key: "value" };
let arrayType = [12, 27, 39, 52, 65];
let undefinedType;
let nullType = null;



console.log("Value: ", numberType, ", Type: ", typeof numberType);
// Output: Value: 108, Type: number

console.log("Value: ", stringType, ", Type: ", typeof stringType);
// Output: Value: This is a string, Type: string

console.log("Value: ", booleanType, ", Type: ", typeof booleanType);
// Output: Value:  true, Type: boolean

console.log("Value: ", objectType, ", Type: ", typeof objectType);
// Output: Value: {key:'value'}, Type: object

console.log("Value: ", arrayType, ", Type: ", typeof arrayType);
// Output: Value: [12,27,39,52,65], Type: object (Arrays are a type of object in JavaScript)

console.log("Value: ", undefinedType, ", Type: ", typeof undefinedType);
// Output: Value: undefined, Type: undefined

console.log("Value: ", nullType, ", Type: ", typeof nullType);
// Output: Value: null, Type: object

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.

let letVariable = "I can be reassigned";
console.log(letVariable); // Output: I can be reassigned
letVariable = "I've been reassigned";
console.log(letVariable); // Output: I've been reassigned

const constVariable = "I cannot be reassigned";
console.log(constVariable); // Output: I cannot be reassigned
// Uncommenting the next line will cause an error
// constVariable = "Attempting reassignment"; // Error: Assignment to constant variable.