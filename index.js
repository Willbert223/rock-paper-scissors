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

    // conditions to compare choices and what console will log
    if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win!");
        humanScore++;
    } else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You won!");
        humanScore++;
    } else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("You Win!");
        humanScore++;
    } else if(humanChoice === computerChoice){
        console.log("It's A Tie!");
    } else{
        console.log("You lose!");
        computerScore++;
    }

}
//code that turns all choices as arguments
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);//


console.log(computerSelection)
console.log(humanSelection)
console.log(humanScore)
console.log(computerScore)