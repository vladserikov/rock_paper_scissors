function playRound(e) {
    const elem = e.target.getAttribute('alt');
}
let computer = 0,
    dawn = 0
    player = 0;
const hands = document.querySelectorAll('.block');


hands.forEach(hand => hand.addEventListener('click', playRound))
/* 
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

        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result == 0) {
            count++;
        } else if (result == 1) {
            playerCount++;
        } else {
            computerCount++;
        }
        
    }
}
game(); */