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
