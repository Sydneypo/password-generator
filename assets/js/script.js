// The Password Generator will provide a password with 8-128 
// characters based on user selections

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// pwd can include letters, numbers, and special characters
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [" ", ".", "~", "!", "#", "$", "%", "&", "'", 
    "(", ")", "*", "+", "-", "/", "^", ",", ":", ";", "<", ">", 
    "=", "?", "@", "[", "]", "|", "{", "}", "_", "`"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", 
    "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", 
    "X", "Y", "Z"];

// variables for criteria to include in the password
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Store the result in an array
var passwordChars = [];

// Function to generate a random pwd
var generatePassword = function () {
    confirmLength = window.prompt("How many characters would you like your password to contain?");

    // if length of pwd is outside requirements display an alert to the user
    while ((confirmLength <= 7) || (confirmLength >= 129)) {
        window.alert("Password length must be between 8 - 128 characters. Try again!");
        confirmLength = window.prompt("How many characters would you like your password to contain?");
    }

    // confirm pwd length to the user
    window.alert(`Your password will have ${confirmLength} characters.`);

    // confirm character types to include in the pwd
    confirmSpecialCharacter = window.confirm("Click OK to confirm if you would like to include special characters.")
    confirmNumbericCharacter = window.confirm("Click OK to confirm if you would like to include numeric characters.");
    confirmLowerCase = window.confirm("Click OK to confirm if you would like to include lowercase characters.");
    confirmUpperCase = window.confirm("Click OK to confirm if you would like to include uppercase characters.");

    // validating input - least one character type should be selected
    while (confirmUpperCase === false && 
            confirmLowerCase === false && 
            confirmSpecialCharacter === false && 
            confirmNumericCharacter === false) {
        alert("You must choose at lease one character type!");
        confirmSpecialCharacter = window.confirm("Click OK to confirm if you would like to include special characters.")
        confirmNumbericCharacter = window.confirm("Click OK to confirm if you would like to include numeric characters.");
        confirmLowerCase = window.confirm("Click OK to confirm if you would like to include lowercase characters.");
        confirmUpperCase = window.confirm("Click OK to confirm if you would like to include uppercase characters.");
    }

    // resulting pwd string
    var randomPassword = "";

    if (confirmSpecialCharacter) {
        passwordChars = [...passwordChars, ...specialChar];
    }

    if (confirmNumericCharacter) {
        passwordChars = [...passwordChars, ...number];
    }

    if (confirmLowerCase) {
        passwordChars = [...passwordChars, ...alphaLower];
    }

    if (confirmUpperCase) {
        passwordChars = [...passwordChars, ...alphaUpper];
    }

    // password is generated that matches the selected criteria
    for (let i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + 
        passwordChars[Math.floor(Math.random() * 
        passwordChars.length)];
        console.log(randomPassword);
    }
    return randomPassword;
};


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password 
}

// add event listener to generate button
generateBtn.addEventListener("click", writePassword);