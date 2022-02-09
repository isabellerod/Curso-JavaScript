const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
    alert('Greater than 0.7');
}

const numbers = [5, 7, 8];

for (let i=0; i<numbers.lenght; i++) {
    console.log(numbers[i]);
}

let counter = 0;
while (counter < numbers.length) {
    console.log(numbers[counter]);
    counter++;
}

for (let i=numbers.length -1; i>=0; i--) {
    console.log(numbers[i]);
}

const randomNumber2 = Math.random();

console.log(randomNumber);
console.log(randomNumber2);

if (randomNumber && randomNumber2 > 0.7) {
    alert('Greater than 0.7');
}

else if (randomNumber || randomNumber2 <= 0.2) {
    alert('One of them is smaller than 0.2');
}