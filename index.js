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
    return window.prompt("Enter rock, paper or scissors")

   
}
console.log(getComputerChoice())
console.log(getHumanChoice())