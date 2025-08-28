// Question 1
let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}
// Answer: It's a normal day.

// Question 2
let withdrawAmount = 1000;
if (withdrawAmount % 100 === 0) console.log("Withdrawal successful");
else console.log("Invalid amount");

// Question 3
let operand1 = 10;
let operand2 = 2;
let calculatorOperator = "*";

switch (calculatorOperator) {
  case "+":
    console.log(operand1 + operand2);
    break;
  case "-":
    console.log(operand1 - operand2);
    break;
  case "*":
    console.log(operand1 * operand2);
    break;
  case "/":
    console.log(operand1 / operand2);
    break;
  case "%":
    console.log(operand1 % operand2);
    break;
  default:
    console.log("Invalid input!");
}

// Question 4
let age = 19;
let ticketPrices;
if (age < 18) ticketPrices = 3;
else if (age >= 18 && age <= 60) ticketPrices = 10;
else ticketPrices = 8;
console.log(`Your ticket for the movie will cost $${ticketPrices}`);
