// Write your code here
class FixEquation {
    findMissingDigit(inputStr) {
        // split the input into A,B,C,D
        let splitStr = inputStr.split(/[*/+=]/);
        let invalidVar = -1;

        // remove white space
        splitStr = splitStr.map((s) => {
            return s.trim();
        });

        // find the missing variable
        if (splitStr[0].includes('?')) invalidVar = 0;
        else if (splitStr[1].includes('?')) invalidVar = 1;
        else if (splitStr[2].includes('?')) invalidVar = 2;
        else if (splitStr[3].includes('?')) invalidVar = 3;

        let [A, B, C, D] = splitStr;
        let newStr;
        if (invalidVar === 0) {
            if (B == 0) return -1;
            C = parseInt(C);
            B = parseInt(B);
            D = parseInt(D);
            newStr = (D - C) / B;
        } else if (invalidVar === 1) {
            if (A == 0) return -1;
            C = parseInt(C);
            D = parseInt(D);
            A = parseInt(A);
            newStr = (D - C) / A;
        } else if (invalidVar === 2) {
            A = parseInt(A);
            D = parseInt(D);
            B = parseInt(B);
            newStr = D - (A * B);
        } else if (invalidVar === 3) {
            C = parseInt(C);
            B = parseInt(B);
            A = parseInt(A);
            newStr = A * B + C;
        }

        if (newStr.toString().length != splitStr[invalidVar].length) {
            return -1;
        } else {
            return parseInt(
                newStr.toString()[splitStr[invalidVar].indexOf('?')]
            );
        }
    }
}

const solutionObject = new FixEquation();

const testcases = [
    '42 * 47 + 2 = 1?76',
    '4? * 47 + 2 = 1976',
    '42 * ?7 + 2 = 1976',
    '42 * ?47 + 2 = 1976',
    '2 * 12? + 2 = 247',
];

testcases.map((input, index) => {
    console.log(`TestCase ${index}: ${solutionObject.findMissingDigit(input)}`);
});
