 //score count
 let humanScore = 0;
 let computerScore = 0;

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
// if value is < value print you win
if (getHumanChoice === 'rock' && getComputerChoice === 'scissors') {
    humanScore++
    humanScore = humanScore;
    console.log("player score: ", humanScore);
    console.log('Player wins, rocks crush scissors') 
    

} else if (getHumanChoice === 'paper' && getComputerChoice  === 'rock') {
    humanScore++
    humanScore = humanScore;
    console.log("player score: ", humanScore);
    console.log('Player wins, paper covers rocks')
    
} else if (getHumanChoice === 'scissors' && getComputerChoice  === 'paper') {
    humanScore++
    humanScore = humanScore;
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
    computerScore = computerScore;
    console.log("computer score: ", computerScore);
    console.log('Computer wins')
    
}



}
// declares playround function and scores from the global scope.
function playGame() {
    
    // these call on the prompt and the random num generator. 
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    // calls the playround function from above which logs score count to the console.
    playRound(humanSelection, computerSelection);

 console.log(computerSelection)
 console.log(humanSelection)
 console.log(humanScore)
 console.log(computerScore)

  
 
 
}
// call function 5 times
playGame()
playGame()
playGame()
playGame()
playGame()

 // if humanscore is greater than computer score return player beat computer after 5 rounds.
 if (humanScore + computerScore === 5) {
    if (humanScore > computerScore) {
        console.log(`🏆 Player beat computer after a total of ${humanScore + computerScore} rounds.`);
    } else if (computerScore > humanScore) {
        console.log(`💻 Computer beat player after a total of ${humanScore + computerScore} rounds.`);
    } else {
        console.log(`🤝 It's a tie after ${humanScore + computerScore} rounds.`);
    }
}




