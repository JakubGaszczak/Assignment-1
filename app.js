const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const result = document.querySelector(".result");
const score = document.querySelector(".score");


let playerPoints = 0;
let computerPoints = 0;

const computerPlay = () => {
    
    const randomMove = Math.floor(Math.random() * 3);
    
    if (randomMove == 0) return "rock";
    if (randomMove == 1) return "paper";
    if (randomMove == 2) return "scissors";
        
}

const playRound = (playerSelection, computerSelection) => {
    
    if (computerSelection === playerSelection) {
        // result.textContent = "REMIS"
        result.textContent = "remis";
    }  
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
            playerPoints++;
            // result.textContent = "You win"
            result.textContent = "you win";
    }  
    else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")) {
            computerPoints++;
            // result.textContent = "You lost"
            result.textContent = "you lost";
    }
    winner(computerPoints, playerPoints);
            
}
  
const winner = (compPoints, plaPoints) => {

    if (compPoints >= 5) {
        result.textContent = "NIESTETY PRZEGRAŁEŚ";
        computerPoints = 0;
        playerPoints = 0;
    }
     if (plaPoints >= 5) {
        result.textContent = "EASY WINEK";
        computerPoints = 0;
        playerPoints = 0;
    }

}

rockBtn.addEventListener("click", () => {
    playerSelection = "rock";
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    score.textContent = `Komputer: ${computerPoints} Twój: ${playerPoints}`;
});


paperBtn.addEventListener("click", () => {
    playerSelection = "paper";
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    score.textContent = `Komputer: ${computerPoints} Twój: ${playerPoints}`;
});


scissorsBtn.addEventListener("click", () => {
    playerSelection = "scissors";
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    score.textContent = `Komputer: ${computerPoints} Twój: ${playerPoints}`;
});













