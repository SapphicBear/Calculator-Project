// Dom mod area
const display = document.querySelector(".display");
const buttonArea = document.querySelector(".button-area");
const output = document.querySelector(".output");
const divOperator = document.querySelector(".operators");
const divNumber = document.querySelector(".numbers");
let savedInput = [];
let answer = "";
let equals = false;

// Variables
let number = "";
let number2 = "";
let operator = "";


// draws 0 - 9 divs for the numbers on the calculator.
    for (i = 0; i <= 9; i++) {
        const div = document.createElement("div");
        div.className = "number";
        div.classList.add(i);
        div.textContent = i;
        divNumber.appendChild(div);
        if(i === 0) {
            div.className = "zero";
            div.classList.add("0", "number");
        }
    }
    
// Display Text function
function displayText(input) {
    const para = document.createElement("p");
    para.className = "display-text";
    para.textContent = input;
    output.appendChild(para);
    savedInput += input;
}
// Event listner for all buttons to change color when clicked




// eventlistener numbers
const allNumbers = document.querySelectorAll(".number");
allNumbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (equals === false) {
        displayText(number.classList[1]);    
        } else {
            clearText();
            equals = false;
            displayText(number.classList[1]);  
        }
        
    })
})

// Event listener for operators
const allOperators = document.querySelectorAll(".operator");
allOperators.forEach((op) => {
    op.addEventListener("click", () => {
        // Checks if equals has been pressed.
        if (equals === false) {
            savedInput += ", ";
        } else {
            savedInput = answer + ", ";
        }
        output.textContent = "";
        // gets class name for easy insertion
        // operate() calls operate function
        const clickedOperator = op.classList[1];
        switch (clickedOperator) {
            case "clear":
                clearText();
                operator = "clear";
                break;
            case "add":
                operator = "add";
                equals = false;
                break;
            case "sub": 
                operator = "sub";
                equals = false;
                break;
            case "mult": 
                operator = "mult";
                equals = false;
                break;
            case "divide":
                operator = "divide";
                equals = false;
                break;
            case "equals":
                output.textContent = "";
                const split = savedInput.split(", ");
                number = split[0];
                number2 = split[1];
                console.log(number, number2, operator);
                answer = operate(number, number2, operator);
                displayText(answer);
                equals = true;
                savedInput = [];
        }
    })
})





// Math Functions

// Add
function addition(num1, num2) {
    return +num1 + +num2;
}

// Subtract
function subtract(num1, num2) {
    return num1 - num2;
}

// Multiply
function multiply(num1, num2) {
    return num1 * num2;
}

// Divide
function divide(num1, num2) {
    return num1 / num2;
}

// Clear-button function
function clearText() {
        output.textContent = "";
        savedInput = [];
}


// Operate function

function operate(num1, num2, operator) {
    switch(operator) {
        case "add": 
            return addition(num1, num2);
            break;
        case "sub": 
            return subtract(num1, num2);
            break;
        case "mult": 
            return multiply(num1, num2);
            break;
        case "divide":
            return divide(num1, num2);
    }
} 

