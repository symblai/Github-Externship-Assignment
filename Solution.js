// Write your code here
class FixEquation {
    constructor(a) {
        this.equation = a;
    }
    findMissingDigit() {
        const eqn = this.equation.split(' ');
        const A = eqn[0], B = eqn[2], C = eqn[4], D = eqn[6];
        let mark, result;
        if (A.includes('?')) {
            result = (parseInt(D) - parseInt(C)) / parseInt(B);
            mark = A;
        }
        else if (B.includes('?')) {
            result = (parseInt(D) - parseInt(C)) / parseInt(A);
            mark = B;
        }
        else if (C.includes('?')) {
            result = parseInt(D) - parseInt(A) * parseInt(B);
            mark = C;
        }
        else if (D.includes('?')) {
            result = parseInt(A) * parseInt(B) + parseInt(C);
            mark = D;
        }
        if (result < 0 || !Number.isInteger(result)) {
            return -1;
        }
        result = result.toString();
        if (result.length !== mark.length) {
            return -1;
        }
        // console.log(mark)
        let final_ans;
        for (let i = 0; i < result.length; i++) {
            // console.log(mark[i])
            if (result[i] !== mark[i] && mark[i] !== '?') {
                return -1;
            }
            if (mark[i] === '?') {
                // console.log("yo")
                final_ans =  parseInt(result[i]);
            }
        }
        return final_ans;
        // return -1;

    }
}
var test = new FixEquation('2 * ? + 1 = 15');
var fun = test.findMissingDigit();
console.log("Missing Digit is " + fun);
