## Section A – Basic Questions

## Q1.What are operators in JavaScript?
ANSWER:
1.Arithmetic Operators
Used for mathematical calculations
2.Assignment Operators
Used to assign values to variables.
3.Comparison Operators
Used to compare two values.
4.Logical Operators
Used to combine conditions.
5.Increment and Decrement Operators
6.String Operators
The + operator can join strings.

## Q2.What is the difference between arithmetic operators and assignment operators?
ANSWER:

The difference between arithmetic operators and assignment operators in JavaScript is:
Arithmetic Operators:
* Used to perform mathematical calculation
* Produce a new value
* Mainly used in expressions
Assignment Operators:
* Used to assign values to variables
* Update or store a value in a variable
* Mainly used for storing results

## Q3.Explain the purpose of comparison operators with examples?
ANSWER:
Comparison operators in JavaScript are used to compare two values.
They return a Boolean value:
true if the comparison is correct
false if it is not

## Q4.What is the difference between == and === in JavaScript?
ANSWER:
==Equality operator:it converts string into numbers and checks
eq:
let a=5
let b=3
console.log(a==b)
then the aswer is true
===strictly equality:checks datatype aswell
let a="5"
let b=5
console.log(5 === "5");

## Q5.What is the difference between != and !==?
ANSWER:
1.!= (Loose Not Equal)
The != operator checks if two values are not equal after automatic type conversion.
Example:
console.log(5 != "5");
2.!== (Strict Not Equal)
The !== operator checks both:
. value
. data type
No type conversion occurs.
Example:
console.log(5 !== "5");

## Q6.What are logical operators? Explain &&, ||, and !?
ANSWER:
1.Logical AND (&&)
The && operator returns true only when both conditions are true.
Example:
let age = 25;
console.log(age > 18 && age < 30);
2.Logical OR (||)
The || operator returns true if at least one condition is true.
Example:
let marks = 40;
console.log(marks > 50 || marks === 40);
3.Logical NOT (!)
The ! operator reverses the Boolean value.
. true becomes false
. false becomes true
Example:
console.log(!true);

## Q7.What is the purpose of the modulus (%) operator?
ANSWER:
The modulus operator (%) in JavaScript is used to find the remainder after dividing one number by another.
. Find the remainder of division
. Check if a number is even or odd
. Solve cyclic patterns (like looping values)
. Work with divisions where only the remainder matters

## Q8.What is the increment operator? Explain pre-increment and post-increment?
ANSWER:
It is commonly used in loops and counters.
1. Increment Operator (++)
let x = 5;
x++;
console.log(x);
a. Pre-Increment (++x)
In pre-increment, the value is increased first, then used.
Example;
let x = 5;
console.log(++x);
b.Post-Increment (x++)
In post-increment, the current value is used first, then increased.
Example:
let x = 5;
console.log(x++);
console.log(x);

## Q9.What is the decrement operator?
ANSWER:
The decrement operator (--) in JavaScript is used to decrease the value of a variable by 1.
It is commonly used in loops, counters, and situations where a value needs to be reduced step by step.

## Q10.What is operator precedence in JavaScript?
ANSWER:
Operator precedence in JavaScript is the rule that determines the order in which operators are evaluated in an expression.
When an expression has multiple operators, JavaScript does not evaluate them from left to right always—it follows a priority order.

## Section B – Output Prediction

## Q11. Predict the output of the following program:
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
ANSWER:13,7,30,3.33333,1

## Q12. Predict the output of the following program:
let x = 5;
console.log(x++);
console.log(x);
ANSWER:5,6

## Q13. Predict the output of the following program:
let x = 5;
console.log(++x);
console.log(x);
ANSWER:6,6

## Q14. Predict the output of the following program:
console.log(10 == "10");
console.log(10 === "10");
ANSWER:
console.log(10 == "10");
== performs type coercion (loose equality).
"10" (string) is converted to number 10.
So it becomes 10 == 10 → true
console.log(10 === "10");
=== checks strict equality (no type conversion).
10 is a number, "10" is a string → different types.
So → false
✅ Final Output:
true
false

## Q15. Predict the output of the following program:
console.log(true && false);
console.log(true || false);
console.log(!true);
ANSWER:
false
true
false

## Q16. Predict the output of the following program:
let a = 8;
a += 2;
a *= 3;
console.log(a);
ANSWER:
```js
let a=8;
a=a+2;
a=a*3;
a=10*3=30
console.log(a);
```
the output is 30

