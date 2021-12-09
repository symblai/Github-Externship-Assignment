// Write your code here
class FixEquation {

    findMissingDigit(equation) {
        if (!equation) return -1;

        const values = equation.split(/[+,*,=,]/)

        if (!values) return -1;

        let A = values[0].trim();
        let B = values[1].trim();
        let C = values[2].trim();
        let D = values[3].trim();
        let outputString, desiredString;

        if (D.includes('?')) {
            let pA = parseInt(A);
            let pB = parseInt(B);
            let pC = parseInt(C);
            const result = pA * pB + pC;
            outputString = result.toString();
            desiredString = D;
        } else if (A.includes('?')) {
            let pD = parseInt(D);
            let pB = parseInt(B);
            let pC = parseInt(C);
            if ((pD - pC) % pB === 0) {
                const result = (pD - pC) / pB;
                outputString = result.toString();
                desiredString = A;
            } else {
                return -1;
            }
        } else if (B.includes('?')) {
            let pD = parseInt(D);
            let pA = parseInt(A);
            let pC = parseInt(C);
            if ((pD - pC) % pA === 0) {
                const result = (pD - pC) / pA;
                outputString = result.toString();
                desiredString = B;
            } else {
                return -1;
            }
        } else if (C.includes('?')) {
            let pD = parseInt(D);
            let pA = parseInt(A);
            let pB = parseInt(B);
            if (pD % (pA * pB) === 0) {
                const result = pD / (pA * pB);
                outputString = result.toString();
                desiredString = C;
            } else {
                return -1;
            }
        }

        if (outputString.length === desiredString.length) {
            const missingDigitIndex = desiredString.indexOf('?');
            return outputString[missingDigitIndex];
        } else {
            return -1;
        }
    }
}

const Main = () => {
    let solution = new FixEquation();
    const tests = [
        '42 * 47 + 2 = 1?76',
        '4? * 47 + 2 = 1976',
        '42 * ?7 + 2 = 1976',
        '42 * ?47 + 2 = 1976',
        '2 * 12? + 2 = 247',
    ];

    tests.forEach((test, index) => {
        const answer = solution.findMissingDigit(test);
        if (answer === -1) {
            console.log(`Test Case ${index} :
                Equation : ${test}
                Returns: -1
                No solution for the given equation exists, returned -1\n`);
        } else {
            console.log(`Test Case ${index} :
                Equation : ${test}
                Returns: ${answer}
                Missing digit is : ${answer}\n`);
        }
    });
};

Main();
