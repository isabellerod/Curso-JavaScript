const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';

let gameRunning = false;

const playerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert('Invalid choice! We chose Rock for you!')
        return DEFAULT_CHOICE;
    }
    return selection;
};

const computerChoice = ()=> {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    }
    else if (randomValue > 0.34 && randomValue < 0.67) {
        return PAPER;
    }
    else {
        return SCISSORS;
    }
};

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener('click', () => {
    if (gameRunning) {
        return;
    }
    gameRunning = true;
    console.log('Game is starting...');
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = getWinner(computerSelection, playerSelection);
    console.log(winner);
});