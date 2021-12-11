// Write your code here
class FixEquation {
    /** 
     * This helper functions essentially breaks down the given string containing "?" into digits and compares 
       it with the other evaluated string.
    */
    getMissingNumberBySplittingDigits(missingToken, evaluatedToken) {
        let factor = 1;
        let toDivideFactor = -1;

        for (let digits = missingToken.length - 1; digits > -1; digits--) {
            if (missingToken[digits] != "?") {
                evaluatedToken -= factor * missingToken[digits];
            } else {
                toDivideFactor = factor;
            }
            factor *= 10;
        }

        let missingNumber = evaluatedToken / toDivideFactor;

        /** Cases when we return -1 -
         * missingNumber comes out to be negative or a decimal number.
         * missingNumber comes out to be a leading zero digit.
         */
        if (
            missingNumber < 0 ||
            toDivideFactor === -1 ||
            (missingNumber == 0 && missingToken[0] == "?") ||
            !Number.isInteger(missingNumber)
        ) {
            return -1;
        }

        return missingNumber;
    }

    /**
     * @param {string} equation - Given equation of form "A * B + C = D".
     * @returns {number} Evaluated number for "?".
     */

    findMissingDigit(equation) {
        let missingDigitPosition = -1;
        const tokens = equation.split(" ");

        for (let index = 0; index < tokens.length; index++) {
            if (tokens[index].includes("?")) {
                missingDigitPosition = index;
                break;
            }
        }

        if (missingDigitPosition == 0) {
            let evalToken = (parseInt(tokens[6], 10) - parseInt(tokens[4], 10)) / parseInt(tokens[2], 10);
            return this.getMissingNumberBySplittingDigits(tokens[0], evalToken);
        } else if (missingDigitPosition == 2) {
            let evalToken = (parseInt(tokens[6], 10) - parseInt(tokens[4], 10)) / parseInt(tokens[0], 10);
            return this.getMissingNumberBySplittingDigits(tokens[2], evalToken);
        } else if (missingDigitPosition == 4) {
            let evalToken = parseInt(tokens[6], 10) - parseInt(tokens[0], 10) * parseInt(tokens[2], 10);
            return this.getMissingNumberBySplittingDigits(tokens[4], evalToken);
        } else if (missingDigitPosition == 6) {
            let evalToken = parseInt(tokens[0], 10) * parseInt(tokens[2], 10) + parseInt(tokens[4], 10);
            return this.getMissingNumberBySplittingDigits(tokens[6], evalToken);
        }

        return -1;
    }
}


const equationSolver = new FixEquation();

// Test cases:
console.log(equationSolver.findMissingDigit('42 * 47 + 2 = 1?76'));  //9
console.log(equationSolver.findMissingDigit('4? * 47 + 2 = 1976'));  //2
console.log(equationSolver.findMissingDigit('42 * ?7 + 2 = 1976'));  //4
console.log(equationSolver.findMissingDigit('42 * ?47 + 2 = 1976')); //-1
console.log(equationSolver.findMissingDigit('2 * 12? + 2 = 247'));   //-1