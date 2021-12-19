// Write your code here
// Code passing all test cases

class FixEquation {

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

    check = (toCheck, answer) => {

        if (toCheck.length !== answer.length) {
            return -1;
        }

        const index = toCheck.indexOf('?');
        const digit = answer.charAt(index);

        return parseInt(digit);
    };

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

        const variables = equation.split(' ');

        let A = variables[0];
        let B = variables[2];
        let C = variables[4];
        let D = variables[6];

        let choice = this.search(A, B, C, D);

        return this.calculate(A, B, C, D, choice);
    }
}

const testcases = [
    '42 * 47 + 2 = 1?76',
    '4? * 47 + 2 = 1976',
    '42 * ?7 + 2 = 1976',
    '42 * ?47 + 2 = 1976',
    '2 * 12? + 2 = 247',
];

testcases.forEach((test) => {

    const obj = new FixEquation();
    const digit = obj.findMissingDigit(test);

    console.log(`Equation : ${test}`);

    const solution = digit === -1 ? `-1` : `${digit}`;
    console.log(`Returns : ${solution}\n`);

}); 
