const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUser(){
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createOutput(operator, resultBefore, calcNumber) {
    const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
} // From vendor file

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculate(calculationType) {
    const enteredNumber = getUser();
    const initialResult = currentResult;
    let math;

    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        math = '+';
    }

    else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        math = '-';
    }

    else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        math = '*';
    }

    else {
        currentResult /= enteredNumber;
        math = '/';
    }


    createOutput(math, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculate('ADD');
}

function subtract() {
    calculate('SUBTRACT');
}

function multiply() {
    calculate ('MULTIPLY');
}

function divide () {
    calculate ('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener ('click', subtract);
multiplyBtn.addEventListener ('click', multiply)
divideBtn.addEventListener ('click', divide)
