
const scores = document.querySelector('#scores');
const para = document.createElement('p');
const para2 = document.createElement('p');
const para3 = document.createElement('p');
const youChose = document.createElement('p');
const theyChose = document.createElement('p');
const resultPara = document.createElement ('p');

let yourScore = Number(0);
let computerScore = Number(0);

const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playRound(button.textContent, getComputerChoice())
      para2.textContent = "The computer's score is " + computerScore + ".";
      para.textContent = "Your score is " + yourScore + ".";

      if (yourScore >= 5) {
        para3.textContent = "You scored 5! You win the series!";
        setGameOver();
      } else if (computerScore >= 5) {
        para3.textContent = "The computer scored 5! The computer wins the series!";
        setGameOver();
      } else {
        para3.textContent = "First to 5 wins!";
      }
    });
  });

function disableBtn() {
    var elems = document.getElementsByClassName('button');
    for (var i=0;i<elems.length;i+=1){
      elems[i].style.display = 'none';
    }
}

function enableBtn() {
    var elems = document.getElementsByClassName('button');
    for (var i=0;i<elems.length;i+=1){
      elems[i].style.display = 'initial';
    }
}


para3.textContent = "First to 5 wins!";
youChose.textContent = "You chose: ";
theyChose.textContent = "The computer chose: ";
resultPara.textContent = "And the winner is...";

scores.appendChild(youChose);
scores.appendChild(theyChose);
scores.appendChild(resultPara);
scores.appendChild(para);
scores.appendChild(para2);
scores.appendChild(para3);

function setGameOver() {
    disableBtn()
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    yourScore = 0;
    computerScore = 0;
    resetParas();
    enableBtn();
    resetButton.style.display = 'none';
}

function resetParas() {
    var allParas = document.querySelectorAll('p');
    for (var i=0;i<allParas.length;i+=1){
        allParas[i].textContent = "";
      }
}


// buttons.forEach(function(currentBtn){
//   currentBtn.addEventListener('click', playRound)
// })

//   button.addEventListener('click', () => {
//     playRound(button.textContent, getComputerChoice())
// });

// button2.addEventListener('click', () => {
//     playRound(button2.textContent, getComputerChoice())
// });





const values = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let computerSelection = values[Math.floor(Math.random() * values.length)];
    return computerSelection;
}

function getplayerOneChoice() {
    let promptInput = prompt("Rock, paper or scissors?", "");
    let toLower = promptInput.toLowerCase();
    let playerOneChoice = toLower.substring(0, 1).toUpperCase() + toLower.substring(1);
    return playerOneChoice;

}

function playRound(playerOne, playerTwo) {
    youChose.textContent = "You chose: " + playerOne + ".";
    theyChose.textContent = "The computer chose: " + playerTwo + ".";
    para.textContent = "Your score is " + yourScore + ".";
    para2.textContent = "The computer's score is " + computerScore + ".";

    if (playerOne === playerTwo) {
        resultPara.textContent = "It's a tie. No one wins."
    } else if (playerOne === "Rock" && playerTwo === "Paper") {
        computerScore++;
        resultPara.textContent = "Rock loses to paper. You lose!";
    } else if (playerOne === "Rock" && playerTwo === "Scissors") {
        yourScore++;
        resultPara.textContent = "Rock beats scissors. You win!";
    } else if (playerOne === "Scissors" && playerTwo === "Paper") {
        yourScore++;
        resultPara.textContent = "Scissors beats paper. You win!";
    } else if (playerOne === "Scissors" && playerTwo === "Rock") {
        computerScore++;
        resultPara.textContent = "Scissors loses to rock. You lose!";
    } else if (playerOne === "Paper" && playerTwo === "Scissors") {
        computerScore++;
        resultPara.textContent = "Paper loses to scissors. You lose!";
    } else if (playerOne === "Paper" && playerTwo === "Rock") {
        yourScore++;
        resultPara.textContent = "Paper beats rock. You win!";
    } else {
        resultPara.textContent = "Please choose either 'rock', 'paper', or 'scissors'";
    }
}

// function playSeries() {
//     for (let i = 0; i < 5; i++) {
//         console.log(playRound(getplayerOneChoice(), getComputerChoice()));
//         console.log("Your score is: " + yourScore, "The computer's score is: " + computerScore);
//         console.log("")
//     } if (yourScore > computerScore) {
//         return "You scored higher than the computer. You win!"
//     } else if (yourScore === computerScore) {
//         return "You and the computer scored the same. It's a tie!"
//     } else {
//         return "The computer scored higher than you. You lose! Good say sir!"
//     }
// }



//console.log(playerOneChoice);
//console.log(computerChoice);

//console.log(playRound(playerOneChoice, computerChoice))




