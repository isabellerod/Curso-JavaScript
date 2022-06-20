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

const getWinner = (cChoice, pChoice = DEFAULT_CHOICE) =>
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
    let winner;
    if (playerSelection) {
        winner = getWinner(computerChoice, playerChoice);
    }
    else {
        winner = getWinner(computerChoice, playerChoice);
    }
    let message = `You picked ${playerSelection || DEFAULT_CHOICE}, computer picked ${computerSelection}, therefore you `;
    if (winner === RESULT_DRAW) {
        message = message + 'had a draw.';
    }
    else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won.';
    }
    else {
        message = message + 'lost.';
    }
    alert(message);
    gameRunning = false;
});

//not related to the game

const sumUp = (resultHandler, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    };
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    resultHandler(sum);
};

const subtractUp = function() {
    let sum = 0;
    for (const num of arguments) {
        sum -= num;
    }
    return sum;
};

const showResult = () => {
    alert('The result after adding all numbers is: ' + result);
};

console.log(sumUp(showResult, 1, 5, 'fdsa', 10, -3, 6, 10));
console.log(sumUp(showResult ,1, 5, 10, -3, 6, 10, 25, 88));
console.log(subtractUp(1, 10, 15, 20));