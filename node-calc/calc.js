const readline = require("readline-sync")

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

const num1 = parseFloat(readline.question('Please enter your first number: '));
const num2 = parseFloat(readline.question('Please enter your second number: '));
const operation = readline.question('Please enter the operation to perform (add, sub, mul, div): ');

let result;

if (operation === 'add') {
    result = add(num1, num2);
  } else if (operation === 'sub') {
    result = subtract(num1, num2);
  } else if (operation === 'mul') {
    result = multiply(num1, num2);
  } else if (operation === 'div') {
    result = divide(num1, num2);
  } else {
        console.log('Invalid operation');
        process.exit(1);
}

console.log(`The result is: ${result}`);
 
