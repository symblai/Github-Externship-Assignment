/**
 * Author: Tejas Ladhani.
 * Github Link: https://github.com/Tejas-Ladhani
 */

class FixEquation {

    /**
     * Method to find which operand is missing the digit (that is , having '?' symbol)
     * @param {String} A - First operand
     * @param {String} B - Second operand
     * @param {String} C - Third operand
     * @param {String} D - Result of the equation
     * @returns {String}
     */
    searchMissingPlace(A, B, C, D) {

        if (A.includes('?')) {
            return 'A';
        } else if (B.includes('?')) {
            return 'B';
        } else if (C.includes('?')) {
            return 'C';
        } else if (D.includes('?')) {
            return 'D';
        } else {
            return 'None';
        }
    }

    /**
     * Method to check if the calculated answer's length is equal to the required one.
     * @param {String} toCheck - the operand in given equation.
     * @param {String} answer - the generated answer.
     * @returns {Number}
     */
    validate(toCheck, answer) {

        if (toCheck.length !== answer.length) {
            return -1;
        }

        const index = toCheck.indexOf('?');
        const digit = answer.charAt(index);

        return parseInt(digit);
    }

    /**
     * 
     * @param {String} A - First operand
     * @param {String} B - Second operand
     * @param {String} C - Third operand
     * @param {String} D - Result of the equation
     * @param {Number} choice 
     * @returns {Number}
     */
    calculate(A, B, C, D, choice) {

        let answer;

        switch (choice) {
            case 'A':
                answer = (parseInt(D) - parseInt(C)) / parseInt(B);
                return this.validate(A, answer.toString());

            case 'B':
                answer = (parseInt(D) - parseInt(C)) / parseInt(A);
                return this.validate(B, answer.toString());

            case 'C':
                answer = parseInt(D) / (parseInt(B) * parseInt(A));
                return this.validate(C, answer.toString());

            case 'D':
                answer = parseInt(A) * parseInt(B) + parseInt(C);
                return this.validate(D, answer.toString());

            default:
                return -1;
        }
    }

    /**
     * Main Driving function.
     * @param {String} equation 
     * @returns {Number}
     */
    findMissingDigit(equation) {

        const variables = equation.split(' ');

        let firstOperand = variables[0];
        let secondOperand = variables[2];
        let thirdOperand = variables[4];
        let resultOfEquation = variables[6];

        let choice = this.searchMissingPlace(firstOperand, secondOperand, thirdOperand, resultOfEquation);

        return this.calculate(firstOperand, secondOperand, thirdOperand, resultOfEquation, choice);
    }
}
// Testing
const testCases = [
    '4? * 47 + 2 = 1976',
    '42 * ?7 + 2 = 1976',
    '42 * ?47 + 2 = 1976',
    '42 * 47 + 2 = 1?76',
    '2 * 12? + 2 = 247',
];

const FixEquationOBJ = new FixEquation();
testCases.forEach((test) => {

    const missingDigit = FixEquationOBJ.findMissingDigit(test);
    console.log(`Equation : ${test}`);
    console.log(`Returns : ${missingDigit}\n`);

});
