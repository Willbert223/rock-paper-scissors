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
    if (choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice 
    }else{
        return choice = "Invalid choice try again"
    }
   
}
console.log(getComputerChoice())
console.log(getHumanChoice())