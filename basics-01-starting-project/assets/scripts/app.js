const defaultResult = 0;
let currentResult = defaultResult;

function getUser(){
    return +userInput;
}

function add() {
    const enteredNumber = getUser();
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);