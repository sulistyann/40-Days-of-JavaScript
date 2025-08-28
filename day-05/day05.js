// Question 1
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}

// Question 2
for (let i = 1; i <= 10; i++) {
  multiplyThree = 3 * i;
  console.log(`3 x ${i} = ${multiplyThree}`);
}

// Question 3
let sumOdd = 0;
let j = 1;
while (j < 500) {
  sumOdd += j;
  j += 2;
}
console.log(sumOdd);

// Question 4
for (let i = 0; i <= 20; i++) {
  if (i % 3 !== 0) console.log(i);
}

// Question 5
let numInput = 6789;
let numString = numInput.toString();
let numOutput = "";
let numLength = numString.length;
while (numLength > 0) {
  numOutput += numString[numLength - 1];
  numLength--;
}
console.log(numOutput);

let num = 6789;
let reversed = 0;
while (num > 0) {
  let eachDigit = num % 10;
  reversed = reversed * 10 + eachDigit;
  num = Math.floor(num / 10);
}
