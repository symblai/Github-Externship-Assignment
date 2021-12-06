// Write your code here
class fixEquation{
    findMissingDigit(eq) {

        // equation is in the form of A * B + C = D

        // extract all the variables from the given equation.

        const a = eq.substring(0,eq.indexOf("*")).trim();
        const b = eq.substring(eq.indexOf("*") + 1,eq.indexOf("+")).trim();
        const c = eq.substring(eq.indexOf("+") + 1,eq.indexOf("=")).trim();
        const d = eq.substring(eq.indexOf("=") + 1).trim();

        // remove whitespaces from the string.

        let unknownEq = "";
        if (a.includes("?")){
            unknownEq = a.trim();
        } 
        else if (b.includes("?")){
            unknownEq = b.trim();
        }
        else if (c.includes("?")){
            unknownEq = c.trim();
        }
        else if (d.includes("?")){
            unknownEq = d.trim();
        }

        // convert string to integer for calculation.

        let A = parseInt(a)
        let B = parseInt(b)
        let C = parseInt(c)
        let D = parseInt(d)

        // to calculate value of unknown variable, form the some equations.
        // A = (D - C) / B
        // B = (D - C) / A
        // C = D - AB
        // D = AB + C

        let unknownVarValue = 0, answer,index;

        // check what is unknown equation and then find the value of unknown variable, then compare the lengths of unknown equation and value if its true log the unknown digit else log -1.
    
        if (unknownEq === a){
            unknownVarValue = (D - C) / B;
            answer = unknownVarValue.toString();
            if (unknownEq.length === answer.length){
                console.log(parseInt(answer[unknownEq.indexOf("?")]));
            }
            else{
                console.log("-1");
            }
        }
        
        else if (unknownEq === b){
            unknownVarValue = (D - C) / A;
            answer = unknownVarValue.toString();
            if (unknownEq.length === answer.length){
                console.log(parseInt(answer[unknownEq.indexOf("?")]));
            }
            else{
                console.log("-1");
            }
        }

        else if (unknownEq === c){
            unknownVarValue = D - A * B;
            answer = unknownVarValue.toString();
            if (unknownEq.length === answer.length){
                console.log(parseInt(answer[unknownEq.indexOf("?")]));
            }
            else{
                console.log("-1");
            }
        }

        else if (unknownEq === d){
            unknownVarValue = A * B + C;
            answer = unknownVarValue.toString();
            if (unknownEq.length === answer.length){
                console.log(parseInt(answer[unknownEq.indexOf("?")]));
            }
            else{
                console.log("-1");
            }
        }

    }
}

const solve = new fixEquation();

solve.findMissingDigit("42 * 47 + 2 = ?976");     // output will be 1
solve.findMissingDigit("?2 * 47 + 2 = 1976");     // output will be 4
solve.findMissingDigit("4? * 47 + 2 = 1976");     // output will be 2
solve.findMissingDigit("42 * ?7 + 2 = 1976");     // output will be 4
solve.findMissingDigit("42 * 4? + 2 = 1976");     // output will be 7
solve.findMissingDigit("42 * 47 + ? = 1976");     // output will be 2
solve.findMissingDigit("42 * 47 + 2? = 1976");    // output will be -1
solve.findMissingDigit("42 * ?47 + 2 = 1976");    // output will be -1
