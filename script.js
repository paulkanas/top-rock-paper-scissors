function getComputerChoice() {
    var values = ["Rock", "Paper", "Scissors"],
        valueToUse = values[Math.floor(Math.random() * values.length)];
    return valueToUse;
}

console.log(getComputerChoice());