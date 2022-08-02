const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equationDisplay = document.querySelector('.equation-display');
const answerDisplay = document.querySelector('.answer-display');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');

let equation = '';
let numbers = [];

let currentNumber = 0;
let operation;

const updateDisplay = function(char) {
    equationDisplay.textContent += char;
}

const updateEquation = function(char) {
    equation += char;
}

numberButtons.forEach((button) => {button.addEventListener('click', function() {
    button.classList.add('clicked');
    setTimeout(() => button.classList.remove('clicked'), 100);
    updateDisplay(button.innerText);
    updateEquation(button.innerText);
    console.log(equation);
})});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => button.classList.remove('clicked'), 100);
    
        numbers[currentNumber] = parseFloat(equation);
        updateDisplay(button.innerText);
        equation = '';
        currentNumber++;
        if (button.innerText !== '=') {
            operation = (button.innerText);
        }
        console.log(typeof(operation));

    });
});

equalButton.addEventListener('click', function () {
    console.log(operate(operation, numbers[0], numbers[1]));
    answerDisplay.textContent = operate(operation, numbers[0], numbers[1]);

});

clearButton.addEventListener('click', function() {
    equation = '';
    currentnumber = '';
    equationDisplay.textContent = '';
    answerDisplay.textContent = '';
});


const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}


const operate = function(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case 'x':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
    }

}

console.log(operate('*', 6, 3));