/**
 * Let us play a number guessing game.
 * You will ask user for a number between 1 to 10. Once user will enter a number, you will tell user if the entered number is lower or higher.
 * With this information, user will change the number and finally guess the right number. You also need to show the number of attempts made by users to rach to this right guess.
 */

// max number
// min number

// secret number is a random number between the min and max
// get the prommpt from the user as a guess
// Create a variable to store the number of attempts
// Write the logic to check if the guess and the secret number are same. If not continue a loop to ask again.
// Inside loop check if the guess is less than the secret or greater than, accordingly tell if the guess it low or high
// Give the option to play again

const MIN_NUMBER = 1;
const MAX_NUMBER = 10;

function startSecretNumberGame() {
  const secretNumber = Math.round(Math.random() * MAX_NUMBER);
  let userAttempts = 0;
  let userGuess = null;

  alert("Welcome to the Number Guessing Game!");

  while (userGuess !== secretNumber) {
    let userPrompt = prompt("Enter a number between 1-10!");
    userGuess = parseInt(userPrompt);

    if (isNaN(userGuess) || userGuess < MIN_NUMBER || userGuess > MAX_NUMBER) {
      userGuess = prompt("You can't pick a number outside of 1-10. Try again!");
      continue;
    }
    userAttempts++;

    if (userGuess > secretNumber) {
      alert("Your guess is too high. Try again!");
    } else if (userGuess < secretNumber) {
      alert("Your guess is too low. Try again!");
    } else {
      alert(`Congrats! You guessed the number in ${userAttempts} tries`);
      break;
    }
  }

  const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
  const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";
  if (playAgain === "yes") {
    startSecretNumberGame();
  } else {
    alert("Thanks for Playing! See you Next Time");
  }
}

startSecretNumberGame();
