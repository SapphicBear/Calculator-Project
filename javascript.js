// Dom mod area
const div = document.createElement("div");
const display = document.querySelector(".display");
const buttonArea = document.querySelector(".button-area");
const output = document.querySelector(".output");
const divOperators = document.querySelector(".operators");
const divNumbers = document.querySelector(".numbers");


    for (i = 0; i <= 9; i++) {
        const div = document.createElement("div");
        div.className = i;
        div.textContent = i;
        divNumbers.appendChild(div);
        if(i === 0) {
            div.className = "zero";
        }
    }
    


// Variables
let number = "";
let operator = ["add", "sub", "mult", "div"];
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
operate(2,1);