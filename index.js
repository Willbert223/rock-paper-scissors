document.getElementById('rock').addEventListener('click', () => {
    const humanSelection = 'rock';
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});

document.getElementById('paper').addEventListener('click', () => {
    const humanSelection = 'paper';
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});

document.getElementById('scissors').addEventListener('click', () => {
    const humanSelection = 'scissors';
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});



let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    
    const randomNumber = Math.random();

    if(randomNumber < 0.33){
        return "rock";
    }else if (randomNumber < 0.66){
        return "paper";
    }else{
        return "scissors";
    }

}
function getHumanChoice(){
    let choice =  window.prompt("Enter rock, paper or scissors").toLowerCase();
    // code that stops me from accepting other answers and any capitilization
    while(true){
        if (choice === "rock" || choice === "paper" || choice === "scissors"){
            return choice; 
        }else{
            choice = window.prompt("Invalid choice try again");
        }
       
    }
}

function playRound(humanChoice, computerChoice){
    // displays the result of every round
    const resultText = document.getElementById('resultText');
    let resultMessage = '';
    // conditions to compare choices and what console will log
    if(humanChoice === "rock" && computerChoice === "scissors"){
        resultMessage = "You Win!"
        humanScore++;
    } else if(humanChoice === "scissors" && computerChoice === "paper"){
        resultMessage = "You Win!"
        humanScore++;
    } else if(humanChoice === "paper" && computerChoice === "rock"){
       resultMessage = "You Win!"
        humanScore++;
    } else if(humanChoice === computerChoice){
        resultMessage = "It's A Tie!";
    } else{
        resultMessage = "You lose!";
        computerScore++;
    }
    // display result
    resultText.textContent = resultMessage;
    resultText.style.display = 'block';
    resultText.style.fontSize = '24px'

}
function playGame(){
    //code that turns all choices as arguments
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);//




console.log(computerSelection)
console.log(humanSelection)
console.log(humanScore)
console.log(computerScore)
}


