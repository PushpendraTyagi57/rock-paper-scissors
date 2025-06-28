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
    if (humanChoice.toLowerCase() === "rock") {
        console.log("You chose rock!");
    }
    else if (humanChoice.toLowerCase() === "paper") {
        console.log("You chose paper!");
    }
    else {
        console.log("You chose scissors");
    }
}
console.log(getComputerChoice(3));
console.log(getHumanChoice());