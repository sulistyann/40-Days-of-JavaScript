// Question 1
// Answered in Notion tracker

// Question 2 (Fix it so the output is Hello 'name')
const userNo2 = {
  name: "tapaScript",
  // greet: () => {
  //   console.log(`Hello, ${this.name}!`);
  // },
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

userNo2.greet();
// Arrow function on standalone function will return globalThis since object never create scope

// Question 3 (Fix it so the output is Hello 'name')
const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

// const greetFn = obj.greet;
// greetFn();
obj.greet();

// Question 4 (Fix it so the output is Hello 'name')
const userNo4 = {
  name: "Alex",
  greet: function () {
    // function inner() {
    //   console.log(`Hello, ${this.name}!`);
    // }
    // inner();
    return () => console.log(`Hello, ${this.name}!`);
  },
};

const greetUser = userNo4.greet();
greetUser();

// Question 5
function Sports(name, numberOfPlayers) {
  this.name = name;
  this.numberOfPlayers = numberOfPlayers;
}

const football = new Sports("Football", 11);
const futsal = new Sports("Futsal", 5);
console.log(football);
console.log(futsal);

// Question 6 (attach car1 describe() method to car2)
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

car1.describe();
car1.describe.call(car2); // use call()
const describeOtherCar = car1.describe.bind(car2); // use bind()
if (car2.brand === "BMW") describeOtherCar();

// Question 7
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello(); // refer to the object
person.sayHelloArrow(); // refer to global
// Answer: "Charlie" and ""
