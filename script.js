let currentInput = "";
let display = document.querySelector(".display");

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch (error) {
        display.value = "Error";
    }
}

function calculateSquareRoot() {
    try {
        currentInput = Math.sqrt(eval(currentInput));
        display.value = currentInput;
    } catch (error) {
        display.value = "Error";
    }
}

function calculatePercentage() {
    try {
        currentInput = eval(currentInput) / 100;
        display.value = currentInput;
    } catch (error) {
        display.value = "Error";
    }
}
