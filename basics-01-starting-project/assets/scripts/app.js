const defaultResult = 0;
let currentResult = defaultResult;

function getUser(){
    return parseInt(userInput.value);
}

function createOutput(operator, resultBefore, calcNumber) {
    const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber = getUser();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createOutput('+', initialResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getUser();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createOutput('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUser();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createOutput('*', initialResult, enteredNumber);
}

function divide () {
    const enteredNumber = getUser();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener ('click', subtract);
multiplyBtn.addEventListener ('click', multiply)
divideBtn.addEventListener ('click', divide)
