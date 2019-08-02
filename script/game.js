function playRound(player, computer) {
    // const computer = hands[computerSelection];
    // const player = playerSelection.toLowerCase();
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

function computerPlay(hands) {
    return hands[Math.floor(Math.random() * 3)]
}

function playRounds(playerSelection) {
    const hands = ['rock', 'paper', 'scissors'];

    let computerSelection = computerPlay(hands);

    let result = playRound(playerSelection, computerSelection);
    if (result == 0) {
        dawnCount++;
    } else if (result == 1) {
        playerCount++;
    } else {
        computerCount++;
    }

}

function playRound(e) {
    console.log(e.target);
    
    if(e.target.hasAttribute('alt')){
        let elem = e.target.getAttribute('alt');
    } else{
        return ;
    }

    
    

    playRounds(e.target.getAttribute('alt'));
    console.log(`Player ${playerCount}\t Comp ${computerCount}\t Dawn ${dawnCount}`)
}
let computerCount = 0,
    dawnCount = 0,
    playerCount = 0;


const allHands = Array.from(document.querySelectorAll('.block'));
allHands.forEach(hand => hand.addEventListener('click', playRound));    




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