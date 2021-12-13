// Write your code here
/**
 * 
 * @class FixEquation - It is the base class ---------- ref: JSDoc - https://jsdoc.app/
 * @method findMissingDigit 
 * @param {string} given equation A * B + C = D with a missing digit represented by ? 
 * @returns {integer} returns the missing integer from the equation 
 */

 class FixEquation {
    /**
     * findMissingDigit returns the missing digit for the equation
     * 
     * @param {String} equation
     */
    findMissigDigit(equation) {
        // Splitting the equation using Regex ---------- ref: https://regexr.com/
        const values = equation.split(/\*|\+|=/).map((num) => num.trim());

        // Mapping the values from the given equation
        const [A, B, C, D] = values;

        let ans;
        if (A.includes("?")) {
            const fullAns = (parseInt(D) - parseInt(C)) / parseInt(B)  // The parseInt() function parses a string argument and returns an integer
            ans = this.getActualAns(A, fullAns.toString())             // The includes() determinews whether a string contains the given characters within it or not.
        } else if (B.includes("?")) {
            const fullAns = (parseInt(D) - parseInt(C)) / parseInt(A)
            ans = this.getActualAns(B, fullAns.toString())
        } else if (C.includes("?")) {
            const fullAns = parseInt(D) - (parseInt(A) * parseInt(B))
            ans = this.getActualAns(C, fullAns.toString())
        } else if (D.includes("?")) {
            const fullAns = parseInt(A) * parseInt(B) + parseInt(C)
            ans = this.getActualAns(D, fullAns.toString())
        }

        console.log(`ans for equation ${equation} is `, ans)
    }

    getActualAns(v1, v2) {
        if (v1.length != v2.length) {
            return -1
        }

        for (let i = 0; i < v1.length; i++) {
            if (v1[i] == '?') {
                return v2[i] || -1
            }
        }
        return -1
    }
}

const eq = new FixEquation()
// Test cases:
console.log(eq.findMissigDigit('42 * 47 + 2 = 1?76'));  //9
console.log(eq.findMissigDigit('4? * 47 + 2 = 1976'));  //2
console.log(eq.findMissigDigit('42 * ?7 + 2 = 1976'));  //4
console.log(eq.findMissigDigit('42 * ?47 + 2 = 1976')); //-1
console.log(eq.findMissigDigit('2 * 2? + 2 = 6'));      //-1 

// Output
/* 
ans for equation 42 * 47 + 2 = 1?76 is  9

ans for equation 4? * 47 + 2 = 1976 is  2

ans for equation 42 * ?7 + 2 = 1976 is  4

ans for equation 42 * ?47 + 2 = 1976 is  -1

ans for equation 2 * 2? + 2 = 6 is  -1

*/
