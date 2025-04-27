
 //score count
 let humanScore = 0;
 let computerScore = 0;

 // result element
 const result = document.getElementById('result');

 // listening for button clicks
document.getElementById('rock').addEventListener('click', () => handlePlayerChoice('rock'));
document.getElementById('paper').addEventListener('click', () => handlePlayerChoice('paper'));
document.getElementById('scissors').addEventListener('click', () => handlePlayerChoice('scissors'));

// Handle player choice
function handlePlayerChoice(humanSelection) {
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    // display current points each round played
    // if humanscore is 5 then display human won by amount
    // else if computerscore is 5 display you lost by this many points
    // reset scores to zero 
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;


    if (humanScore === 5) {
        result.textContent = `🏆 Player wins by ${humanScore - computerScore} points!`;
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        result.textContent = `💻 Computer wins by ${computerScore - humanScore} points!`;
        humanScore = 0;
        computerScore = 0;
    }
}


// When the computer generates number
function getComputerChoice() {
//  choose a number randomly that returns one string
const num = Math.random()
    if (num < 0.33) {
        return  'rock'
    } else if (num < 0.66) {
        return 'paper'
    } else {
        return 'scissors'
    }

}





// ask the player for their input
    function getHumanChoice() {
        
        let answer = window.prompt('Enter rock, paper or scissors').toLowerCase()// when player types input it can be AnY size and still work

        if (answer === 'rock' || answer === 'paper' || answer ==='scissors') {
            return answer
        } 
        // refuse invalid input
        else if (answer !== 'rock' || answer !== 'paper' || answer !=='scissors') {
            answer = window.prompt('Invalid Input')
            return answer.toLowerCase();
        }
        
        

    }



function playRound(getHumanChoice, getComputerChoice) {
// display result message every round
const result = document.getElementById('result')
let resultMessage = '';

// if value is < value print you win
if (getHumanChoice === 'rock' && getComputerChoice === 'scissors') {
    humanScore++
    resultMessage = 'Player wins, rocks crush scissors'
    

} else if (getHumanChoice === 'paper' && getComputerChoice  === 'rock') {
    humanScore++
    resultMessage = 'Player wins, paper covers rocks'
    
} else if (getHumanChoice === 'scissors' && getComputerChoice  === 'paper') {
    humanScore++
    resultMessage = 'Player wins, scissors cut paper'
}
// if value = value its a tie
else if (getHumanChoice === getComputerChoice) {
    resultMessage = 'You tied'
}

// if value is > value print you lose
else {
    computerScore++;
    resultMessage = 'Computer wins'
    
}

// display result after every game played
result.textContent = resultMessage;
result.style.display = 'block';
result.style.fontSize = '24px'




}






// declares playround function and scores from the global scope.
/*function playGame() {
    
    // these call on the prompt and the random num generator. 
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    // calls the playround function from above which logs score count to the console.
    playRound(humanSelection, computerSelection);

 console.log(computerSelection)
 console.log(humanSelection)
 console.log(humanScore)
 console.log(computerScore)

  
 
 
}*/
// call function 5 times


 // if humanscore is greater than computer score return player beat computer after 5 rounds.
 /*if (humanScore + computerScore === 5) {
    if (humanScore > computerScore) {
        console.log(`🏆 Player beat computer after a total of ${humanScore + computerScore} rounds.`);
    } else if (computerScore > humanScore) {
        console.log(`💻 Computer beat player after a total of ${humanScore + computerScore} rounds.`);
    } else {
        console.log(`🤝 It's a tie after ${humanScore + computerScore} rounds.`);
    }
}*/




