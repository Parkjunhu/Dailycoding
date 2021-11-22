/* operator */

// 1. String concatenation
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals : 1 + 2 = ${1 + 2}`);

// 2. Numeric orperators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(5 % 2);
console.log(2 ** 3);

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = counter++;
console.log(`preIncrement = ${preIncrement}, counter = ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x+y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;
console.log(!value1);

// 7. Equality

const stringFive = "5";
const numberFive = 5;
// loose equlity, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// strict equlity, no type conversion : 값을 비교시, 이방법을 더추천
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;

console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

const name = "ellie";
// 8. conditional operator : if
// if, elseif, else

if (name === "ellie") {
  console.log("welcome, Ellie!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unkwnon");
}

// 9. Ternary operator : ?
// condition ? value1 : value2;
console.log(name === "ellie" ? "yes" : "no");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

const browser = "Firefox";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;

  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;

  default:
    console.log("same all!");
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed;

let i = 3;
while (i > 0){
  console.log(`while : ${i}`);
  i--;
}

// for loop, for(begin; codition; step)
for(let i = 3; i > 0; i--){
  console.log(`for : ${i}`);
}

// break : loop를 완전히 끝내는 명령어 
// continue : 지금껏만 skip하고 바로 다음 step으로 넘어감

// Q1 : 0 to 10 and print only even number(짝수) by use continue;
for(let i = 0; i <= 10; i++){
  
  if(i % 2 !== 0){
    continue;
  }
  console.log(`q1 : ${i}`);
}

// Q2 : iterate from 0 to 10 and print numbers until reaching 8 (use break)

for(let i = 0; i <= 10; i++){
  if(i > 8){
    break;
  }
  console.log(`q2 : ${i}`);
}

/* function */

// 1. function declaration
function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("hello@@");

// 2. Parameters
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "jun" };
changeName(ellie);
console.log(ellie);

// 3. default parameter (add in es6)
function showMessage(message, from = "junhu") {
  console.log(`${message} by ${from}`);
}
showMessage("hi");

// 4. Rest Parameters (added in es6)
function printAll(...args) {
  // 1. for
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  console.log("====================");

  // 2. for of
  for (const arg of args) {
    console.log(arg);
  }

  console.log("====================");

  // 3. foreach
  args.forEach((arg) => console.log(arg));
}

printAll("jun", "jjang", "nickname", "junhu");

