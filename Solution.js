
class FixEquation {

    /*
        returns all possible strings for a input string by replacing
        '?' with all 0 to 9 digits
    */
    getAllProbables(string) {

        let PrabableStringArray = [];
        if (string.includes('?') === false) {
            /*
                if the input string contains no '?' then, that
                itself is the only probable string
            */
            PrabableStringArray.push(string);
            return PrabableStringArray;
        }

        for (let i = 0; i <= 9; i++) {
            let probableString = string;
            let digit = i.toString();
            probableString = probableString.replace("?", digit);
            PrabableStringArray.push(probableString);
        }
        return PrabableStringArray;
    }

    checkEquation(A, B, C, D) {
        A = parseInt(A);
        B = parseInt(B);
        C = parseInt(C);
        D = parseInt(D);

        /*  
           Check whether A, B, C, D satisfy the equation => 
           A * B + C = D
        */
        let LHS = (A * B) + C;
        let RHS = D;

        return LHS === RHS;
    }

    /*
    functionality of findMissingDigit() : 
        receives a input Equation haveing the form A * B + C = D
        constraints:
        *  Each of A, B, C, D will be a nonempty string of 1 to 4 characters, i.e., 1 <= length of A, B, C, D <= 4.
            means in the solved equation, each of A,B,C,D can have value ranging form 0 to 9999
        *  Each character in each of A, B, C, D will be either a digit ('0'-'9') or a question mark ('?').
        *  There will be exactly one question mark in equation.
        *  The numbers represented by A, B, C, D will not have leading zeros.
    */
    findMissingDigit(equation) {

        if (!equation) {
            return "error";
        }

        let operatorOperandArray = equation.split(" ");

        let A = operatorOperandArray[0];
        let B = operatorOperandArray[2];
        let C = operatorOperandArray[4];
        let D = operatorOperandArray[6];

        /*
           get Array having all the probable strings
           for strings A, B, C, D
        */
        let PrabableStringArrayA = this.getAllProbables(A);
        let PrabableStringArrayB = this.getAllProbables(B);
        let PrabableStringArrayC = this.getAllProbables(C);
        let PrabableStringArrayD = this.getAllProbables(D);

        let ArrayLengthA = PrabableStringArrayA.length;
        let ArrayLengthB = PrabableStringArrayB.length;
        let ArrayLengthC = PrabableStringArrayC.length;
        let ArrayLengthD = PrabableStringArrayD.length;

        let flag;

        for (let i = 0; i <= 9; i++) {

            let probableA = PrabableStringArrayA[i % ArrayLengthA];
            let probableB = PrabableStringArrayB[i % ArrayLengthB];
            let probableC = PrabableStringArrayC[i % ArrayLengthC];
            let probableD = PrabableStringArrayD[i % ArrayLengthD];

            flag = this.checkEquation(probableA, probableB, probableC, probableD);

            if (flag === true) {

                /*
                    if the string has length more than one, AND the first character of the string
                    is '?' then the string has a leading zero
                */
                if (A.charAt(0) == '?' && A.length != 1 && i == 0) {
                    return -1;
                } else if (B.charAt(0) == '?' && B.length != 1 && i == 0) {
                    return -1;
                } else if (C.charAt(0) == '?' && C.length != 1 && i == 0) {
                    return -1;
                } else if (D.charAt(0) == '?' && D.length != 1 && i == 0) {
                    return -1;
                } else {
                    return i;
                }
            }
        }

        return -1;

    }
};


module.exports = {
    FixEquation
};


