// Question 1
{
  // == all variable's TDZ starts here
  console.log(id);
  //
  console.log(username);
  let username = "sulistyann"; // == username variable's TDZ ends here
  //
  let age = 21; // == age variable's ends here
  console.log(age);
  //
  //
  let id = "v0xRO2"; // == id variable's ends here
  console.log(id);
}
// Accessing variable before it is initialized (let) caused ReferenceError

// Question 2
// Invoke hit() function before it is declared
hit("Ryan", "Alex", "Pickaxe");

function hit(player1, player2, weapon) {
  console.log(`${player1} try to hit ${player2} with ${weapon}`);
  // Invoke block() function before it is declared
  block(player2, player1);
}

function block(player1, player2) {
  console.log(`${player1} successfully blocked the attack from ${player2}`);
}
