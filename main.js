let choices = ["rock", "paper", "scissors"]; // Array com as opções / array with the options
let winners = []; // Array que armazena os vencedores de cada rodada e quantas vezes venceu. / Array that will keep the information of winners and how many times they won

function game() {
  // Função para iniciar o jogo / Start the Game function
  for (let i = 1; i <= 5; i++) {
    // Função de loop for, usada quando se tem um determinado numero de repetições você quer que repita ate sair do loop (usar o while para loops infinitos e o for quando você sabe o número de vezes que quer repetir)/ Function loop for , its used when you know how many times you want the game to repeat before break out of the loop (Use while when u want a infinite loop and for when u know how many times )
    playRound(i); // Função que inicia o round e armazena as escolhas, vencedores e log /Function that start the round and save the choice, winners and log from the matchs
  }
  logWins(); //Chama a função contendo os logs da partida / Call the function with the logs from the matchs
}

function playRound(round) {
  let playerSelection = playerChoice(); // Variavel que recebe a função e armazena o resultado dela / Variable that receive the function result
  let computerSelection = computerChoice();
  let winner = checkWinner(playerSelection, computerSelection); // Variavel que armazena a função que verifica o vencedor/ Function that check the winner of the matchs
  winners.push(winner); // Sempre que tiver um vencedor essa função vai coloca dentro da array winners/ Everytime there is a winner this function will push him to the empty array winners
  logRound(playerSelection, computerSelection, winner, round); // Função que trás os dados dentro dos parametros / Function that declares the parameters
}

function playerChoice() {
  //Função do codigo que determina a escolha do player / Function that calls the code for the player choice
  let input = prompt("Type Rock, Paper or Scissors");
  while (input == null) {
    // Se não escrever nada, um loop se inicia e pede para colocar as informações novamente./ While loop that checks if the input is empty and return the prompt
    input = prompt("Type Rock, Paper or Scissors");
  }
  input = input.toLowerCase(); // Transforma o texto em minusculo / Change the text to lower case ,ROck = rock
  let check = validateInput(input); // Função que vai validar a escolha do jogador / Function that will validete the player choice
  while (check == false) {
    // Se for falso, repete ate colocar rock paper ou scissor / If false, return the question till the player choice rock, paper or scissors
    input = prompt("Type Rock, Paper or Scissors correct.");
    while (input == null) {
      input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input; // Sem o retorno de input a variavel não armazena a escolha do jogador / without the return the variable will not save the player choice
}

function computerChoice() {
  // Computador escolhe aleatoriamente um item da array choices / Computer will random choice a item from the array choices
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  return choices.includes(choice); // Retorna a array se ela tiver a opção escolhida / returns the away if she have the chosen option
}

function checkWinner(choiceP, choiceC) {
  // Função que determina entre as escolhas dos jogadores para determinar quem vennceu o round / Function that determine the choices from players and declares the winner
  if (choiceP === choiceC) {
    // Função que determina que se as escolhas forem iguais, da empate. / function that determine if the choices are the same, its a tie.
    return "Tie!";
  } else if (
    (choiceP === "rock" && choiceC == "scissors") || // Compara a primeira escolha E se a segunda escolha for a determinada, entrega um  resultado .
    (choiceP === "paper" && choiceC == "rock") || // Compare the first choice and ( &&) the second choice and determine the result from the match.
    (choiceP === "scissors" && choiceC == "paper") // Ou ()||) é usado para que o codigo não fique muito grande e dificil compreensão / OR ( || ) are used to clean the code and make it easy to understand.
  ) {
    return "Player WIN!";
  } else {
    return "Computer WIN!";
  }
}

function logWins() {
  // Historico dos dados da partida / History from the results from the matchs
  let playerWins = winners.filter((item) => item == "Player WIN!"); // Se player ganhar, coloca o nome dele dentro da array winners.
  let computerWins = winners.filter((item) => item == "Computer WIN!"); // If computer win, push the string inside the array winners
  let tie = winners.filter((item) => item == "Tie!");
  console.log("Results:"); // Console log para ver se ta tudo certo
  console.log("Player Wins:", playerWins); // Console log to check if everything is working fine
  console.log("Computer Wins", computerWins);
  console.log("Tie!", tie);
}

function logRound(playerChoice, computerChoice, winner, round) {
  // Codigo para avaliar as escolhas e o que aconteceu na partida.
  console.log("Round", round); // Code to check what happens in the match and the choice from the players
  console.log("Player Chose", playerChoice);
  console.log("Computer Chose", computerChoice);
  console.log(winner, "Won the Round");
}

game(); // Começa o jogo / Start the game
