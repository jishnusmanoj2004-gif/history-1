## Section A: Theory & Basics


## 1. What is a variable in JavaScript?
ANSWER:
A variable in JavaScript is a container used to store data or values.

## A variable in JavaScript is a container used to store data or values ?
ANSWER:
Yes, that is correct.
A variable in JavaScript is a container used to store data or values that can be used and modified in a program.

## 3. What are let, var, and const? What is the difference between them?
ANSWER:
1.var:
Old way of declaring variables
Function-scoped
Can be redeclared and updated
2.let:
Introduced in ES6
Block-scoped
Can be updated
Cannot be redeclared in the same scope
3.const:
Also block-scoped
Cannot be updated or redeclared
Value remains constant

## Create a greeting alert. Hint: use prompt, variable message, and alert.

```js
let user=prompt("PLEASE ENETR YOUR NAME");
let message="GOOD MORNING"
alert(`HELLO, ${user},${message}`)
```

## What are the naming conventions in javascript
ANSWER:
JavaScript naming conventions are rules and best practices used to name variables, functions, classes, and other identifiers clearly and consistently.   *CAMEL CASE  *PASCAL CASE  *UPPER SNAKE CASE

## Section B: Practical Problems

## 1. Create variables for age, city, and isStudent. Print them in one sentence
ANSWER:
```js
let age=prompt("enter the age");
let city=prompt("enter the city");
let isstudent=prompt("enter the name");
alert(`HELLO, ${age} ,${city} ,${isstudent}`)
```
## Swap the values of two variables using a temp variable. 
ANSWER:
```js
let x=11;
let y=5;
let temp=x;
x=y;
y=temp
conole.log("x=",x);
console.log("y=",y);
```

## Change a variable from number to string and print both values ?
ANSWER:
```js
let value = 25;
console.log("Number value:", value);
console.log("Type:", typeof value);
value = String(value);
console.log("String value:", value);
console.log("Type:", typeof value);
```
## Combine firstName and lastName using template literals ?
ANSWER:
```js
let firstname=("JOHN");
let secondname=("WICK");
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
```
## Identify valid and invalid variable names ?
ANSWER:
```js
valid
let name;
let age1;
let _score;
let $price;
let firstName;
invalid
let 1age;      
let first-name;
let user name; 
let let;  

```