// 5. Local scope
let globalMessage = "global";
function printMessage() {
  let message = "hello";
  console.log(message);
  console.log(globalMessage);
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum : ${sum(1, 2)}`);

// 7. Early return, ealry exit

// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade login...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade login...
}

// 8. Function expression
const print = function () {
  console.log("print");
};
print();

// 9. callback function using
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log("yes!");
};

const printNo = function () {
  console.log("no!");
  //print();
};

randomQuiz("aa", printYes, printNo);

// Arrow function
// always anonymous

const simplePrint = function () {
  console.log("simplePrint");
};
const simplePrint2 = () => console.log("simplePrint");
simplePrint2();
//const add2 = (a,b) => { return a * b; }
const add = (a, b) => a + b;
console.log(add(2, 3));

// IIFE : Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})();

console.log("============================");

// Function quiz
// command : (+), (-), (*), (/), (%)
function calculate(command, a, b) {
  switch (command) {
    case "+":
      console.log(`계산결과 = ${a + b}`);
      break;

    case "-":
      console.log(`계산결과 = ${a - b}`);
      break;

    case "*":
      console.log(`계산결과 = ${a * b}`);
      break;

    case "/":
      console.log(`계산결과 = ${a / b}`);
      break;

    case "%":
      console.log(`계산결과 = ${a % b}`);
      break;
  }
}

calculate("%", 2, 3);

/* class & object */
// class : template
// object : instance of a class

// 1. class declarations
class Person{
  // constructor
  constructor(name, age){

    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak(){
    console.log(`${this.name}: hello!`);
  }
}

const p1 = new Person('junhu', 15);
console.log(p1.name, p1.age);
p1.speak();

// 2. getter and setters
class User{
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age(){
    return this._age;
  }

  set age(value){
    if(value < 0){
      throw Error('age can not be negative');
    }
    this._age = value;
  }
}

const user1 = new User('Steve', 'job', 5);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
class Experiment{
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!

class Article{
  static publisher = 'Dream Coding';
  constructor(articleNumber){
    this.articleNumber = articleNumber;
  }

  static printPublisher(){
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance(상속)
// a way for one class to extend another class.
class Shape{
  constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw(){
    console.log(`drawing ${this.color} color of`);
  }
  getArea(){
    return this.width * this.height;
  }
}

class Rectangle extends Shape{}
class Triagle extends Shape{
  // 오버라이딩(overriding)
  draw(){
    super.draw();
    console.log('△');
  }
  getArea(){
    return (this.width * this.height) / 2;
  }
  toString(){
    return `Triangle : color : ${this.color}`;
  }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triagle = new Triagle(20, 20, 'red');
triagle.draw();
console.log(triagle.getArea());
console.log(triagle.toString());

// 6. Class checking : instanceOf
console.log(rectangle instanceof Rectangle);

/* Object */
// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constuctor' syntax

function print(person){
  console.log(person);
}

const junhu = { name : 'junhu', age : 4};
print(junhu);
junhu.hasJob = false;
print(junhu);
delete junhu.hasJob;
print(junhu);

// 2. Computed properties
 console.log(junhu.name);
 console.log(junhu['name']);
 junhu['hasJob'] = true;
 console.log(junhu.hasJob);

 function printValue(obj, key){
   console.log(obj[key]);
 }
 printValue(junhu, 'name');

 // 3. Property value shorthand
 const person1 = { name : 'bob', age : 2}
 const person2 = { name : 'steve', age : 3}
 const person3 = { name : 'dave', age : 4}
 const person4 = new Person('jun', 20);

 // 4. Constructor Function
 function Person(name, age){
   this.name = name;
   this.age = age;
 }
 console.log(person4);

 // 5. in operator : property exist check(key in object)
 console.log('name' in junhu);
 console.log('age' in junhu);
 console.log('random' in junhu);

 // 6. for..in vs for..of
// for (key in obj)
for(key in junhu){
  console.log(key);
}

// for (value of iterable)
const array = [1,2,4,5];
for(value of array){
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])
const user = { name : 'ellie', age : '20'}
const user2 = user;
//user2.name = 'jun';
console.log(user)

// old way
const user3 = {};
for(key in user){
  user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
user4.name = 'jun';
console.log(user4);
console.log(user);

// another example
const fruit1 = { color : 'red'}
const fruit2 = { color : 'blue', size : 'big'}
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);

'use strict';
/* Array */

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

console.log("------------------------")

// 3. Looping over an array
// print all fruits
// a. for
for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits){
  console.log(fruit);
}

// c. forEach
fruits.forEach(fruit => console.log(fruit));

// d. for in
for(let fruit in fruits){
  console.log(fruits[fruit]);
}

// 4. Addition, deletion, copy
// push : add an item to the end
fruits.push('딸기', '복숭아');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift('딸기', '레몬');
console.log(fruits);
// shift : remove an item to the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice : remove an item by index position
fruits.push('딸기', '복숭아', '레몬');
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1,'바나나', '포도');
console.log(fruits);

// combine two arrays
const fruits2 = ['브로컬리', '오렌지'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf : find the index // 있으면 해당인덱스, 없으면 -1 리턴
console.log(fruits.indexOf('사과'));

// includes : O : true / X : true
console.log(fruits.includes('사과'));

// lastIndexOf
console.log(fruits.lastIndexOf('사과'));

'use strict';
/* 1 ~ 10 Quiz */
// Q1. make a string out of an array (배열을 문자열로 변환)
{
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.join());
}

// Q2. make an array out of a string (문자열을 문자열배열로 변환)
{
const fruits = '사과, 레몬, 딸기, 바나나';
console.log(fruits.split(','));
}

// Q3. make this array look like this : [5, 4, 3, 2 ,1]
{
  const array = [1, 2, 3, 4, 5];
  //array.sort((a,b) => { return b - a });
  array.reverse();
  console.log(array);
}

// Q4. make new array without the first two elements(0, 1 index 제외)
{
  const array = [1,2,3,4,5];
  const result = array.slice(2, 5);
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score){
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 10),
  new Student('B', 28, false, 50),
  new Student('C', 30, true, 40),
  new Student('D', 40, false, 30),
  new Student('E', 18, true, 20),
];
// Q5. find a student with the score 90 (특정 찾기 : find)
const findStudent = students.find(student =>{
  return student.score === 50;
});

console.log(`50점을 맞은 학생은 ${findStudent.name}입니다.`);

// let findstu;
// for(let i = 0; i < students.length; i++){ 
//   if(students[i].score === 90){
//     findstu = i;
//   }
// }
// console.log(`${findstu}번째 학생이 90점을 맞았습니다.`);

// Q6. make an array of enrolled students(여러개 찾기 : filter)
{
  const enrolledStudent = students.filter(student => student.enrolled);
  console.log(enrolledStudent);
}

// Q7. make an array containing only the students' scores
// result should be : [45, 80, 90, 66, 88];
{
  // let studentScoreArr = [];
  // for(let i = 0; i < students.length; i++){
  //   studentScoreArr.push(students[i].score);
  // }
  // console.log(studentScoreArr);
  const studentScoreArr = students.map(student => student.score);
  console.log(studentScoreArr); 
}

// Q8. check if there is a student with the score lower than 50 (some < - > every)
{
  const studentScoreArr = students.some((student) => student.score < 40);
  console.log(studentScoreArr);
}

// Q9. compute student's average score
{
  // let sum = 0;
  // const len = students.length;
  // for(let student of students){
  //   sum += student.score;
  // }
  // console.log(sum / len);

  const result = students.reduce((prev, curr) => prev + curr.score, 0);
                                              // return되는 값이 prev로 전달
  console.log(result / students.length); // 평균
}

// Q10. make a string containing all the scores
// return should be : '10, 40, 50, 30 ,20'
{
const studentScoreArr = students
.map(student => student.score)
.join();
console.log(studentScoreArr);
}

// Bonus! do Q10 sorted in ascending order
// return should be : '10, 20, 30, 40 ,50'
{
const studentScoreArr = students
.map(student => student.score)
.sort((a,b) => a - b)
.join();
console.log(studentScoreArr); 
}
