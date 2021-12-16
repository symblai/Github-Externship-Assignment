// Problem statement: 
// You are given a String equation containing an equation of the form A * B + C = D, where A, B, C and D are positive integers that don't have leading zeros.
// One digit in the equation is missing.
// Determine and return the correct digit.
// If the missing digit cannot be determined (i.e., there is no solution or there is more than one solution), return -1 instead.

// Write code here

// Function to check whether a number is float or not
function isFloat(x) {
    if(Number(x) == x && x % 1 !== 0) {
        return true;
    }
    return false;
}

class FixEquation {

    findMissingDigit(equation) {
        // Split the equation string
        var characters = equation.split(" "); 

        var questMarkPos = -1;
        
        const numbers = [];

        for(var i = 0; i < characters.length; i++) {
            if(characters[i] == '+' || characters[i] == '*' || characters[i] == '=') {
                continue;
            }
            else {
                // If particular character contains '?'
                if(characters[i].includes('?')) {
                    questMarkPos = i;
                    numbers.push(characters[i]);
                }
                else {
                    numbers.push(parseInt(characters[i]));
                }
            }
        }

        var A = numbers[0], B = numbers[1], C = numbers[2], D = numbers[3];
        var ans = 0;
        if(questMarkPos == 0) { // A has '?'
            ans = (D - C) / B;
        }
        else if(questMarkPos == 2) { // B has '?'
            ans = (D - C) / A;
        }
        else if(questMarkPos == 4 ) { // C has '?'
            ans = D - (A * B);
        }
        else { // D has '?'
            ans = (A * B) + C;
        }

        // If the '?' is present at index 0 of the number, then replacing '?' has no effect, therefore we return -1
        let ans_str = '';
        ans_str = ans.toString();
        if(ans_str == characters[questMarkPos].replace('?', '')) {
            return -1;
        }

        // If the ans we found is float, we return -1 because the number can be integer only
        if(isFloat(ans)) {
            return -1;
        }

        // If the ans we found is negative
        if(ans < 0) {
            return -1;
        }

        // Finding the missing digit
        for(var i = 0; i < characters[questMarkPos].length; i++) {
            if(characters[questMarkPos][i] == '?') {
                return parseInt(ans_str[i]);
            }
        }
        return -1;
    }
}

const Input = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

Input.question('Enter Equation :', equation => {
    var fix = new FixEquation();
    var solution = fix.findMissingDigit(equation);
    console.log("\nEquation: ", equation);
    console.log("Answer ", solution);
    Input.close();
})
