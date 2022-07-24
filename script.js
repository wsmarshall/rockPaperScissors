let numPlayerWins = 0; //keeps track for first to 5 wins for player
let numComputerWins = 0; //keeps track for first to 5 wins for computer

let displayPlayerWins = document.querySelector('.player');
let displayComputerWins = document.querySelector('.computer'); 

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {oneRound('rock', getComputerChoice())});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {oneRound('paper', getComputerChoice())});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {oneRound('scissors', getComputerChoice())});

const updateLine = document.querySelector('#update');

function getComputerChoice() {
    let rawChoice = (Math.random() * 100);
    //console.log("inside getComputerChoice, computer chooses: ", rawChoice);
    if (rawChoice <=33){
        return "rock";
    }
    else if (rawChoice <= 66){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function oneRound(playerSelection = "rock", computerSelection = "rock") {
    playerSelection = playerSelection.toLowerCase(); //makes input case insensitive

    if (playerSelection == "paper" && computerSelection == "rock") {
        numPlayerWins += 1;
        updateLine.textContent = "You win! Paper beats Rock!";
        displayPlayerWins.textContent = numPlayerWins;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        numPlayerWins += 1;
        updateLine.textContent = "You win! Rock beats Scissors!";
        displayPlayerWins.textContent = numPlayerWins;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        numPlayerWins += 1;
        updateLine.textContent = "You win! Scissors beats Paper!";
        displayPlayerWins.textContent = numPlayerWins;
    }
    else if (playerSelection == computerSelection) {
        updateLine.textContent = "A tie! " + playerSelection + " meets " + computerSelection + "!";
    }
    else {
        console.log("You lose! "+ computerSelection + " beats " + playerSelection + "!");
        numComputerWins += 1;
        updateLine.textContent = "You Lose!"+ computerSelection + " beats " + playerSelection + "!";
        displayComputerWins.textContent = numComputerWins;
    }

    if (numPlayerWins >= 5 || numComputerWins >= 5){
        updateLine.textContent = "Game Over! First to five wins!";
    }

}
