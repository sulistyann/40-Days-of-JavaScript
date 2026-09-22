// Question 1
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter();
counter();
// Output: 1 2

// Question 2
function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()());
// Output: 100

// Question 3
function setupButton() {
  let clickCount = 0;

  document.getElementById("myButton").addEventListener("click", function () {
    clickCount++;
    console.log(`Button clicked ${clickCount} times`);
  });
}

setupButton();

// Question 4
function createMultiplier(multiplier) {
  let num = 1;
  return function multiplyClosure() {
    return (num *= multiplier);
  };
}
const multiply = createMultiplier(3);
console.log(multiply());
console.log(multiply());

// Question 5
// Answer: The object remains in memory as long as the closure exits

// Question 6
function countFactory(initialCount) {
  let count = initialCount;

  return {
    increment: (amount) => {
      count += amount;
      console.log("Your current count is ", count);
    },
    decrement: (amount) => {
      count -= amount;
      console.log("Your current count is ", count);
    },
    reset: (amount) => {
      count = 0;
      console.log("Count has succesfully reset to ", count);
    },
  };
}
