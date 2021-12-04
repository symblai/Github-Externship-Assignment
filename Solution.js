class FixEquation {

    /**
     * 
     * This is an helper function determines index of the missing number in given equation
     *
     */

    findMissingDigitIndex(spaceSplitEquation) {
        let missingNumberPosition = -1;
        for (let position = 0; position < spaceSplitEquation.length; position++) {

            if (spaceSplitEquation[position].includes("?")) {
                missingNumberPosition = position;
                break;
            }
        }
        return missingNumberPosition;
    }
    /**
     *  
     * This helper function converts required terms to int type
     */
    getNumbers(index, missingDigitNum, spaceplitEquation) {
        let num = -1;
        if (spaceplitEquation[index] != missingDigitNum) {

            num = parseInt(spaceplitEquation[index], 10);
        } else {
            num = missingDigitNum;
        }

        return num
    }

    /**
     * 
     * This function determines the actual value of missing term 
     * 
     */
    findRealNum(A, B, C, D, missgDigitNum) {
        let realNum = -1;

        if (A === missgDigitNum) {
            if ((D - C) % B == 0) {
                realNum = (D - C) / B;
            }
        } else if (B === missgDigitNum) {
            if ((D - C) % A == 0) {
                realNum = (D - C) / A;
            }
        } else if (C === missgDigitNum) {
            if (D - (A * B) >= 0) {
                realNum = D - (A * B);
            }
        } else if (D === missgDigitNum) {
            realNum = A * B + C;
        }
        return realNum.toString();
    }
    /**
     * 
     * This helper function compare the actual value to missing digit number and return the digit  
     */
    findMissingDigitHelper(originalNum, missgDigitNum) {
        let missingDigit = -1;
        if (originalNum.length != missgDigitNum.length || originalNum.charAt(0) === '0') {
            return missingDigit
        }
        let pos = -1;
        for (let index = 0; index < missgDigitNum.length; index++) {
            if (missgDigitNum.charAt(index) === '?') {
                pos = index;
                break;
            }
        }
        return parseInt(originalNum.charAt(pos), 10);
    }

    /***
     * @param {String} - Equation String in format of "A * B + C = D"
     * @returns {int}  Missing Digit
     */

    findMissingDigit(equation) {

        // splitting all the terms in equation by space 
        let spaceSplitEquation = equation.split(" ");

        // finding Index of the term containing missing digit 
        let missingNumberPosition = this.findMissingDigitIndex(spaceSplitEquation);

        // finding missing digit number 
        let missgDigitNum = spaceSplitEquation[missingNumberPosition];

        // converting String terms to Int type except the missing digit term
        let A = this.getNumbers(0, missgDigitNum, spaceSplitEquation);
        let B = this.getNumbers(2, missgDigitNum, spaceSplitEquation);
        let C = this.getNumbers(4, missgDigitNum, spaceSplitEquation);
        let D = this.getNumbers(6, missgDigitNum, spaceSplitEquation);

        // finding the original value of the missing digit term if exists
        let originalNum = this.findRealNum(A, B, C, D, missgDigitNum);

        // comparing missing digit term and orginal number to get missing digit 
        let missingDigit = this.findMissingDigitHelper(originalNum, missgDigitNum);

        return missingDigit;
    }


}

// for testing
let equation = new FixEquation();
console.log(equation.findMissingDigit("42 * 47 + 2 = 1?76"));