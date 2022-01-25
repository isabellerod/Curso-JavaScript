const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from input field
function getUser(){
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createOutput(operator, resultBefore, calcNumber) {
    const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
} // From vendor file

function add() {
    const enteredNumber = getUser();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createOutput('+', initialResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getUser();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createOutput('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUser();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createOutput('*', initialResult, enteredNumber);
}

function divide () {
    const enteredNumber = getUser();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener ('click', subtract);
multiplyBtn.addEventListener ('click', multiply)
divideBtn.addEventListener ('click', divide)
