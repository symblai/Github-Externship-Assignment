// Function: findMissingDigit
// Parameters : String
// Returns : Integer
// Method signature : function findMissingDigit(equation)

class FixEquation {
    findMissingDigit(equation) {
        
        // Get the input and split equation into tokens
        let tokens = equation.split(" ");
        let missing = -1;
        let digits = [];

        // Look up for '?' in these tokens
        for (var i = 0; i < tokens.length; i += 2) {
            if (tokens[i].includes('?')) {
                digits.push(tokens[i]);
                missing = i / 2;
            } else {
                digits.push(parseInt(tokens[i]));
            }
        }

        //  Extract the numbers A,B,C,D
        var A = digits[0];
        var B = digits[1];
        var C = digits[2];
        var D = digits[3];

        // Rearrange the equations to find the complete value of the missing number
        var rearranged = 0;

        if (missing == 0) {
            rearranged = (D - C) / B;
        } else if (missing == 1) {
            rearranged = (D - C) / A;
        } else if (missing == 2) {
            rearranged = D - (A * B);
        } else if (missing == 3) {
            rearranged = (A * B) + C;
        }

        // Incase the value computed is a floating number or negative number
        if ((Number(rearranged) === rearranged && rearranged % 1 !== 0) || rearranged < 0) {
            return -1;
        }

        // Check if ? is leading zeros
        // Thus replacing the '?'  has no effect
        rearranged = rearranged.toString();
        if (tokens[missing * 2].replace('?', '') == rearranged.toString()) {
            return -1;
        }

        // Check if all digits other than ? are same
        for (var i = 0; i < rearranged.length; i++) {
            if (tokens[missing * 2][i] == '?') {
                return (parseInt(rearranged[i]))
            }
        }

        // No solution
        return -1;

    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Enter Equation :`, equation => {
    var obj = new FixEquation();
    var solution = obj.findMissingDigit(equation);
    console.log("\n The Entered Equation is :", equation);
    console.log(" Returns: ", solution);
    readline.close();
})
