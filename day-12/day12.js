// Question 1
const user = { username: "Alex", age: undefined };
console.log(user.age ?? "Not provided");
// Answer: Not provided, because the left value is undefined so it will return the right value

// Question 2
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
// Answer: obj.a cannot be changed since it freezed

// Question 3
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};
// Object Destructuring
const {
  name,
  company: {
    name: companyName,
    location: { city },
  },
} = person;
console.log(`My name is ${name} and I work in ${companyName} based on ${city}`);

// Question 4
function createStudentDetails(name, age, grades) {
  return {
    name,
    age,
    grades,
  };
}

function calculateAverageStudentsGrade(students) {
  let totalGrade = 0;
  for (let i = 0; i < students.length; i++) {
    totalGrade += students[i].grades;
  }
  return totalGrade / students.length;
}

const student1 = createStudentDetails("Budi", 19, 78);
const student2 = createStudentDetails("Aldi", 20, 91);
const students = [student1, student2];
console.log(calculateAverageStudentsGrade(students));

// Question 5
function createBook(name, genre, stock) {
  return {
    name,
    genre,
    stock,
    checkAvailability() {
      if (stock <= 0) console.log(`The ${name} book is currently unavailable`);
      else console.log(`The ${name} book is ready!`);
    },
    restockBook(amount) {
      stock += amount;
      console.log(`Successfully added ${amount} new ${name} book`);
    },
  };
}

const book1 = createBook("Narnia", "Fiction", 2);
const book2 = createBook("Learn C++", "Education", 0);
book2.checkAvailability();
book2.restockBook(3);
book2.checkAvailability();

// Question 6 Object.keys() vs Object.entries()
// Object.keys() return all the key from an object in an array
// Object.entries() return an array contains each key-value pair in 1 array

// Question 7 Check if an object has a certain property
/* Answer: Use for ... in, because only accessing the key could return false
  meanwhile the object has the certain property but with undefined value */

// Question 8
const personNo8 = { name: "John" };
const newPerson = personNo8;
newPerson.name = "Doe";
console.log(personNo8.name);
// Output: Doe, because newPerson are referencing to the same object as personNo8

// Question 9 Best Way to deeply copy a nested object
// Use structuredClone because
const person1 = {
  id: 1,
  name: { first: "Tamara", last: "Dai" },
};
const person2 = structuredClone(person1);
person2.id = 2;
person2.name.last = "Kazuchi";

console.log(person1);
console.log(person2);

// Question 10
const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];

for (let { name, address, age } of users) {
  console.log(
    `My name is ${name}. I'm ${age} years old and I live in ${address}`,
  );
}
