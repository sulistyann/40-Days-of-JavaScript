// Question 1
function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}
console.log(celciusToFahrenheit(20));

// Question 2
function findMax(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
console.log(findMax(17, 81));

// Question 3
function isPalindrome(str) {
  let index = 0;
  let palindromeCheck = true;
  let strLength = str.length;
  while (strLength > str.length / 2) {
    if (str[index] === str[strLength - 1]) {
      index++;
      strLength--;
    } else {
      palindromeCheck = false;
      break;
    }
  }
  return palindromeCheck;
}
console.log(isPalindrome("level"));

// Question 4
function factorial(n) {
  if (n === 1) return n;
  return n * factorial(n - 1);
}
console.log(factorial(4));

// Question 5
function countVowels(str) {
  let count = 0;
  const vowels = ["a", "i", "u", "e", "o"];
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Antonio"));

// Question 6
function capitalizeWords(sentence) {
  let capitalizedSentence = sentence[0].toUpperCase();
  for (let i = 1; i < sentence.length; i++) {
    if (sentence[i - 1] === " ") {
      capitalizedSentence += sentence[i].toUpperCase();
    } else {
      capitalizedSentence += sentence[i];
    }
  }
  return capitalizedSentence;
}
console.log(capitalizeWords("the hand sanitizer was actually clear glue"));

// Question 7
(function (greeting) {
  console.log(`Hello ${greeting}!`);
})("Javascript");

// Question 8
function greet(name, message) {
  message(name);
}
let message = (name) => console.log("Good morning", name);
greet("Hafidz", message);
