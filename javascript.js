//function generates respone rock paper or scissors 
function generateChoice() {
    const randomNum = Math.random();  // Get a random number between 0 and 1

    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(generateChoice());  // Test the function
//fucntion promts the user to enter text. only accepts rock paper or scissors as an answer in any capital like Rock or ROCK
function getUserChoice() {
    let userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();

    while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        userChoice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }

    return userChoice;
}

console.log(getUserChoice());  // Test the function
// variables that hold player and computer scores starting at value of zero.
let playerScore = 0;
let computerScore = 0;

console.log("Player score:", playerScore);
console.log("Computer score:", computerScore);
// fucntion takes choice from player and computer as arguments and increments the round winners score and then accounces winner or loser for the player
let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        console.log("You win this round!");
    } else {
        computerScore++;
        console.log("You lose this round!");
    }

    console.log("Player score:", playerScore);
    console.log("Computer score:", computerScore);
}

// Example usage:
playRound("rock", "scissors");  // Test the function with an example round
