class FixEquation {

    // Function to find the misssing digit in equation
    findMissingDigit(equation) {

        // Extracting A, B, C and D from the equation
        let A = equation.substring(0, equation.indexOf('*'))
        let B = equation.substring(equation.indexOf('*') + 1, equation.indexOf('+'))
        let C = equation.substring(equation.indexOf('+') + 1, equation.indexOf('='))
        let D = equation.substring(equation.indexOf('=') + 1)

        // Finding whether missing digit is in A,B,C or D
        let missingIn = -1
        if (A.indexOf('?') !== -1) {
            missingIn = 'A'
        } else if (B.indexOf('?') !== -1) {
            missingIn = 'B'
        } else if (C.indexOf('?') !== -1) {
            missingIn = 'C'
        } else if (D.indexOf('?') !== -1) {
            missingIn = 'D'
        }

        // solving the equation and getting the missing digit
        let ans = this.getMissingDigitInNumber(A, B, C, D, missingIn)
        return ans
    }

    // Function to get the missing digit from the number
    getMissingDigitInNumber(A, B, C, D, missingIn) {
        let missingNumber = -1
        let missingDigit = -1

        switch (missingIn) {
            case 'A':
                B = parseInt(B)
                C = parseInt(C)
                D = parseInt(D)

                // since missing number must be an integer, remainder nust be zero
                if ((D - C) % B === 0) {
                    missingNumber = (D - C) / B  // calculating A as (D - C) / B
                    missingDigit = this.compareNumbers(A, missingNumber.toString())
                }
                break

            case 'B':
                A = parseInt(A)
                C = parseInt(C)
                D = parseInt(D)

                if ((D - C) % A === 0) {
                    missingNumber = (D - C) / A // calculating B as (D - C) / A
                    missingDigit = this.compareNumbers(B, missingNumber.toString())
                }
                break;

            case 'C':
                A = parseInt(A)
                C = parseInt(C)
                D = parseInt(D)

                missingNumber = D - (A * B) // calculating C as D - (A * B)
                missingDigit = this.compareNumbers(C, missingNumber.toString())
                break;
            case 'D':
                A = parseInt(A)
                B = parseInt(B)
                C = parseInt(C)

                missingNumber = (A * B) + C // calculating D as (A * B) + C
                missingDigit = this.compareNumbers(D, missingNumber.toString())
                break
        }
        return missingDigit
    }

    // Function to compare two numbers and find the missing digit, if exists
    compareNumbers(number, actualNumber) {
        number = number.trim()  // removing trailing spaces

        // numbers must be of same length
        if (number.length !== actualNumber.length) {
            return -1
        }

        let missingDigit = -1
        let idx = number.indexOf('?')
        missingDigit = actualNumber.charAt(idx) // finding the missing digit

        number = number.replace("?", missingDigit) // replacing the missing digit in number
        if (number !== actualNumber) {  // if the numbers are not same, then it means they differ by at least a digit, hence no solution
            return -1;
        }
        return parseInt(missingDigit)
    }
}

let FixEquationObj = new FixEquation() // creating an object
let sample_testcases = ["42 * 47 + 2 = 1?76", "4? * 47 + 2 = 1976", "42 * ?7 + 2 = 1976", "42 * ?47 + 2 = 1976", "2 * 12? + 2 = 247"]

// testing against all sample testcases
console.log("======= Sample Tests ==========")
sample_testcases.map(testcase => {
    console.log(testcase)
    console.log(FixEquationObj.findMissingDigit(testcase))
    console.log()
})

let extra_testcases = ["42 * 47 + 2 = 1?73", "? * 47 + 2 = 1976", "42 * ?756 + 2 = 1976", "42 * ?4 + 2 = 1976", "2 * 62? + 2 = 247"]
console.log("======= Extra Tests ==========")
extra_testcases.map(testcase => {
    console.log(testcase)
    console.log(FixEquationObj.findMissingDigit(testcase))
    console.log()
})

// Time complexity: O(n), where n is the length of the equation 
