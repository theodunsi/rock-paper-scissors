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

// Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// Play a single round
function playRound(humanChoice, computerChoice) {
    // Make humanChoice case insensitive
    humanChoice = humanChoice.toLowerCase()

    // Check for a winner
    if (humanChoice === computerChoice) {
        humanScore;
        computerScore;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1;
    }
    else {
        computerScore += 1;
    }

    //  Print out round result
    if (humanScore > computerScore) {
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
    }
    else if (computerScore > humanScore) {
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
    }
    else {
        console.log("Draw!")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
