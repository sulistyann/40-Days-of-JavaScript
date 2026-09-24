// Question 1
try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  console.log("An error occurred:", error.name);
}
// Answer: ReferenceError, since p is not defined

// Question 2
function processPayment(amount) {
  let balance = 500;
  if (amount <= 0) throw new Error("Only accept positive number");
  if (amount > balance) {
    throw new Error("The amount you input exceeds your balance");
  }
  balance -= amount;
  return `Your current remaining balance is ${balance}`;
}

try {
  const message = processPayment(200);
  console.log(message);
} catch (error) {
  console.error("Cannot process request:", error.message);
}

// Question 3
function UserError(message) {
  this.name = "UserError";
  this.message = message;
}

function PaymentError(message) {
  this.name = "PaymentError";
  this.message = message;
}

function ServerError(message) {
  this.name = "ServerError";
  this.message = message;
}

function EmailError(message) {
  this.name = "EmailError";
  this.message = message;
}

// Question 4
function fetchData(url) {
  if (url.slice(0, 5) !== "https") throw new Error("Invalid URL");
  return "Your fetch request has been successful";
}

try {
  const message = fetchData("https://github.com/tapascript");
  console.log(message);
} catch (error) {
  console.error("Request denied:", error.message);
}

// Question 5
function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message;
}

function validateUser(userInput) {
  let errors = [];
  try {
    if (!userInput.username)
      errors.push(new ValidationError("Username cannot be empty"));
    if (userInput.age < 0)
      errors.push(new ValidationError("Age must be a positive number"));
    throw errors;
  } catch (errors) {
    for (let i = 0; i < errors.length; i++) {
      console.log(errors[i]);
    }
  }
}

const userInput = { username: "", age: -2 };
validateUser(userInput);

// Question 6
function readFile(filePath) {
  let fileOpened = false;
  try {
    console.log(`Opening file: ${filePath}`);

    if (filePath.split(".")[1] !== "txt") {
      throw new Error("File not found");
    }

    fileOpened = true;
    console.log(`Reading file: ${filePath}`);
  } catch (error) {
    console.error("Invalid request:", error.message);
  } finally {
    if (fileOpened) {
      console.log(`Cleanup: Closing the ${filePath} file`);
      fileOpened = false;
    }
  }
}

readFile("document.txt");
readFile("example.jpg");

// Question 7
function parseJSON(str) {
  try {
    JSON.parse(str);
  } catch (error) {
    console.error("Invalid JSON:", error.message);
  }
}

parseJSON("");

/* Question 8 (What is the purpose of throw in JavaScript?)
Answer : It stops the execution of the current function/block and creates new error manually */

/* Question 9 (What does the finally block do in a try...catch statement?)
Answer: Runs only if an error occurs  */
