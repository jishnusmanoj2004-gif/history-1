## JavaScript Assignment – String Methods()
## Part A: Basic Questions
## Q1. What is a string in JavaScript?
ANSWER:
Double quotes " ",
Single quotes ' ',
Backticks ` `.
## Q2. How do you create a string using double quotes, single quotes, and backticks?
ANSWER:
// Using double quotes
let str1 = "Hello";

// Using single quotes
let str2 = 'JavaScript';

// Using backticks
let str3 = `Welcome`;
## Q3. What is the difference between length and trim()?
ANSWER:
LENGTH:length is a property used to count the number of characters in a string.,Spaces are also counted.,It returns a number.
TRIM():trim() is a method used to remove spaces from the beginning and end of a string.,It returns a new string.,Extra spaces at the start and end are removed.
## 4. What does toUpperCase() do?
ANSWER:
toUpperCase() is a JavaScript string method that converts all letters in a string to uppercase (capital letters).
## 5. What does toLowerCase() do?
ANSWER:
toLowerCase() is a JavaScript string method that converts all letters in a string to lowercase (small letters).
## 6. What is the use of includes()?
AMSWER:
includes() is a JavaScript string method used to check whether a string contains a specific word or character.
It returns true if the value is found.
It returns false if the value is not found.
## 7. What is the difference between slice() and substring()?
ANSWER:
SLICE:Extracts part of a string.,Supports negative indexes.,If negative values are used, counting starts from the end.
## 8. What does replace() do?
ANSWER:
In most programming languages, replace() is a string method used to find part of a string and substitute it with something else.
## 9. What is the purpose of split()?
ANSWER:
split() is used to break a string into smaller parts and store them as a list (or array). It usually splits the string wherever a specified separator appea'rs.
## 10. What is the difference between charAt() and bracket notation (str[0])?
ANSWER:
In JavaScript, both charAt() and bracket notation (str[0]) are used to access characters in a string, but there are some differences.
1. charAt()
It is a string method.
Returns the character at a specified index.
If the index does not exist, it returns an empty string ("").
2. Bracket Notation (str[index])
Uses square brackets to access characters.
More modern and commonly used.
If the index does not exist, it returns undefined.
## 11. What does indexOf() return if the value is not found?
ANSWER:
In JavaScript, indexOf() returns -1 if the value is not found in the string or array.
## 12. Explain the use of startsWith() and endsWith()?
ANSWER:
startsWith()
The startsWith() method checks whether a string begins with a specified value.
## 13. What is the difference between trim(), trimStart(), and trimEnd()?
ANSWER:
1. trim()
Removes whitespace from both the beginning and the end of a string.
2. trimStart()
Removes whitespace only from the beginning of the string.
## 14. What does repeat() do?
ANSWER:
The repeat() method in JavaScript is used to repeat a string multiple times.
Syntax:string.repeat(count)
## 15. Explain template literals with an example?
ANSWER:
Template literals in JavaScript are strings written using backticks ( ` ` ) instead of single (' ') or double (" ") quotes.
They allow:
String interpolation (embedding variables)
Multi-line strings
Easier string formatting
```js
let name = "John";
let age = 20;
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
```
## Part B: Output Prediction
## 1.QUESTION. 
## let str = "JavaScript"; 
## console.log(str.length);
ANSWER:
10
## 2.QUESTION
## let str = "hello";
## console.log(str.toUpperCase());
ANSWER:
HELLO
## 3.QUESTION
## let str = "WELCOME";
## console.log(str.toLowerCase());
ANSWER:
welcome
## 4.QUESTION
## let str = "Programming";
## console.log(str.slice(0, 4));
ANSWER:
Prog
## 5.QUESTION
## let str = "Frontend";
## console.log(str.includes("end"));
ANSWER:
true
## 6.QUESTION
## let str = "apple,banana,mango";
## console.log(str.split(","));
ANSWER:
[ 'apple', 'banana', 'mango' ]
## 7.QUESTION
## let str = "JavaScript";
## console.log(str.charAt(2));
ANSWER:
v
## 8.QUESTION
## let str = "I like cats";
## console.log(str.replace("cats", "dogs"));
ANSWER:
I like dogs
## 9.QUESTION
## let str = "   Hello World   ";
## console.log(str.trim());
Hello World
## 10.QUESTION
## let str = "coding";
## console.log(str.startsWith("co"));
ANSWER:
true
## Part C: Basic Programs
## 1. Convert 'javascript' into uppercase?
ANSWER:
```js
let str = "javascript";
console.log(str.toUpperCase());
```
JAVASCRIPT
## 2. Convert 'HELLO' into lowercase?
ANSWER:
```js
let word = "HELLO";
console.log(word.toLowerCase());
```
hello
## 3. Find the length of 'Frontend Development'?
ANSWER:
```js
let str = "Frontend Development";
console.log(str.length);
```
20
## 4. Print the first character of a string?
ANSWER:
```js
let str = "kerala";
console.log(str.charAt(0));
```
k
## 5. Print the last character of a string?
ANSWER:
```js
let letter = "asustuff";
console.log(letter.charAt(letter.length - 1));
```
f
## 6. Check whether 'Script' exists in 'JavaScript'?
ANSWER:
```js
let str = "javascript";
console.log(str.includes("script"));
```
true
## 7. Replace 'good' with 'awesome' in 'This is a good day'?
ANSWER:
```js
let letter = "this was awseom";
console.log(letter.replace("awseom" , "nice"));+
```
this was nice
## 8. Remove spaces from the beginning and end of a string?
ANSWER:
```js
let str = "    javascript    "
console.log(str.trim());
```
javascript
## 9. Extract 'Java' from 'JavaScript'?
ANSWER:
```js
let word = "javascript";
console.log(word.slice(0,4));
```
java
## 10. Convert 'HTML,CSS,JavaScript' into an array using split()?
ANSWER:
```js
let str = "HTML,CSS,javascript";
console.log(str.split(","));
```
[ 'HTML', 'CSS', 'JavaScript' ]
## 11. Print 'Hi' 5 times using repeat()?
ANSWER:
```js
let str = "Hi ";
console.log(str.repeat(5));
```
Hi Hi Hi Hi Hi
## 12. Check whether a string starts with 'Mr'?
ANSWER:
```js
let name = "Mr john";
console.log(name.startsWith("Mr"));
```
true
## 13. Check whether a filename ends with '.pdf'?
ANSWER:
```js
let fileName = "document.pdf";
console.log(fileName.endsWith(".pdf"));
```
true
## 14. Capitalize the first letter of 'hello world'?
ANSWER:
```js
let str = "hello world";
let result = str.charAt(0).toUpperCase() + str.slice(1);
console.log(result);
```
Hello world
## 15. Find the position of 'a' in 'JavaScript'?
ANSWER:
```js
let str = "JavaScript";
console.log(str.indexOf("a"));
```
1