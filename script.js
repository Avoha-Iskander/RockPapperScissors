
// Test //

console.log("paper, rock, scissors!")

// Fonction choix Ordinateur //

function getComputerChoice() {
    let computerChoice
    let i = Math.floor(Math.random() * 3);
    if (i === 0) {computerChoice="paper"}
    else if (i === 1) {computerChoice="rock"}
    else {computerChoice="scissors"};
    return computerChoice;
}

// Fonction choix Humain //

function getHumanChoice() {
    let message = "Choose Rock, Paper or Scissors";
    let humanChoiceTemp = prompt(message);
    let humanChoice = humanChoiceTemp.toLowerCase();
    return humanChoice;
}

// Fonction Match //



function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) { console.log("Egalite!");}
    else if (humanChoice === "paper") { 
        if (computerChoice === "rock") { humanScore = humanScore + 1; console.log("Humain gagne!");}
        else { computerScore = computerScore + 1; console.log("Ordi gagne!");}
    }
    else if (humanChoice === "rock") { 
        if (computerChoice === "scissors") { humanScore = humanScore + 1; console.log("Humain gagne!");}
        else { computerScore = computerScore + 1; console.log("Ordi gagne!");}
    }
    else {
        if (computerChoice === "paper") { humanScore = humanScore + 1; console.log("Humain gagne!");}
        else { computerScore = computerScore + 1; console.log("Ordi gagne!");}
    }
}


// Fonction Jeu //

let humanScore = 0;
let computerScore = 0;
let humanSelection = "";
let computerSelection = "";

function playGame() {
    for (let i = 1; i <= 5 ; i ++) {
 
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

console.log("Humain dit: " + humanSelection);
console.log("Ordi dit: " + computerSelection);

playRound(humanSelection, computerSelection);

console.log("Score: Humain = " + humanScore + "/ Ordi = " + computerScore);

}}

playGame();

if(humanScore === computerScore) { console.log("Fin de partie: Egalite!");}
else if(humanScore > computerScore) { console.log("Fin de partie: Humain gagne!");}
else {console.log("Fin de partie: Ordi gagne!");};