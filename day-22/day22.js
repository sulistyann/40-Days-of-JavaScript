// Question 1
function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function thankUser() {
  console.log(`Thank you for coming!`);
}

greet("Apis", thankUser);

// Question 2
function calculator(a, b, operationCallback) {
  // Complete this function
  return operationCallback(a, b);
}

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

console.log(calculator(5, 3, add)); // 8
console.log(calculator(5, 3, subtract)); // 2
console.log(calculator(5, 3, multiply)); // 15
console.log(calculator(10, 2, divide)); // 5

// Question 3
function delayedMessage(message, delay, callback) {
  // Your code here
  callback();
  setTimeout(() => {
    console.log(message);
  }, delay);
}

delayedMessage("Task complete", 2000, () => console.log("Callback Fired!"));

// Question 4
function filterNumbers(arr, conditionCallback) {
  // Use loop and callback to return filtered array
  let result = arr.filter(conditionCallback);
  console.log(result);
}

filterNumbers([1, 2, 3, 4], (n) => n > 2); // should return [3, 4]

// Question 5
function task1(callback) {
  console.log("Task 1 done");
  callback();
}
function task2(callback) {
  console.log("Task 2 done");
  callback();
}
function task3() {
  console.log("Task 3 done");
}

// Call them in sequence using nested callbacks
task1(function () {
  console.log("First anonymous callback!");
  task2(function () {
    console.log("Second anonymous callback!");
    task3();
  });
});
