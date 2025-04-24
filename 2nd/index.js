//score count
let humanScore = 0;
let computerScore = 0;

// When the computer generates number
function getComputerChoice(num, ) {
//  choose a number randomly that returns one string
var num = Math.random()
    if (num < 0.33) {
        return  'rock'
    } else if (num < 0.66) {
        return 'paper'
    } else if (num < 0.99) {
        return 'scissors'
    }

}





// ask the player for their input
    function getHumanChoice() {
        let answer
        answer = window.prompt('Enter rock, paper or scissors').toLowerCase()// when player types input it can be AnY size and still work

        if (answer === 'rock' || answer === 'paper' || answer ==='scissors') {
            return answer
        } 
        // refuse invalid input
        else if (answer !== 'rock' || answer !== 'paper' || answer !=='scissors') {
            return 'Invalid Input'
        }
        
        

    }



function playRound(getHumanChoice, getComputerChoice) {
// if value is < value print you win
if (getHumanChoice === 'rock' && getComputerChoice === 'scissors') {
    humanScore++
    humanScore.textContent = humanScore;
    console.log("player score: ", humanScore);
    console.log('Player wins, rocks crush scissors') 
    

} else if (getHumanChoice === 'paper' && getComputerChoice  === 'rock') {
    humanScore++
    humanScore.textContent = humanScore;
    console.log("player score: ", humanScore);
    console.log('Player wins, paper covers rocks')
    
} else if (getHumanChoice === 'scissors' && getComputerChoice  === 'paper') {
    humanScore++
    humanScore.textContent = humanScore;
    console.log("player score: ", humanScore);
    console.log('Player wins, scissors cut paper')
}
// if value = value its a tie
else if (getHumanChoice === 'paper' && getComputerChoice  === 'paper') {
    console.log('You tied, paper')
}else if (getHumanChoice === 'rock' && getComputerChoice  === 'rock') {
    console.log('You tied, rock')
}else if (getHumanChoice === 'scissors' && getComputerChoice === 'scissors') {
    console.log('You tied, scissors')
}

// if value is > value print you lose
else {
    computerScore++;
    computerScore.textContent = computerScore;
    console.log("computer score: ", computerScore);
    console.log('Computer wins')
    
}



}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection,)



 
// use above code in this block 
// call function 5 times


