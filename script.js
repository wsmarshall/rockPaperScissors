

function getComputerChoice() {
    let rawChoice = (Math.random() * 100);
    console.log("inside getComputerChoice, computer chooses: ", rawChoice);
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
        console.log("You win! Paper beats Rock!");
        return 1;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats Scissors!");
        return 1;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beats Paper!");
        return 1;
    }
    else if (playerSelection == computerSelection) {
        console.log("A tie! " + playerSelection + " meets " + computerSelection + "!");
        return 0;
    }
    else {
        console.log("You lose! "+ computerSelection + " beats " + playerSelection + "!");
        return 0;
    }

}

function game() {
    numWins = 0; //keeps track for best of 5

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Let's play rock, paper, scissors! Choose one of rock, paper, or scissors.");
        computerSelection = getComputerChoice();
        numWins += oneRound(playerSelection, computerSelection);
    }

    if (numWins > 2) {
        console.log("You won best out of five! " + numWins + ":" + (5-numWins));
    } else {
        console.log("You lost best out of five! " + numWins + ":" + (5-numWins));
    }

}
