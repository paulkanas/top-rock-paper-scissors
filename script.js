const computerChoice = getComputerChoice();
let playerChoice;
let yourScore = Number(0);
let computerScore = Number(0);

function getComputerChoice() {
    var values = ["Rock", "Paper", "Scissors"],
        computerSelection = values[Math.floor(Math.random() * values.length)];
        return computerSelection;
}

function getPlayerChoice() {
    playerSelection = prompt("Rock, paper or scissors?", "");
    toLower = playerSelection.toLowerCase();
    Capitalised = toLower.substring(0, 1).toUpperCase() + toLower.substring(1);
    return Capitalised;

}

function playRound(player, computer) {
    if (player === computer) {
        return "It's a tie. No one wins"
    } else if (player === "Rock" && computer === "Paper") {
        computerScore++;
        return "Rock loses to paper. You lose!";
    } else if (player === "Rock" && computer === "Scissors") { 
        yourScore++;
        return "Rock beats scissors. You win!";
    } else if (player === "Scissors" && computer === "Paper") {
        yourScore++;
        return "Scissors beats paper. You win!";
    } else if (player === "Scissors" && computer === "Rock") {
        computerScore++;
        return "Scissors loses to rock. You lose!";
    } else if (player === "Paper" && computer === "Scissors") {
        computerScore++;
        return "Paper loses to scissors. You lose!";
    } else if (player === "Paper" && computer === "Rock") {
        yourScore++;
        return "Paper beats rock. You win!";
    } else {
        return "Nothing to show";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
        console.log(yourScore, computerScore);

    }
}



//console.log(playerChoice);
//console.log(computerChoice);

//console.log(playRound(playerChoice, computerChoice))