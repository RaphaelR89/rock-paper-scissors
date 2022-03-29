let choices = ["rock", "paper", "scissors"];
let winners = []

function game() {
  for (let i = 1; i <= 5 ;i++) {
    playRound(i);
  }
  logWins()
}

function playRound(round) {
  let playerSelection = playerChoice();
  let computerSelection = computerChoice();
  let winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner)
  logRound(playerSelection,computerSelection, winner, round )
}

function playerChoice() {
  let input = prompt("Type Rock, Paper or Scissors");
  while (input == null) {
    input = prompt("Type Rock, Paper or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt("Type Rock, Paper or Scissors correct.");
    while (input == null) {
      input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie!";
  } else if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC == "paper")
  ) {
    return "Player WIN!";
  } else {
    return "Computer WIN!";
  }
}

function logWins() {
let playerWins = winners.filter((item) => item == "Player WIN!")
let computerWins = winners.filter((item) => item == "Computer WIN!");
let tie = winners.filter((item) => item == "Tie!");
console.log('Results:')
console.log('Player Wins:', playerWins)
console.log('Computer Wins', computerWins)
console.log('Tie!', tie)
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log('Round', round)
    console.log('Player Chose', playerChoice)
    console.log('Computer Chose', computerChoice)
    console.log(winner, 'Won the Round')
}

game()
