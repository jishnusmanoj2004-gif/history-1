## Condition

## Q1. Check if a number is positive or negative?
AMSWER:
```js
let a=3
if(a>=0){
    console.log("positive");
}else{
    console.log("negative");
}
```
## Q2. Check if a number is even or odd?
ANSWER:
```js
let a=10
if(a%2===0){
    console.log("even");
}else{
    console.log("odd");
}
```
## Q3. Check if a person is eligible to vote?
ANSWER:
```js
let age = 20
if(age>=18){
    console.log("eligible for voting");
}else{
    console.log("not eligible for voting");
}
```
## Q4. Find the largest of two numbers?
ANSWER:
```js
let num1 = 40
let num2 = 44
if(num1<=num2){
    console.log(num1 + "smallest number");
}else{
    console.log(num2 + "largest number");
}
```
## Q5. Find the largest of three numbers?
ANSWER:
```js
let a=3;
let b=8;
let c=7;
let largest;
if(a>=b && a>=c){
    largest = a;
}else if (b>=a && b>=c){
    largest = b;
}else{
    largest = c;
}
console.log("the largest number is",largest);
```
## Q6. Check if a character is a vowel or consonant?
ANSWER:
```js
let ch = 'a';
if (
    ch === 'a' || ch === 'e' || ch === 'i' ||
    ch === 'o' || ch === 'u' ||
    ch === 'A' || ch === 'E' || ch === 'I' ||
    ch === 'O' || ch === 'U'
) {
    console.log(ch + " is a vowel");
} else {
    console.log(ch + " is a consonant");
}
```
## Q7. Grade the student based on marks?
ANSWER:
```js
let marks = 85;
let grade;
if (marks >= 90) {
    grade = "A";
} else if (marks >= 80) {
    grade = "B";
} else if (marks >= 70) {
    grade = "C";
} else {
    grade = "FAIL";
}
console.log("Marks:", marks);
console.log("Grade:", grade);
```
## Q8. Check if a number is divisible by both 3 and 5?
ANSWER:
```js
let number = 30;
if (number % 3 === 0 && number % 5 === 0) {
    console.log(number + " is divisible by both 3 and 5");
} else {
    console.log(number + " is not divisible by both 3 and 5");
}
```
## Q9. Check if a number is in a range (10 to 50)?
ANSWER:
```js
let number = 25;
if (number >= 10 && number <= 50) {
    console.log(number + " is in the range 10 to 50");
} else {
    console.log(number + " is not in the range 10 to 50");
}
```
## Q10. Check if a year is a leap year?
ANSWER:
```js
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}
```
## Q11. Display day name based on day number?
ANSWER:
```js
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}
```
## Q12. Basic Calculator (Add, Subtract, Multiply, Divide)?
ANSWER:
```js
let number1 = 10;
let number2 = 5;
let operator = "+";
switch (operator) {
    case "+":
        console.log("Result:", number1 + number2);
        break;
    case "-":
        console.log("Result:", number1 - number2);
        break;
    case "*":
        console.log("Result:", number1 * number2);
        break;
    case "/":
        if (number2 !== 0) {
            console.log("Result:", number1 / number2);
        } else {
            console.log("Cannot divide by zero");
        }
        break;
    default:
        console.log("Invalid operator");
}
```
## Q13. Check if a number is zero, positive, or negative?
ANSWER:
```js
let number = 12;
if (number > 0) {
    console.log(number + " is Positive");
} else if (number < 0) {
    console.log(number + " is Negative");
} else {
    console.log("The number is Zero");
}
```
## Q14. Check if a student passed or failed?
ANSWER:
```js
let marks = 35;
if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}
```
## Q15. Check if the person has a fever (normal temperature: 98.6F)?
ANSWER:
```js
let temperature = 100.2; // in Fahrenheit
if (temperature > 98.6) {
    console.log("Fever detected");
} else {
    console.log("Normal temperature");
}
```
## Q16. Check if someone has normal temperature: Normal temp= (98 to 98.9)
## 98.1 => normal
## 99 => not normal
## 97.9 => not normal
ANSWER:
```js
let temperature = 98.1;
if (temperature >= 98 && temperature <= 98.9) {
    console.log("Normal temperature");
} else {
    console.log("Not normal temperature");
}
```
## Q17. You need to have 75% attendance to write the exam. Take the total number of classes and the number of attendances from the student and tell him if he can write the exam?

