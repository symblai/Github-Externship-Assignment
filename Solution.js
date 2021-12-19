// Write your code here

function isFloat(num) {
    if(Number(num) == num && num % 1 !== 0) {
        return true;
    }
    return false;
}

class FixEquation {

    findMissingDigit(equation) {
        equation = equation.replace( /  +/g, ' ' ); //replacing multiple spaces with single space
        var characters = equation.split(" "); 
        var questMarkIndex = -1;
        const values = [];

        for(var i = 0; i < characters.length; i++) {
            if(characters[i] == '+' || characters[i] == '*' || characters[i] == '=') {
                continue;
            }
            else {
                if(characters[i].includes('?')) {
                    questMarkIndex = i; //finding the position of '?'
                    values.push(characters[i]);
                }
                else {
                    values.push(parseInt(characters[i]));
                }
            }
        }
        //Finding A, B, C, D
        var A = values[0], B = values[1], C = values[2], D = values[3];
        var ans = 0;
        if(questMarkIndex == 0) { 
            ans = (D - C) / B;
        }
        else if(questMarkIndex == 2) { 
            ans = (D - C) / A;
        }
        else if(questMarkIndex == 4 ) { 
            ans = D - (A * B);
        }
        else { 
            ans = (A * B) + C;
        }
       
        let ans_str = '';
        ans_str = ans.toString();
        if(ans_str == characters[questMarkIndex].replace('?', '')) {
            return -1;
        }

        if(isFloat(ans)) {
            return -1;
        }
       
        if(ans < 0) {
            return -1;
        }
       
        for(var i = 0; i < characters[questMarkIndex].length; i++) {
            if(characters[questMarkIndex][i] == '?') {
                return parseInt(ans_str[i]);
            }
        }
        return -1;
    }
}

var testcases = [
    '42 * 47 + 2 = 1?76',
    '4? * 47 + 2 = 1976',
    '42 * ?7 + 2 = 1976',
    '42 * ?47 + 2 = 1976',
    '2 * 12? + 2 = 247',
    '2    *   12?   + 2 = 247'
]
 
testcases.forEach(test => {
    console.log(new FixEquation().findMissingDigit(test))
});
