function playRound(playerSelection, computerSelection) {
    const computer = hands[computerSelection];
    const player = playerSelection.toLowerCase();
    if (computer === player) {
        return 0;
    }
    if (player == 'rock') {
        return computer === 'paper' ? -1 : 1;
    }
    if (player == 'paper') {
        return computer === 'rock' ? 1 : -1;
    }
    if (player == 'scissors') {
        return computer === 'rock' ? -1 : 1;
    }
}
function computerPlay() {
    return Math.floor(Math.random() * 3)
}
const hands = ['rock', 'paper', 'scissors'];

function game() {
    let playerCount = 0,
        computerCount = 0,
        count = 0;
    for (let i = 0; i < 5; i++) {
        let flag,
            playerSelection,
            counters = 0;

        do {
            counters++;
            playerSelection = prompt(`Enter hands ${hands.map(i => i)} Try ${counters}`).toLowerCase();
            flag = hands.some(i => i == playerSelection);
        } while (!flag);
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result == 0) {
            count++;
        } else if (result == 1) {
            playerCount++;
        } else {
            computerCount++;
        }
        console.log(`Player = ${playerCount}\nComputer = ${computerCount}\nStandoff = ${count}`)
    }
}
game();
