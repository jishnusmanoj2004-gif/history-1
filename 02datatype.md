## 1. What are data types in JavaScript?
ANSWER:
Primitive data type and Non-primitive datatype

## 2. List all primitive data types in JavaScript.
ANSWER:                            
String ,
Number ,
BigInt ,
Boolean ,
Undefined ,
Null ,
Symbol

## 3. What is the difference between primitive and non-primitive data types?
ANSWER:
🔹 Primitive Data Types are Store single values directly,,Immutable (cannot be changed),Compared by value,Stored in stack memory 🔹 Non-Primitive Data Types (Reference Types),Store collections or complex data,Mutable (can be changed),Compared by reference,Stored in heap memory

## 4. What is the type of operator? Give examples.
ANSWER:
The type of operator in JavaScript is used to find the data type of a variable or value.

## 5. What is the undefined data type?
ANSWER:
Undefined is a primitive data type in JavaScript that means a variable has been declared but not assigned a value.

## 6. What is null in JavaScript?
ANSWER:
Null in JavaScript is a primitive value that represents an intentional absence of any object value.

## 7. What is the difference between null and undefined?
ANSWER:
🔹 undefined,Means a variable exists but has no value assigned,Set automatically by JavaScript,Default state  🔹 null,Means intentional absence of value,Set manually by the developer

## 8. What is the boolean data type? Give examples.
ANSWER:
The boolean data type in JavaScript represents logical values: only true or false.
let isLoggedIn = true;
let hasPermission = false;

## 9. What is a string in JavaScript?
ANSWER:
A string in JavaScript is a primitive data type used to represent text

## 10. What is a number data type? Does JavaScript support integers and floats separately?
ANSWER:
The number data type in JavaScript is used to represent all numeric values, including integers and decimal (floating-point) numbers.No. JavaScript has only one number type for both: Integers → 10 Floats → 3.14 All numbers are stored as 64-bit floating-point values (IEEE 754 standard).

## SECTION B: Conceptual Questions

## 1. What is the symbol data type in JavaScript?
ANSWER:
The symbol data type in JavaScript is a primitive type used to create unique and immutable identifiers.

## 2. What is bigint and why is it used?
ANSWER:
BigInt is a primitive data type in JavaScript used to represent very large integers that cannot be safely handled by the regular number type.

## 3. What happens when you use type of null?
ANSWER:
This is a historical bug in JavaScript.When JavaScript was first created, values were tagged internally, and null was incorrectly tagged as an object

## 4. Explain type coercion with examples.
ANSWER:
🔹 1. Implicit Coercion (Automatic) 
JavaScript converts types automatically during operations.
🔹 2. Explicit Coercion (Manual)
You convert types yourself.
🔹 3. Equality Coercion
Loose equality (==) does type conversion:

## 5. What is implicit and explicit type conversion?
ANWSER:
Key Difference
Implicit → automatic conversion by JavaScript
Explicit → manual conversion by you

## 6. What is NaN ? When does it occur?
ANSWER:
NaN stands for “Not a Number”.
It is a special value in JavaScript that represents an invalid or undefined numeric result.
Invalid math operations,Converting non-numeric strings,Undefined or invalid operations

## Section C: Practical / Coding Questions

## 1 . Write a program to check the data type of a variable
ANSWER:
<!-- let name="jishnu";
let age=25;
let isstudent=true; -->
let a-20
console.log(typeof(a));


##  Declare variables of all primitive data types and print their types?
ANSWER:

```JS
// PRIMITIVE DATA TYPE

let str = "Hello";          
let num = 42;               
let bigIntNum = 1234567890123456789012345678901234567890n; 
let isTrue = true;     
let undef;               
let sym = Symbol("id");    
let empty = null;           

// PRINTING TYPE

console.log("string:", typeof str);
console.log("number:", typeof num);
console.log("bigint:", typeof bigIntNum);
console.log("boolean:", typeof isTrue);
console.log("undefined:", typeof undef);
console.log("symbol:", typeof sym);
console.log("null:", typeof empty);

```

##  Write a program to convert a string to a number?
ANSWER:
```JS

let a="77"
a=Number(a)
console.log(typeof(a));

```

## Write a program to convert a number to a string?
ANSWER:
```js
let num=(42);
let a=("abc");
console.log(typeof(num))

```

## 21. What will be the output of:
## I console.log(typeof 42);
## II console.log(typeof "Hello");
## III console.log(typeof true);
## IV console.log(typeof undefined);
## V console.log(typeof null);
ANSWER:
I: number
II: string
III: boolean
IV :undefined
V :object

## 22. Predict the output:
## I console.log(5 + "5");           
## II console.log("5" - 2);         
## III console.log(true + 1);        
## IV console.log(false + "hello"); 
ANSWER:
I :55
II :3
III :2
IV :falsehello

## 23. Create an object and an array, then check their data types using `typeof'?
ANSWER:
```js
//creating an object
let person={
    name:"jishnu",
    age:21
};
//creating an array
let colors=["red","blue"];

console.log(typeof person);
console.log(typeof colors);

```