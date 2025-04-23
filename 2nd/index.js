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

console.log(getComputerChoice())



// ask the player for their input
    function getHumanChoice() {
        let answer
        answer = window.prompt('Enter rock, paper or scissors').toLowerCase()

        if (answer === 'rock' || answer === 'paper' || answer ==='scissors') {
            return answer
        } 
        // refuse invalid input
        else if (answer !== 'rock' || answer !== 'paper' || answer !=='scissors') {
            return 'Invalid Input'
        }
        
        

    }

console.log(getHumanChoice())

function playRound(getHumanChoice, computerChoice) {
// when player types input it can be AnY size and still work
// if value is < value print you win
// if value is > value print you lose
// if value is < value print you win
// if value is > value print you lose
// if value is < value print you win
// if value is > value print you lose
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)

 
// use above code in this block 
// call function 5 times


