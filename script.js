addEventListener('DOMContentLoaded', (event) => {
// Return either one of "rock" "paper" or "scissors" from the computer
function getComputerChoice () {
    // Use Math.random() to get either one of 0, 1 or 2
    let computerChoice;
    let index = Math.floor(Math.random() * 3);

    // Map index value to either of the given words
    if (index === 0) {
        computerChoice = "rock";
        return computerChoice;
    }
    else if (index === 1) {
        computerChoice = "paper";
        return computerChoice;
    }
    else {
        computerChoice = "scissors";
        return computerChoice;
    }
}

// Return either one of "rock" "paper" or "scissors" from the user
function getHumanChoice() {
    // Prompt user for an input of either "rock" "paper" or "scissors"
    let humanChoice = prompt("rock, paper or scissors?");
    return humanChoice;
}

// Initialize players score 
let humanScore = 0;
let computerScore = 0;

const results = document.createElement("div");
document.body.appendChild(results);

// Play a single round
function playRound(humanChoice, computerChoice) {

    // Make humanChoice case insensitive
    humanChoice = humanChoice.toLowerCase()

    const msg = document.createElement("p");

    // Check for a winner & return winner or draw
    if (humanChoice === computerChoice) {
        
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" || 
        humanChoice === "scissors" && computerChoice === "paper" || 
        humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
    }
    else {
        computerScore++;
    }

    results.textContent = `score: You ${humanScore} | Computer ${computerScore}`;
    results.textContent += `\nYou chose ${humanChoice}, Computer chose ${computerChoice}`;

    if (humanScore === 5) {
        results.textContent = `You win!`;
    }
    else if (computerScore === 5) {
        results.textContent = `You lose! Computer wins.`;
    }
}


const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");

btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";

btnRock.addEventListener('click', () => playRound("rock", getComputerChoice()));
btnPaper.addEventListener('click', () => playRound("paper", getComputerChoice()));
btnScissors.addEventListener('click', () => playRound("scissors", getComputerChoice()));

document.body.appendChild(btnRock);
document.body.appendChild(btnPaper);
document.body.appendChild(btnScissors);
});
