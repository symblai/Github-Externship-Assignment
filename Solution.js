// Write your code here
class FixEquation {

    findMissingDigit(input) {
        //Replacing multiple spaces
        input = input.replace( /  +/g, ' ' ); 
        //Splitting the equation into array of characters
        var characters = input.split(" "); 
        //Assigning missingIndex as -1
        var missingIndex = -1;
        //value array declaration
        const value = new Array();

        for(var i = 0; i < characters.length; i++) {
            if(characters[i] !== '+' && characters[i] !== '*' && characters[i] !== '=') {
                if(characters[i].includes('?')) {
                    missingIndex = i; 
                    value.push(characters[i]);
                }
                else {
                    value.push(parseInt(characters[i]));
                }
            }
        }

        //Parse A, B, C, D values
        var [A, B, C, D] = value;

        //Initialize sol variable
        var sol = 0;
        switch(missingIndex) {
            case 0:
                sol = (D - C) / B;
                break;
            case 2:
                sol = (D - C) / A;
                break;
            case 4:
                sol = D - (A * B);
                break;
            default:
                sol = (A * B) + C;
                break;
        }

        //Return Final Values       
        if(sol == parseInt(characters[missingIndex].replace('?', '')) || (Number(sol) == sol && sol % 1 !== 0) || sol < 0) {
            return -1;
        }
        return parseInt(sol.toString()[characters[missingIndex].indexOf('?')]) || -1;
    }
}

//TestCases
var Testcases = [
    '5? * 57 + 4 = 3196',
    '26 * ?7 + 4 = 1486',
    '42 * 9 + 78 = 4?6',
    '22 * 87 + ?3 = 1927',
    '?2 * 97 + 4 = 74',
]

//Run TestCases
Testcases.forEach(item => {
    console.log(new FixEquation().findMissingDigit(item))
});