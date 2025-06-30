function getComputerChoice(max) {
    let randomChoice = Math.floor(Math.random() * max);
    let computerChoice;
    if (randomChoice === 0) {
        computerChoice = "Rock";
    }
    else if (randomChoice === 1) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Choose: 'Rock', 'Paper' or 'Scissors'");
    let humanChoiceMain;
    if (humanChoice.toLowerCase() === "rock") {
        humanChoiceMain = "rock";
    }
    else if (humanChoice.toLowerCase() === "paper") {
        humanChoiceMain = "paper";
    }
    else if (humanChoice.toLowerCase() === "scissors") {
        humanChoiceMain = "scissors";
    }
    else {
        console.log("Wrong Choice, Try Again Later!");
    }
    return humanChoiceMain;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    if (humanSelection === "rock" && computerSelection === "Paper")
        console.log("Human chose rock, computer chose paper! Paper covers Rock! You lose! :(");
    if (humanSelection === "rock" && computerSelection === "Scissors")
        console.log("Human chose rock, computer chose scissors! Rock crushes Scissors! You win!");
    if (humanSelection === "paper" && computerSelection === "Rock")
        console.log("Human chose paper, computer chose rock! Paper covers Rock! You win!");
    if (humanSelection === "paper" && computerSelection === "Scissors")
        console.log("Human chose paper, computer chose scissors! Scissors cut Paper! You lose! :(")
    if (humanSelection === "scissors" && computerSelection === "Rock")
        console.log("Human chose scissors, computer chose rock! Rock crushes Scissors! You lose! :(");
    if (humanSelection === "scissors" && computerSelection === "Paper")
        console.log("Human chose scissors, computer chose paper! Scissors cut Paper! You win!");
    if (humanSelection === computerSelection)
        console.log("It's a tie!");
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(3);

playRound(humanSelection, computerSelection);

