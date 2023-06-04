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

//function startGame() {
//  let buttons = document.querySelectorAll("btn");
//   btn.addEventListener("click", printRock)
//  }

function playRound(playerSelection, computerSelection){
  const p = document.createElement('p')  
  const resultsDiv = document.querySelector('.resultDisplay')
  if (playerSelection === computerSelection) {
    p.innerText = `You tie! You both picked ${playerSelection}`
    resultsDiv.appendChild(p) //append the above div text to the resultsDiv
    return "You tie! " + playerSelection + " ties with " + computerSelection + "!"
  } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || 
  (playerSelection === "Scissors" && computerSelection === "Paper") ||
  (playerSelection === "Paper" && computerSelection === "Rock")
  )  {
    playerScore++
    p.innerText = "You win! " + playerSelection + " beats " + computerSelection + "!"
    resultsDiv.appendChild(p)
    return "You win! " + playerSelection + " beats " + computerSelection + "!";
  } else {
    computerScore++
    p.innerText = "You lose! " + computerSelection + " beats " + playerSelection + "!"
    resultsDiv.appendChild(p)
    return "You lose! " + computerSelection + " beats " + playerSelection + "!";
  }
}

//function game(){
  //for (let i = 0; i < 5; i++) {
    //let playerString  = prompt("Choose Rock, Paper, or Scissors","")
    //const playerSelection = playerString[0].toUpperCase() + playerString.slice(1).toLowerCase();
    //const computerSelection = getComputerChoice();
    //console.log(playRound(playerSelection,computerSelection));
//}
//}
//game();
console.log(document);

//make JS elements connect to corresponding HTML classes
let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector('.rock'); //remember to use .xx for class
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const resultsDiv = document.querySelector('.resultDisplay')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')

const checkWinner = (playerScore, computerScore) => {
  if (playerScore === 5) {
    const h2 = document.createElement('h2')
    h2.innerText = `Game Over, Player wins ${playerScore} to ${computerScore}!`
    resultsDiv.appendChild(h2)
  } 
  if (computerScore === 5) {
    const h2 = document.createElement('h2')
    h2.innerText = `Game Over, Computer wins ${computerScore} to ${playerScore}!`
    resultsDiv.appendChild(h2)
  }
}
  
rockButton.addEventListener('click', () => { //run fxn that also gets comp choice and run play round
  const computerSelection = getComputerChoice()
  const playerSelection = "Rock"
  console.log(playRound(playerSelection, computerSelection));
  playerScoreSpan.innerText = "Player Score = " + `${playerScore}` + "    "
  computerScoreSpan.innerText = "Computer Score = " + `${computerScore}`
  checkWinner(playerScore, computerScore)
})

paperButton.addEventListener('click', () => { 
  const computerSelection = getComputerChoice()
  const playerSelection = "Paper"
  console.log(playRound(playerSelection, computerSelection));
  playerScoreSpan.innerText = "Player Score = " + `${playerScore}` + "    "
  computerScoreSpan.innerText = "Computer Score = " + `${computerScore}`
  checkWinner(playerScore, computerScore)
})

scissorsButton.addEventListener('click', () => { 
  const computerSelection = getComputerChoice()
  const playerSelection = "Scissors"
  console.log(playRound(playerSelection, computerSelection));
  playerScoreSpan.innerText = "Player Score = " + `${playerScore}` + "    "
  computerScoreSpan.innerText = "Computer Score = " + `${computerScore}`
  checkWinner(playerScore, computerScore)
})

//console.log(btn);
//btn.addEventListener('click', printRock);
//function printRock(){
//  console.log('Rock')
//}

//5/28/23 RPS REVISITED Psuedocode below:
// X Create three buttons, one for each selection. 

// X Add an event listener to the buttons that call playRound function 
// X with the correct playerSelection every time a button is clicked. 
// X (you can keep the console.logs for this step)

//Add a div for displaying results and 
//change all of your console.logs into DOM methods.

//RPS beginning: PSEUDOCODE BELOW:
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

//asking help on TOP 5/31/23
//Project/Exercise: Rock, Paper, Scissors Revisited
//Lesson link: https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors#assignment
//Code: https://codepen.io/cevangel/pen/eYPwWEX?editors=1111
//Issue/problem: I'm on the step of 2, part 2 of "Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)"
//Currently I'm trying to do something simple before I tie the button function to 'play round.
//The prompt still pops up (I assume I need to remove "prompt" since the new input is clicking the button instead to start a round. ), the button gives off the error of:
//error javascript.js:39 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener') at javascript.js:39:9
//What I expected: I expected "rock" to show up in console when I click the rock button
//What I tried: in my chrome console, I console.log "btn" and it shows null, but I thought it I'm literally copy pasting it
// from an example, it should work as intented. What's trickier is that when I put it all on codepen, it works as intended