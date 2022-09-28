let yourScore = Number(0);
let computerScore = Number(0);

function getComputerChoice() {
    var values = ["Rock", "Paper", "Scissors"],
        computerSelection = values[Math.floor(Math.random() * values.length)];
        return computerSelection;
}

function getplayerOneChoice() {
    promptInput = prompt("Rock, paper or scissors?", "");
    toLower = promptInput.toLowerCase();
    playerOneChoice = toLower.substring(0, 1).toUpperCase() + toLower.substring(1);
    return playerOneChoice;

}

function playRound(playerOne, playerTwo) {
    console.log("You chose: " + playerOneChoice);
    console.log("The computer chose: " + playerTwo);

    if (playerOne === playerTwo) {
        return "It's a tie. No one wins"
    } else if (playerOne === "Rock" && playerTwo === "Paper") {
        computerScore++;
        return "Rock loses to paper. You lose!";
    } else if (playerOne === "Rock" && playerTwo === "Scissors") { 
        yourScore++;
        return "Rock beats scissors. You win!";
    } else if (playerOne === "Scissors" && playerTwo === "Paper") {
        yourScore++;
        return "Scissors beats paper. You win!";
    } else if (playerOne === "Scissors" && playerTwo === "Rock") {
        computerScore++;
        return "Scissors loses to rock. You lose!";
    } else if (playerOne === "Paper" && playerTwo === "Scissors") {
        computerScore++;
        return "Paper loses to scissors. You lose!";
    } else if (playerOne === "Paper" && playerTwo === "Rock") {
        yourScore++;
        return "Paper beats rock. You win!";
    } else {
        return "Please choose either 'rock', 'paper', or 'scissors'";
    }
}

function playSeries() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getplayerOneChoice(), getComputerChoice()));
        console.log("Your score is: " + yourScore, "The computer's score is: " + computerScore);
        console.log("")
 } if (yourScore > computerScore) {
    return "You scored higher than the computer. You win!"
 } else if (yourScore === computerScore) {
    return "You and the computer scored the same. It's a tie!"
 } else {
    return "The computer scored higher than you. You lose! Good say sir!"
 }
}



//console.log(playerOneChoice);
//console.log(computerChoice);

//console.log(playRound(playerOneChoice, computerChoice))