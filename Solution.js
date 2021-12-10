class FixEquation {

    findMissingDigit(equation) {
        if (!equation) return -1;

        const list = equation.split(/[+,*,=,]/);

        let A = list[0].trim();
        let B = list[1].trim();
        let C = list[2].trim();
        let D = list[3].trim();

        if (!list && list.length<4) {
            return -1;
        }
        if (D.includes('?')) {
            let a = parseInt(A);
            let b = parseInt(B);
            let c = parseInt(C);
            const result = a * b + c;
            outputString = result.toString();
            originalString = D;
        } 
        else if (A.includes('?')) {
            let d = parseInt(D);
            let b = parseInt(B);
            let c = parseInt(C);
            if ((d - c) % b === 0) {
                const result = (d - c) / b;
                outputString = result.toString();
                originalString = A;
            } else {
                return -1;
            }
        } else if (B.includes('?')) {
            let d = parseInt(D);
            let a = parseInt(A);
            let c = parseInt(C);
            if ((d - c) % a === 0) {
                const result = (d - c) / a;
                outputString = result.toString();
                originalString = B;
            } else {
                return -1;
            }
        } else if (C.includes('?')) {
            let d = parseInt(D);
            let a = parseInt(A);
            let b = parseInt(B);
            if (d % (a * b) === 0) {
                const result = d / (a * b);
                outputString = result.toString();
                originalString = C;
            } else {
                return -1;
            }
        }

        if (outputString.length === originalString.length) {
            const missingDigitIndex = originalString.indexOf('?');
            return outputString[missingDigitIndex];
        } else {
            return -1;
        }
    }

}

