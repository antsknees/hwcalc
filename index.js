let firstNumber;
let secondNumber;
let step = 0;
let operation;
let result = 0;

let display = document.getElementById('display');

function getNumber(num) {
  if (step === 0 || step === 1) {
    firstNumber = Number(num);
    display.value = firstNumber;
  } else if (step === 2) {
    secondNumber = Number(num);
    display.value = firstNumber + operation + secondNumber;
  }
}

function getOperator(op) {
  step = 2;
  operation = op;
  display.value += operation;
}

function clearDisplay() {
  display.value = '0';
  firstNumber = '';
  secondNumber = '';
  step = 0;
  operation = '';
  result = 0;
}

let equals = () => {
  if (operation === '+') {
    result = firstNumber + secondNumber;
  } else if (operation === '-') {
    result = firstNumber - secondNumber;
  } else if (operation === '*') {
    result = firstNumber * secondNumber;
  } else if (operation === '/') {
    result = firstNumber / secondNumber;
  }
  
  display.value = result;
  firstNumber = result;
  secondNumber = '';
  operation = '';
  step = 1;
}


