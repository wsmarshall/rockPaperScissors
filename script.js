


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

function newRound(playerSelection = "rock", computerSelection = "rock") {

}

function game() {

}
