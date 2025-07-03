function getComputerChoice(max) {
    let randomChoice = Math.floor(Math.random() * max);
    let computerChoice;
    if (randomChoice === 0) {
        computerChoice = "rock";
    }
    else if (randomChoice === 1) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

let humanScore;
let computerScore;

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

function playRound(humanSelection, computerSelection) {
    if (humanSelection === "rock" && computerSelection === "paper") {
        console.log("Human chose rock, computer chose paper! Paper covers Rock! You lose! :(");
        computerScore += 1;
    }
    else if (humanSelection === "rock" && computerSelection === "scissors") {
        console.log("Human chose rock, computer chose scissors! Rock crushes Scissors! You win!");
        humanScore += 1;
    }
    else if (humanSelection === "paper" && computerSelection === "rock") {
        console.log("Human chose paper, computer chose rock! Paper covers Rock! You win!");
        humanScore += 1;
    }
    else if (humanSelection === "paper" && computerSelection === "scissors") {
        console.log("Human chose paper, computer chose scissors! Scissors cut Paper! You lose! :(")
        computerScore += 1;
    }
    else if (humanSelection === "scissors" && computerSelection === "rock") {
        console.log("Human chose scissors, computer chose rock! Rock crushes Scissors! You lose! :(");
        computerScore += 1;
    }
    else if (humanSelection === "scissors" && computerSelection === "paper") {
        console.log("Human chose scissors, computer chose paper! Scissors cut Paper! You win!");
        humanScore += 1;
    }
    else if (humanSelection === computerSelection) {
        console.log("It's a tie!");
    }
}

function game() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; ++i) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(3);

        if (!humanSelection) {
            console.log("Skipping this round due to invalid input.");
            continue;
        }

        playRound(humanSelection, computerSelection);
    }

    console.log("Final Score -> Human: " + humanScore + ", Computer: " + computerScore);
}

game();