const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = ROCK;

let gameRunning = false;

const playerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert('Invalid choice! We chose Rock for you!')
        return DEFAULT_CHOICE;
    }
    return selection;
};

startGameBtn.addEventListener('click', function() {
    if (gameRunning) {
        return;
    }
    gameRunning = true;
    console.log('Game is starting...');
    const playerSelection = playerChoice();
    console.log(playerSelection);
});