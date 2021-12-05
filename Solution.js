// Write your code here
class FixEquation {
    missingDigit(equation) {
        var A = equation.substring(0, equation.indexOf("*"));
        var B = equation.substring(equation.indexOf("*")+1, equation.indexOf("+"));
        var C = equation.substring(equation.indexOf("+")+1, equation.indexOf("="));
        var D = equation.substring(equation.indexOf("=")+1);
        var result = 0;
        var num;
        if(A.includes("?")) {
            result = this.findMissingDigitInA(parseInt(B),parseInt(C),parseInt(D));
            num = A;
        } else if(B.includes("?")) {
            result = this.findMissingDigitInB(parseInt(A),parseInt(C),parseInt(D))
            num = B;
        } else if(C.includes("?")) {
            result = this.findMissingDigitInC(parseInt(A),parseInt(B),parseInt(D));
            num = C
        } else {
            result = this.findMissingDigitInD(parseInt(A),parseInt(B),parseInt(B));
            num = D
        }

        var digit = this.findTheDigit(result.toString(), num.trim());
        console.log(digit)

    }

    findTheDigit(result, num) {
        if(result.length !== num.length) return -1;
        for(var i=0; i<num.length; i++) {
            if(num[i] === "?") return result[i]
        }
    }

    findMissingDigitInA(B,C,D) {
        return (D-C)/B;
    } 

    findMissingDigitInB(A,C,D) {
        return (D-C)/A;
    }

    findMissingDigitInC(A,B,D) {
        return D-A*B;
    }

    findMissingDigitInD(A,B,C) {
        return A*B+C;
    }
}

var fixEquation = new FixEquation()

fixEquation.missingDigit("42 * 47 + ? = 1976")