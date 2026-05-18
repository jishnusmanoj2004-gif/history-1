/*
let user=prompt("PLEASE ENETR YOUR NAME");
let message="GOOD MORNING"
alert(`HELLO, ${user},${message}`)
*/
/*
let age=prompt("enter the age");
let city=prompt("enter the city");
let isstudent=prompt("enter the name");
alert(`HELLO, ${age} ,${city} ,${isstudent}`)
*/
/*
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
console.log(sum);
*/
/*
let length = 10;
let breadth = 5;
let area = length * breadth;
console.log(area);
*/
/*
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
*/
/*
let p=prompt("principle amount");
let r=prompt("enter th rate");
let t=prompt("enter the duration");
let annualinterest=(p * r * t)/100;
alert(`annual interest is ${interest}`);*/
/*
let F = 98.6;
let C = ((F - 32) * 5) / 9;
console.log("Temperature in Fahrenheit =", F);
console.log("Temperature in Celsius =", C.toFixed(2));*/
/*
let weight = 70;
let height = 1.75;
let bmi = weight / (height * height);
console.log("Weight =", weight, "kg");
console.log("Height =", height, "m");
console.log("BMI =", bmi.toFixed(2));*/
/*
let MRP = 1000;
let sellingPrice = 750;
let discountPercentage = ((MRP - sellingPrice) * 100) / MRP;
console.log("MRP =", MRP);
console.log("Selling Price =", sellingPrice);
console.log("Discount Percentage =", discountPercentage + "%");*/
/*
let a=2
if (a>=5){
    console.log("yes");
}else{
    console.log("no");
}*/
//?assignment05
/*
let a=3
if(a>=0){
    console.log("positive");
}else{
    console.log("negative");
}*/
/*
let a=10
if(a%2===0){
    console.log("even");
}else{
    console.log("odd");
}*/
/*
let age = 20
if(age>=18){
    console.log("eligible for voting");
}else{
    console.log("not eligible for voting");
}*/
/*
let num1 = 40
let num2 = 44
if(num1<=num2){
    console.log(num1 + "smallest number");
}else{
    console.log(num2 + "largest number");
}*/
/*
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
console.log("the largest number is",largest);*/
/*
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
}*/
/*
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
console.log("Grade:", grade);*/
/*
let number = 30;
if (number % 3 === 0 && number % 5 === 0) {
    console.log(number + " is divisible by both 3 and 5");
} else {
    console.log(number + " is not divisible by both 3 and 5");
}*/
/*
let number = 25;
if (number >= 10 && number <= 50) {
    console.log(number + " is in the range 10 to 50");
} else {
    console.log(number + " is not in the range 10 to 50");
}*/
/*
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}*/
/*
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
}*/
/*
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
}*/
/*
let number = 12;
if (number > 0) {
    console.log(number + " is Positive");
} else if (number < 0) {
    console.log(number + " is Negative");
} else {
    console.log("The number is Zero");
}*/
/*
let marks = 35;
if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}*/
/*
let temperature = 100.2; // in Fahrenheit
if (temperature > 98.6) {
    console.log("Fever detected");
} else {
    console.log("Normal temperature");
}*/
/*
let temperature = 98.1;
if (temperature >= 98 && temperature <= 98.9) {
    console.log("Normal temperature");
} else {
    console.log("Not normal temperature");
}*/
/*
let totalClasses = Number(prompt("Enter total number of classes:"));
let attendedClasses = Number(prompt("Enter number of classes attended:"));
let attendancePercentage = (attendedClasses / totalClasses) * 100;
if (attendancePercentage >= 75) {
    alert("You can write the exam.");
} else {
    alert("You cannot write the exam.");
}
console.log("Attendance Percentage:", attendancePercentage + "%");
*/
/*
let val = 12;
if (val < 5) {
    console.log("Tiny");
} else if (val < 10) {
    console.log("Small");
} else if (val < 15) {
    console.log("Medium");
} else if (val < 20) {
    console.log("Large");
} else {
    console.log("Huge");
}*/
/*
let role = "admin";
switch (role) {
    case "admin":
        console.log("Admin gets full access");
        break;
    case "manager":
        console.log("Manager gets limited access");
        break;
    case "user":
        console.log("User gets normal access");
        break;
    default:
        console.log("Invalid role");
}*/
/*
let balance = 5000;
let withdrawalAmount = 1200;
if (balance >= withdrawalAmount && withdrawalAmount % 100 === 0) {
    console.log("Withdrawal successful");
} else {
    console.log("Invalid withdrawal");
}*/