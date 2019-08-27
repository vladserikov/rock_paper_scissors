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
    
    if(playerCount > computerCount){   
        template.querySelector('#winner').textContent = 'YOU';
    } else{
        template.querySelector('#winner').textContent = 'Computer';
    }
    template.style.display = 'block';
    template.querySelector('#restart').addEventListener('click', function (e) {
        computerCount = 0;
        dawnCount = 0;
        playerCount = 0;
        changeNumber();
        template.style.display = 'none';
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

// const reastart = document.querySelector('#restart');
// restart.addEventListener('click', function (e) {
//     computerCount = 0;
//     dawnCount = 0;
//     playerCount = 0;
//     let rest = document.getElementById('template');
//     rest.style.display = 'none';
// })