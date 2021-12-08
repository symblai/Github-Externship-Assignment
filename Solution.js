// Write your code here
class FixEquation {
    findMissingDigit(equation) {
        // get A, B, C, D from equation
        let A = equation.substring(0, equation.indexOf('*'));
        let B = equation.substring(equation.indexOf('*') + 1, equation.indexOf('+'));
        let C = equation.substring(equation.indexOf('+') + 1, equation.indexOf('='));
        let D = equation.substring(equation.indexOf('=') + 1);

        // which of A, B, C, D has ?
        let missingDigit = -1;
        if (A.indexOf('?') !== -1) {
            missingDigit = this.getMissingDigit(A, B, C, D, 'A');
        } else if (B.indexOf('?') !== -1) {
            missingDigit = this.getMissingDigit(A, B, C, D, 'B');
        } else if (C.indexOf('?') !== -1) {
            missingDigit = this.getMissingDigit(A, B, C, D, 'C');
        } else if (D.indexOf('?') !== -1) {
            missingDigit = this.getMissingDigit(A, B, C, D, 'D');
        }
        return missingDigit;
    }

    getMissingDigit(a, b, c, d, missingDigitIn) {
        let missingNumber = -1;
        let missingDigit = -1;
        let temp = -1;

        switch (missingDigitIn) {
            case 'A':
                // convert b, c, d to integer
                b = parseInt(b);
                c = parseInt(c);
                d = parseInt(d);

                // get missing number i.e a from a*b + c = d
                temp = d - c;
                // taking modulo of temp with b since missing number should be integer
                temp % b === 0 ? missingNumber = temp/b : missingNumber = -1;
                missingDigit = this.getMissingDigitUtil(a, missingNumber.toString());
                break;

            case 'B':
                a = parseInt(a);
                c = parseInt(c);
                d = parseInt(d);

                temp = d - c;
                temp % a === 0 ? missingNumber = temp/a : missingNumber = -1;
                missingDigit = this.getMissingDigitUtil(b, missingNumber.toString());
                break;
            
            case 'C':
                a = parseInt(a);
                b = parseInt(b);
                d = parseInt(d);

                missingNumber = d - (a*b);
                missingDigit = this.getMissingDigitUtil(c, missingNumber.toString());
                break;
            case 'D':
                a = parseInt(a);
                b = parseInt(b);
                c = parseInt(c);

                missingNumber = (a*b) + c;
                missingDigit = this.getMissingDigitUtil(d, missingNumber.toString());
                break;
        }
        return missingDigit;
    }
    getMissingDigitUtil(number, missingNumber) {
        // remove trailing and leading spaces from number
        number = number.trim();
        
        // if length is not equal then return -1
        // This also handles the case where missing digit is the first digit and is 0
        // but according to the constraints, there cannot be 0 at the start of the number
        if(number.length !== missingNumber.length) {
            return -1;
        }
        let missingDigit = -1;
        // find index of missing digit ?
        let index = number.indexOf('?');
        missingDigit = missingNumber.charAt(index);

        return parseInt(missingDigit);
    }
}


let FixEquationObj = new FixEquation();
let testcases = ["42 * 47 + 2 = 1?76","4? * 47 + 2 = 1976","42 * ?7 + 2 = 1976","42 * ?47 + 2 = 1976", "2 * 12? + 2 = 247"];

for(let i = 0; i < testcases.length; i++) {
    console.log(testcases[i]);
    console.log(FixEquationObj.findMissingDigit(testcases[i]));
    console.log();
}