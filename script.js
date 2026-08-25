
// Fonction choix Ordinateur //

function getComputerChoice() {
    let computerChoice
    let i = Math.floor(Math.random() * 3);
    if (i === 0) {computerChoice="paper"}
    else if (i === 1) {computerChoice="rock"}
    else {computerChoice="scissors"};
    return computerChoice;
}

// Fonction Match //

function playRound(humanChoice, computerChoice) {


    if (humanChoice === computerChoice) { roundResult= "Egalite!";}
    else if (humanChoice === "paper") { 
        if (computerChoice === "rock") { humanScore = humanScore + 1; roundResult="Humain gagne!";}
        else { computerScore = computerScore + 1; roundResult="Ordi gagne!";}
    }
    else if (humanChoice === "rock") { 
        if (computerChoice === "scissors") { humanScore = humanScore + 1; roundResult="Humain gagne!";}
        else { computerScore = computerScore + 1; roundResult="Ordi gagne!";}
    }
    else {
        if (computerChoice === "paper") { humanScore = humanScore + 1; roundResult="Humain gagne!";}
        else { computerScore = computerScore + 1; roundResult="Ordi gagne!";}
    }
}


// Initialisation //

let humanScore = 0;
let computerScore = 0;
let humanSelection = "";
let computerSelection = "";
let roundResult = "";

// Fonction Jeu //

function playGame() {
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

const core = document.querySelector("#core"); 
const roundResult1 = document.createElement("p");
roundResult1.classList.add("roundResult");
roundResult1.textContent = "Humain dit: " + humanSelection + " / Ordi dit: " + computerSelection + " => " + roundResult +
" => Score: Humain = " + humanScore + "/ Ordi = " + computerScore ;
core.append(roundResult1);

if(humanScore === 5) {
    const core = document.querySelector("#core"); 
const endOfGame = document.createElement("h1");
endOfGame.classList.add("endOfGame");
endOfGame.textContent = "FIN DE PARTIE => HUMAIN GAGNE!";
core.append(endOfGame);}

else if(computerScore === 5) { 
    const core = document.querySelector("#core"); 
const endOfGame = document.createElement("h1");
endOfGame.classList.add("endOfGame");
endOfGame.textContent = "FIN DE PARTIE => ORDI GAGNE!";
core.append(endOfGame);}
else {}

}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {humanSelection = "rock"; playGame();});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {humanSelection = "paper"; playGame();});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {humanSelection = "scissors"; playGame();});



//Fin de Partie//