## Q17. Predict the output of the following program:
console.log(5 > 3 && 10 < 20);
console.log(5 > 10 || 8 == 8);

ANSWER:
true
true

## Q18. Predict the output of the following program:
console.log(10 + "5");
console.log("10" - 5);

ANSWER:
console.log(10 + "5");
console.log("10" - 5);
OUTPUT IS 105,5

## Section C – Write Programs

## Q19. Write a program to add two numbers and display the result?
ANSWER:
```js
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
console.log(sum);
```

## Q20. Write a program to calculate the area of a rectangle using operators.Hint: a = l * b  Area(a) = Length(l) * Breadth(b)
ANSWER:
```js
let length = 10;
let breadth = 5;
let area = length * breadth;
console.log(area);
```js
## Q21. Write a program to swap two numbers using a third variable.
ANSWER:
```js
let a=10;
let b=20;
console.log("Before swapping");
console.log("a=",a;)
console.log("b=",b);
let temp=a;
a=b;
b=temp;
console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);
```

## Q22. Write a program to swap two numbers without using a third variable?
ANSWER:
```js
let a = 10;
let b = 20;
console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);
a = a + b;
b = a - b;
a = a - b;
console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);
```

## Q23. Write a program to calculate annual interest?
I = (PRT)/100
I = annual interest
P = principal amount
R = rate
T = time period(duration)
ANSWER:
```js
let p=prompt("principle amount");
let r=prompt("enter th rate");
let t=prompt("enter the duration");
let annualinterest=(p * r * t)/100;
alert(`annual interest is ${interest}`);
```
## 24. Write a program to convert Fahrenheit to Celsius. C = ((F -32) * 5) / 9
ANSWER:
```js
let F = 98.6;
let C = ((F - 32) * 5) / 9;
console.log("Temperature in Fahrenheit =", F);
console.log("Temperature in Celsius =", C.toFixed(2));
```
## 25. Create a BMI calculator. BMI = Weight(kg) / (height(m) * height(m))
ANSWER:
```js
let weight = 70;
let height = 1.75;
let bmi = weight / (height * height);
console.log("Weight =", weight, "kg");
console.log("Height =", height, "m");
console.log("BMI =", bmi.toFixed(2));
```
##  26. Create a discount percentage calculator.DiscountPercentage = ((MRP – sellingPrice) * 100) / MRP
ANSWER:
```js
let MRP = 1000;
let sellingPrice = 750;
let discountPercentage = ((MRP - sellingPrice) * 100) / MRP;
console.log("MRP =", MRP);
console.log("Selling Price =", sellingPrice);
console.log("Discount Percentage =", discountPercentage + "%");
```
## Section E – Advanced / Conceptual Questions

## Q27. Explain type coercion in JavaScript with examples?
ANSWER:
Type coercion in JavaScript means automatically converting one data type into another when performing operations.
JavaScript does this mainly in:
. Arithmetic operations
. Comparisons
. String concatenation
There are two types of coercion
```js
1. Implicit Type Coercion
JavaScript converts types automatically.
Example 1: Number + String
let result = 5 + "5";
console.log(result);
console.log(typeof result);

2. Explicit Type Coercion
The programmer manually converts the type.
Convert String to Number
let num = Number("100");
console.log(num);
console.log(typeof num);
```
## Q28. Why does "5" + 2 produce a different result from "5" - 2?
ANSWER:
The + operator often means concatenation when one operand is a string.
"5" + 2 The result is 52
The - operator is only for numeric subtraction, so the language tries to convert both values into numbers.
"5" - 2 The result is 3

## 29. What is short-circuit evaluation in logical operators?
ANSWER:
1. Short-circuit with AND (&&)
For an AND expression:
A && B
2. Short-circuit with OR (||)
For an OR expression:
A || B
 
## 30. Predict the output of the following program:
console.log(true + true);
console.log(false + 1);
ANSWER:
1. console.log(true + true);
true + true → 1 + 1 → 2   
Output:2
2. console.log(false + 1);
false + 1 → 0 + 1 → 1
Output:1

## 31. Explain truthy and falsy values in JavaScript.
ANSWER:
There are only 6 falsy values in JavaScript:
* false
* 0
* -0
* 0n (BigInt zero)
* "" (empty string)
* null
* undefined
* NaN
🟢 Truthy values
A truthy value is any value that is NOT falsy. It behaves like true in Boolean contexts.
Examples of truthy values:
* "hello" (non-empty string)
* 42 (any non-zero number)
* [] (empty array)
* {} (empty object)
* "false" (string is still truthy)
* Infinity