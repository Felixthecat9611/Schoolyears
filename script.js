// script.js
// This script handles the functionality of the (How many years do you have left?)sites functions.

// grab the elements we need from the index.html file
var input = document.getElementById("yearsInput");
var button = document.getElementById("checkButton");
var result = document.getElementById("result");

// 2. Show a message when pressing check button
function showMessage(text) {
    result.textContent = text;
}

// Definement of which text will be shown.
function messageForYears(years) {
    if (years === 0) {
        return "Congratulations! You have finished school!";
    } else if (years === 1) {
        return "Nearly there!";
    } else if (years === 2) {
        return "Still learning!";
    } else if (years === 3) {
        return "Sucks to be you :)";
    } else {
        return "I hope you are kidding ...";
    } 
}

// runs when the user actually presses the button.
function checkYears() {
var value = input.value.trim();

    if (value === "") {
        showMessage("Please enter a number.");
        return;
    
}

// no special characters.
var isNumeric = /^\d+$/.test(value);

if (!isNumeric) {
    showMessage("That is not a valid number. Please try again using numeric values.");
    return;
}


// turn the text into real numbers
var years = parseInt(value, 10);
showMessage(messageForYears(years));
}

// wiring the button.

button.addEventListener("click", checkYears);
