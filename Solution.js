// Write your code here

//* Class: FixEquation - Class declaration
class FixEquation {
    //* Initializing an object
    constructor(string) {
        this.string = string; //* Parameter: String
    }

    //* Method: findMissingDigit - Declaring method
    findMissingDigit() {
        let iM = this.string.indexOf("*"); //* index of "*"
        let iA = this.string.indexOf("+"); //* index of "+"
        let iE = this.string.indexOf("="); //* index of "="
        let iQ; //* index of "?"

        let A = this.string.slice(0, iM - 1); //* Value of A [in string]
        let B = this.string.slice(iM + 2, iA - 1); //* Value of B [in string]
        let C = this.string.slice(iA + 2, iE - 1); //* Value of C [in string]
        let D = this.string.slice(iE + 2); //* Value of D [in string]
        let result; //* original value of equation

        if (Number.isNaN(Number(A))) {
            iQ = A.indexOf("?"); //* index of "?"
            B = Number(B);
            C = Number(C);
            D = Number(D);
            result = (D - C) / B;

            if (!this.checkLenVal(result, A, iQ)) {
                return -1;
            }
        } else if (Number.isNaN(Number(B))) {
            iQ = B.indexOf("?"); //* index of "?"
            A = Number(A);
            C = Number(C);
            D = Number(D);
            result = (D - C) / A;

            if (!this.checkLenVal(result, B, iQ)) {
                return -1;
            }
        } else if (Number.isNaN(Number(C))) {
            iQ = C.indexOf("?"); //* index of "?"
            B = Number(B);
            A = Number(A);
            D = Number(D);
            result = D - A * B;
            if (!this.checkLenVal(result, C, iQ)) {
                return -1;
            }
        } else if (Number.isNaN(Number(D))) {
            iQ = D.indexOf("?"); //* index of "?"
            B = Number(B);
            C = Number(C);
            A = Number(A);

            result = A * B + C;

            if (!this.checkLenVal(result, D, iQ)) {
                return -1;
            }
        }

        return parseInt(result.toString()[iQ]); //* Returns: Integer
    }

	/*
	 * here we check the length of real answer and value of given equation inorder to check it is decimal or not. Also, to avoid leading zeros and checks the value obtained from equation is correct or not.
	 */
    checkLenVal(result, val, iQ) {
        if (result.toString().length === val.length) {
            if (result === Number(val.slice(0, iQ) + result.toString()[iQ] + val.slice(iQ + 1))) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

let testCase = [
    "42 * 47 + 2 = 1?76",
    "42 * 47 + 2 = 2?76",
    "4? * 47 + 2 = 1976",
    "42 * ?7 + 2 = 1976",
    "42 * ?47 + 2 = 1976",
    "2 * 12? + 2 = 247",
]; //* testcases mentioned in README.md

for (let i = 0; i < testCase.length; i++) {
    let fixIt = new FixEquation(testCase[i]);
    console.log(`${testCase[i]} - Returns: ${fixIt.findMissingDigit()}`);
}

/* Output:

42 * 47 + 2 = 1?76 - Returns: 9
42 * 47 + 2 = 2?76 - Returns: -1
4? * 47 + 2 = 1976 - Returns: 2
42 * ?7 + 2 = 1976 - Returns: 4
42 * ?47 + 2 = 1976 - Returns: -1
2 * 12? + 2 = 247 - Returns: -1

*/
