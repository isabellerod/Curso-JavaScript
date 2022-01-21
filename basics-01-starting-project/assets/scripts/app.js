const defaultResult = 0;
let currentResult = defaultResult;
let calculationDescription

function add(num1, num2) {
    const result = num1 + num2;
    alert('the result is: ' + result);
}

add();

currentResult = (currentResult + 10) * 3 / 2 - 1;
calculationDescription = `(${defaultResult} +10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);