// Write your code here
class FixEquation {
    constructor(a) {
        this.equation = a;
    }
    findMissingDigit() {
        var eqn = this.equation.split(' '); //split the string on space
        var A = eqn[0];
        var B = eqn[2];
        var C = eqn[4];
        var D = eqn[6];
        var elementWithMark;
        var result;

        if(D.includes('?')){ //if D contains '?'
            result = parseInt(A) * parseInt(B) + parseInt(C);
            elementWithMark = D;
        }else if(A.includes('?')){ //if A contains '?'
            result = (parseInt(D)-parseInt(C))/parseInt(B);
            elementWithMark = A;
        }else if(B.includes('?')){ //if B contains '?'
            result = (parseInt(D)-parseInt(C))/parseInt(A);
            elementWithMark = B;
        }else if(C.includes('?')){ //if C contains '?'
            result = (parseInt(D)-(parseInt(A)*parseInt(B)));
            elementWithMark = C;
        }
        result = String(result); // change result type back to string
        if(result.length !== elementWithMark.length){ // if the length of computed answer and the one with '?' isn't same, then return -1
            return -1;
        }
        for(var i = 0; i < result.length; i++) {
            if(result[i] !== elementWithMark[i] && elementWithMark[i] !== '?') { // if we get a index where the character of result and elementWithMark isn't matching plus it's not a '?' too
                return -1;
            }else if(elementWithMark[i] === '?'){ // on getting the index of '?', return the charcter from computed result on the corresponding index
                return parseInt(result[i]);
            }
        }
        return -1; // if every check fails, return -1
    }
}
let magic = new FixEquation('42 * 47 + 2 = 1?76');
let num = magic.findMissingDigit();
console.log(num);
