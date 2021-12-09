class FixEquation {

    // Finds which variable is having '?'
    search = (A, B, C, D) => {

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
    };

    // Checks for the missing digit if possible
    check = (toBeChecked, answer) => {

        if (toBeChecked.length !== answer.length) {
            return -1;
        }

        const index = toBeChecked.indexOf('?');
        const digit = answer.charAt(index);

        return parseInt(digit);
    };

    // Calculates the solution of the equation to find missing digit
    calculate = (A, B, C, D, choice) => {

        let ans;

        switch (choice) {
            case 'A':
                ans = (parseInt(D) - parseInt(C)) / parseInt(B);
                return this.check(A, ans.toString());

            case 'B':
                ans = (parseInt(D) - parseInt(C)) / parseInt(A);
                return this.check(B, ans.toString());

            case 'C':
                ans = parseInt(D) / (parseInt(B) * parseInt(A));
                return this.check(C, ans.toString());

            case 'D':
                ans = parseInt(A) * parseInt(B) + parseInt(C);
                return this.check(D, ans.toString());

            default:
                return -1;
        }
    };

    findMissingDigit = (equation) => {

        // extracting variables
        const variables = equation.split(' ');

        const A = variables[0];
        const B = variables[2];
        const C = variables[4];
        const D = variables[6];

        const choice = this.search(A, B, C, D);

        return this.calculate(A, B, C, D, choice);
    }
}

// Sample test cases
const tests = [
    '42 * 47 + 2 = 1?76',
    '4? * 47 + 2 = 1976',
    '42 * ?7 + 2 = 1976',
    '42 * ?47 + 2 = 1976',
    '2 * 12? + 2 = 247',
];

// driver code
tests.forEach((test, index) => {

    const obj = new FixEquation();
    const digit = obj.findMissingDigit(test);

    console.log(`Test Case ${index+1}. Equation : ${test}`);

    const solution = digit === -1 ? `Solution not possible, answer = -1` : `Missing digit = ${digit}`;
    console.log(`Solution : ${solution}\n`);

});