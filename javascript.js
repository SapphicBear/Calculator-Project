// Dom mod area
const display = document.querySelector(".display");
const buttonArea = document.querySelector(".button-area");
const output = document.querySelector(".output");
const divOperator = document.querySelector(".operators");
const divNumber = document.querySelector(".numbers");
let savedInput = "";
let firstOperator = "";
let answer = "";
let equals = false;
let operatorClicked = false;


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
    console.log(savedInput);
}




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
        operatorClicked = false;
    })
})

// Event listener for operators
const allOperators = document.querySelectorAll(".operator");
allOperators.forEach((op) => {
    op.addEventListener("click", () => {
        const clickedOperator = op.classList[1];
        if (number !== "") {
            number2 = savedInput;
            console.log(number2);
        } else if (answer === ""){
            number = savedInput;
            firstOperator = clickedOperator;
            console.log(firstOperator);
            console.log(number);
        }
        else {
            number = +answer;
            console.log(answer);
        }
        // if (equals === false) {
        //     number = savedInput;
        // } else {
        //     savedInput = answer;
        // }
        output.textContent = "";
        savedInput = "";
        if (operatorClicked === false) {
        switch (clickedOperator) {
            case "add":
                operatorClicked = true;
                operator = "add";
                if (number !== "" && number2 !== "") {
            answer = operate(number, number2, firstOperator);
        } 
                equals = false;
                break;
            case "sub":
                 
                operator = "sub";
                operatorClicked = true;
                if (number !== "" && number2 !== "") {
            answer = operate(number, number2, firstOperator);
        } 
                equals = false;
                break;
            case "mult": 
            operatorClicked = true;
                operator = "mult";
                if (number !== "" && number2 !== "") {
            answer = operate(number, number2, firstOperator);
        } 
                console.log(clickedOperator);
                
                equals = false;
                break;
            case "divide":
                operatorClicked = true;
                    operator = "divide";
                
                if (number !== "" && number2 !== "") {
            answer = operate(number, number2, firstOperator);
        } 
                equals = false;
                break;

            case "equals":
                output.textContent = "";
                 if (answer !== "") {
                    number = answer;
                }
                console.log(number, number2, operator);
                answer = operate(+number, +number2, operator);
                console.log(typeof answer);
                if (typeof answer === "string") {
                    displayText(answer);
                }
                else {
                    displayText((parseFloat(answer).toFixed(2)));
                }
                equals = true;
                savedInput = "";
                number = "";
                number2 = "";
        }
    } else if (clickedOperator === "clear") {
        clearText();
    }
        else {
        const para = document.createElement("p");
        para.textContent = "error";
        output.appendChild(para);
    }})
})

function check(num1, num2, num3) {
    const para = document.createElement("p");
        para.className = "error";
        para.textContent = "Error!"
    if (num1 === "" || num3 === "") {
        if (num2 === "") {
            output.appendChild(para);
        console.log(number, number2, answer);}
        }
        
    // } else if (num1 === "" && num3 === "") {
    //     output.appendChild(para);
    //     console.log(number, number2, answer);
    // } 
    else {
        return;
    }
}


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
    if (num2 === 0 || isNaN(num2)) {
        return "You cannot divide zero, idiot.";
    } else {
        return num1 / num2;
    }
}

// Clear-button function
function clearText() {
        output.textContent = "";
        savedInput = "";
        number = "";
        number2 = "";
        answer = "";
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
        case "divide": {
        return divide(num1, num2);
    }
    }
} 

