// Write your code here
// A * B + C = D

class FixEquation {

    checkVal(a, b) {
        if (a.length != b.length) {
            return -1;
        }

        const i = a.search("\\?");
        const c = b.charAt(i);
        const fixed = a.replace("?", c);

        if (fixed === b) {
            return parseInt(c);
        }

        return -1;

    }

    fixMissingDigit(str) {
        
        const start = 0;
        const aEnd = str.search(" * ");
        const bEnd = str.search(" \\+ ");
        const cEnd = str.search(" = ");
        const end = str.length;

        const a =  str.substring(start, aEnd);
        const b =  str.substring(aEnd + 3, bEnd);
        const c =  str.substring(bEnd + 3, cEnd);
        const d =  str.substring(cEnd + 3, end);

        if (a.includes("?")) {
            const val = (parseInt(d) - parseInt(c))/parseInt(b);
            return this.checkVal(a, val.toString())
        } 

        if (b.includes("?")) {
            const val = (parseInt(d) - parseInt(c))/parseInt(a);
            return this.checkVal(b, val.toString())
        } 
        
        if (c.includes("?")) {
            const val = parseInt(d) - (parseInt(a) * parseInt(b));
            return this.checkVal(c, val.toString())
        } 
        
        if (d.includes("?")) {
            const val = parseInt(a) * parseInt(b) + parseInt(c);
            return this.checkVal(d, val.toString())
        } 

    }


}


const a = new FixEquation();
const res = a.fixMissingDigit("42 * ?7 + 2 = 1976");
console.log(res);

export default FixEquation