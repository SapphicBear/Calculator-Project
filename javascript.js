// Dom mod area
const display = document.querySelector(".display");
const buttonArea = document.querySelector(".button-area");
const output = document.querySelector(".output");
const divOperator = document.querySelector(".operators");
const divNumber = document.querySelector(".numbers");
let savedInput = [];


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

// eventlistener numbers
const allNumbers = document.querySelectorAll(".number");
allNumbers.forEach((number) => {
    number.addEventListener("click", () => {
        displayText(number.classList[1]);
    })
})

// Event listener for operators
const allOperators = document.querySelectorAll(".operator");
allOperators.forEach((op) => {
    op.addEventListener("click", () => {
        // console.log(op.classList[1]); gets class name for easy insertion
        // operate() calls operate function
    })
})



// Variables
let number = "";
let operator = ["add", "sub", "mult", "div", "clear"];
let number2 = "";

// Math Functions

// Add
function addition(num1, num2) {
    return num1 + num2;
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
function clear() {
        output.textContent = "";
        savedInput = [];
}


// Operate function

function operate(num1, num2, operator) {
    switch(operator) {
        case "add": 
            operator = operator[0];
            console.log((addition(num1, num2)));
            return addition(num1, num2);
            break;
        case "sub": 
            return subtract(num1, num2);
            break;
        case "mult": 
            return multiply(num1, num2);
            break;
        case "div":
            return divide(num1, num2);
    }
} 

