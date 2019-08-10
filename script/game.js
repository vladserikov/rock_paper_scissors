let computerCount = 0,
    dawnCount = 0,
    playerCount = 0;
function playRound(player, computer) {
    
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

function endGame() {
    const template = document.querySelector('#template');
    const body = document.querySelector('body');
    const clone = template.cloneNode(true);
    
    if(playerCount > computerCount){   
        clone.querySelector('#winner').textContent = 'YOU';
    } else{
        clone.querySelector('#winner').textContent = 'Computer';
    }
    cloneElement.appendChild(clone);
    body.appendChild(cloneElement);
    const btn = clone.querySelector('#restart');
    btn.addEventListener('click', function () {
        body.removeChild(cloneElement);
    })
}

function changeNumber() {
    document.querySelector('#player').textContent = playerCount;
    document.querySelector('#comp').textContent = computerCount;
    document.querySelector('#dawn').textContent = dawnCount;
    if(playerCount >= 5 || computerCount >= 5){
        endGame();
    }
}
function startGame(e) { 
    let elem;
    if(e.target.hasAttribute('alt')){
        elem = e.target.getAttribute('alt');        
    } else{
        return ;
    }
    playRounds(elem);
    changeNumber();
    console.log(`Player ${playerCount}\t Comp ${computerCount}\t Dawn ${dawnCount}`)
}



const allHands = Array.from(document.querySelectorAll('.block'));
allHands.forEach(hand => hand.addEventListener('click', startGame));    





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