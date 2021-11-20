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

