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

    // Check for a winner & return winner 
    if (humanChoice === computerChoice) {
        return "draw";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
        return "human";
    }
    else {
        return "computer";
    }
}

//Play a game of 5 rounds and announce winner
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        // Get fresh user and computer choices 
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        // Play a single round each iteration
        let result = playRound(humanSelection, computerSelection);
        
        // Check for return value and increment scores variables
        if (result === "draw") {
            humanScore += 0;
            computerScore += 0;
        }
        else if (result === "human") {
            humanScore += 1;
        }
        else if (result === "computer") {
            computerScore += 1;
        }
    }

    // Print out winner onto browser
    if (humanScore > computerScore) {
    alert("You win!");
    }
    else if (computerScore > humanScore) {
    alert("You lose!");
    }
    else {
    alert("Draw!")
    } 
}

// Start the game
playGame();



