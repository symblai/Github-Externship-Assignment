// Write your code here

function isFloat(num) {
    if(Number(num) == num && num % 1 !== 0) {
        return true;
    }
    return false;
}

class FixEquation {

    findMissingDigit(equation) {
      
        var characters = equation.split(" "); 

        var questMarkPos = -1;

        const numbers = [];

        for(var i = 0; i < characters.length; i++) {
            if(characters[i] == '+' || characters[i] == '*' || characters[i] == '=') {
                continue;
            }
            else {
               
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
        if(questMarkPos == 0) { 
            ans = (D - C) / B;
        }
        else if(questMarkPos == 2) { 
            ans = (D - C) / A;
        }
        else if(questMarkPos == 4 ) { 
            ans = D - (A * B);
        }
        else { 
            ans = (A * B) + C;
        }

       
        let ans_str = '';
        ans_str = ans.toString();
        if(ans_str == characters[questMarkPos].replace('?', '')) {
            return -1;
        }


        if(isFloat(ans)) {
            return -1;
        }

       
        if(ans < 0) {
            return -1;
        }

       
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