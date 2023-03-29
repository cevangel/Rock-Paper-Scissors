function getComputerChoice(){  
  switch(Math.floor(Math.random() * 3) + 1) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
      break;
    }
  }

function playRound(playerSelection, computerSelection){
  if (playerSelection === computerSelection) {
    return "You tie! " + playerSelection + " ties with " + computerSelection + "!"
  } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || 
  (playerSelection === "Scissors" && computerSelection === "Paper") ||
  (playerSelection === "Paper" && computerSelection === "Rock")
  )  {
    return "You win! " + playerSelection + " beats " + computerSelection + "!";
  } else {
    return "You lose! " + computerSelection + " beats " + playerSelection + "!";
  }
}

function game(){
  for (let i = 0; i < 5; i++) {
    let playerString  = prompt("Choose Rock, Paper, or Scissors","")
    const playerSelection = playerString[0].toUpperCase() + playerString.slice(1).toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection,computerSelection));
  }
}
game();



//PSEUDOCODE BELOW:
//1. getComputerChoice
  //Math.floor(Math.random() * 3) + 1;
  //if 1 then CC is Rock
  //2 '' Paper
  //3 '' Scissors
//2. Get playerSelection: prompt user "choose Rock paper or scissors"
  //use prompt()
  //make case insensitive
//3. function playRound(playerSelection, computerSelection){}
  //switch statement of the following 
    // (table of computer choices vs player, and winner)
    // PS: R P S R P S R P S
    // CC: R R R P P P S S S
    //  W: T W L L T W W L T
    //sample string to declare winner: 
    //"You Lose! Paper beats Rock
    //SWITCH STATEMENT DOES  NOT WORK, IF/ELSE BETTER
//4. function game()
    //simply function playRound done 5 times?
    //use console.log() to display the results of each round and winner in the end