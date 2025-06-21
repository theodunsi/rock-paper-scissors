// Return either one of "rock" "paper" or "scissors" 
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
        return computerChoice
    }
}

function getHumanChoice() {
    // Prompt user for an input of either "rock" "paper" or "scissors"
    let humanChoice = prompt("rock, paper or scissors?");
    return humanChoice;
}

console.log(getHumanChoice());