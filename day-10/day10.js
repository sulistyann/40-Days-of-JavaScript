// Question 1
let user = "Alice";
function outerNo1() {
  function innerNo1() {
    console.log(user);
  }
  let user = "Bob";
  innerNo1();
}
outerNo1();
// Answer Output: Bob

// Question 2
let total = 0;
function add(num) {
  total += num;
}
add(5);
add(10);
console.log(total);
// Answer: add() function modifies a variable outside itself (Side Effect)

function fixedAdd(total, num) {
  return total + num;
}
let fixedTotal = 0;
fixedTotal = fixedAdd(fixedTotal, 5);
fixedTotal = fixedAdd(fixedTotal, 10);
console.log(fixedTotal);

// Question 3
function calculate() {
  let distance = 10;
  function multiply() {
    console.log(distance * 2);
  }
  multiply();
}
calculate();

/* Question 4
/ No, you cannot access a variable that declared inside a loop from outside
It will return ReferenceError, because that variable has never been declared
in its outer scope. */

/* Question 5
/ Answer: It cannot access a variable from different function*/

// Question 6
console.log(a);
let a = 10;
// Output: ReferenceError, since a declared using let, a remains in TDZ

// Question 7
function showAge() {
  let age = 25;
  console.log(age);
}
console.log(age);
// B. Age is accessible only inside showAge because let isn't function-scoped

// Question 8
let message = "Hello";

function outerNo8() {
  let message = "Hi";

  function innerNo8() {
    console.log(message);
  }
  innerNo8();
}

outerNo8();
// Output: Hi because the nearest scope for message is the outer() function

// Question 9
let x = "Global";

function outerNo9() {
  let x = "Outer";

  function innerNo9() {
    let x = "Inner";
    console.log(x);
  }
  innerNo9();
}

outerNo9();
// Output: Inner because x is accessing the nearest scope

// Question 10
function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce();
reduce();
// Output: -1 -2, because reduce variable keeping the count alive
