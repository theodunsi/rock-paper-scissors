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
        return;
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




//Play a game of 5 rounds and announce winner
// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         // Get fresh user and computer choices 
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();

//         // Play a single round each iteration
//         let result = playRound(humanSelection, computerSelection);
        
//         // Check for return value and increment scores variables
//         if (result === "draw") {
//             humanScore += 0;
//             computerScore += 0;
//         }
//         else if (result === "human") {
//             humanScore += 1;
//         }
//         else if (result === "computer") {
//             computerScore += 1;
//         }
//     }

//     // Print out winner onto browser
//     if (humanScore > computerScore) {
//     alert("You win!");
//     }
//     else if (computerScore > humanScore) {
//     alert("You lose!");
//     }
//     else {
//     alert("Draw!")
//     } 
// }

// Start the game
// playGame();


// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         alert (i);
//     }
// }

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
// let i = 0;
// while (i < 3) {
//     alert(`number ${i}` );
//     i++;
// }

// let input;
// do {
//     input = prompt("Enter a number: ");
//     if (!input) break;
// }
// while (input < 100);

// function sumOfTripledEvens(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     // Step 1: If the element is an even number
//     if (array[i] % 2 === 0) {
//       // Step 2: Multiply this number by three
//       const tripleEvenNumber = array[i] * 3;

//       // Step 3: Add the new number to the total
//       sum += tripleEvenNumber;
//     }
//   }
//   return sum;
// }

// function camelize(str) {
//     let parts = str.split(-);
//     alert (parts); 
// }

//  parts = parts.charAt(0).toUpperCase() + parts.slice(1);
//     let combine = parts.join();