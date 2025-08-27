// Question 1
let number = 14;
console.log(number % 2 == 0 ? "Even" : "Odd");

// Question 2
let age = 17;
console.log(age > 18 ? "Eligible" : "Not Eligible");

// Question 3
const monthlySalary = 12300;
const annualSalary = monthlySalary * 12 * 1.2;
console.log(`You get ${annualSalary} per annum as CTC`);

// Question 4
let color = "green";
console.log(color.toLowerCase() === "red" ? "STOP" : "GO");

// Question 5
let units = 8;
let monthlyElectricityBills = units * 150;
let annualElectricityBills = monthlyElectricityBills * 12 * 0.8;
console.log(`Your annual electricity costs ${annualElectricityBills}.`);

// Question 6
let year = 2025;
console.log(year % 4 !== 0 ? "It is not a leap year" : "It is a leap year");

// Question 7
let p = 12;
let q = 10;
let r = 71;
if (p > q && p > r) console.log(p);
else if (q > p && q > r) console.log(q);
else console.log(r);

// Question 8
let count = 5;
console.log(count << 1);
