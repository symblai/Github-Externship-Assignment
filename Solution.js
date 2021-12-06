// Write your code here
class FixEquation {
    
    compareterm = (term, term_correct) => {   
        const idx=term.indexOf("?")
        let tc_string=term_correct.toString()
        if(term.length!=tc_string.length)     
        return -1
        var tp=term.replace("?",tc_string[idx])  
        if(tp==tc_string)                        
        return parseInt(tc_string[idx])
        else
        return -1;
    }
    findMissingDigit = (equation) => {
        const terms = equation.split(" "); 
        if( terms.length!=7)             
        return -1
        let A = terms[0];                  
        let B = terms[2];
        let C = terms[4];
        let D = terms[6];
        if (A.includes("?")) {
            const num = parseInt(D) - parseInt(C)
            const temp = parseInt(B)
            if (temp == 0)           
                return -1;
            if (num % temp != 0)     
                return -1;
            const A_correct = num / temp
            return this.compareterm(A, A_correct)
        }
        else if (B.includes("?")) {
            const num = parseInt(D) - parseInt(C)
            const temp = parseInt(A)                   
            if (temp == 0)
                return -1;
            if (num % temp != 0)     
                return -1;
            const B_correct = num / temp
            return this.compareterm(B, B_correct)
        }
        else if (C.includes("?")) {
            const C_correct = parseInt(D) - (parseInt(A) * parseInt(B))
            return this.compareterm(C, C_correct)
        }
        else if (D.includes("?")) {
            const D_correct = (parseInt(A) * parseInt(B)) + parseInt(C)

            return this.compareterm(D, D_correct)
        }
        else
            return -1;
    }
}
let convertor=new FixEquation()
console.log(convertor.findMissingDigit("42 * 47 + 2 = 1?76"))
console.log(convertor.findMissingDigit("4? * 47 + 2 = 1976"))
console.log(convertor.findMissingDigit("42 * ?7 + 2 = 1976"))
console.log(convertor.findMissingDigit("42 * ?47 + 2 = 1976"))
console.log(convertor.findMissingDigit("2 * 12? + 2 = 247"))
