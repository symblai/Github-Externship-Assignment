// Write your code here
// class: FixEquation
// Method: findMissingDigit
// Parameters: String
// Returns: Integer

// Constraints
// 1 <= equation.length <= 4
// Each character in each of A, B, C, D will be either a digit ('0'-'9') or a question mark ('?')
// There will be exactly one question mark in equation
// The numbers represented by A, B, C, D will not have leading zeros

class FixEquation{
    // equation is in the form of A * B + C = D
    findMissingDigit(equation) {
        
        // extract all the variables from the given equation.
        let a = equation.substring(0,equation.indexOf("*")).trim();
        let b = equation.substring(equation.indexOf("*") + 1,equation.indexOf("+")).trim();
        let c = equation.substring(equation.indexOf("+") + 1,equation.indexOf("=")).trim();
        let d = equation.substring(equation.indexOf("=") + 1).trim();

        // find the missing digit in the equation.
        let count = 0;

        // if "?" in digit "a" is found, set count = 0.
        if (a.includes("?")){
            count = 0;
        } 
        // if "?" in digit "b" is found, set count = 1.
        else if (b.includes("?")){
            count = 1;
        }
        // if "?" in digit "c" is found, set count = 2.
        else if (c.includes("?")){
            count = 2;
        }
        // if "?" in digit "d" is found, set count = 3.
        else if (d.includes("?")){
            count = 3;
        }

        // to calculate value of "temp" variable, form the some equations.
        // A = (D - C) / B
        // B = (D - C) / A
        // C = D - AB
        // D = AB + C

        let temp=0, index;

        // if "?" in digit "a" is found, calculate value of "temp" variable.
        // a is substring of temp, so replace "?" with the value of "temp".
        // if temp == a, return integer value of "temp".
        // else return -1.
        if (count === 0){
            // Compute A = (D - C) / B
            let B = parseInt(b);
            let C = parseInt(c);
            let D = parseInt(d);
            if(B===0) console.log(-1);
            temp=(D - C) / B;
            index = a.indexOf("?");
            temp = temp.toString();
            a=a.substr(a,index)+temp[index]+a.substr(index+temp.length);
            if (temp===a) console.log(parseInt(temp[index]));
            else console.log(-1);
        }

        // if "?" in digit "b" is found, calculate value of "temp" variable.
        // b is substring of temp, so replace "?" with the value of "temp".
        // if temp == b, return integer value of "temp".
        // else return -1.
        else if (count === 1){
            let A = parseInt(a);
            let C = parseInt(c);
            let D = parseInt(d);
            if(A===0) console.log(-1);
            temp=(D - C) / A;
            index=b.indexOf("?");
            temp=temp.toString();
            b=b.substr(b,index)+temp[index]+b.substr(index+temp.length);
            if (temp===b) console.log(parseInt(temp[index]));
            else console.log(-1);
        }

        // if "?" in digit "c" is found, calculate value of "temp" variable.
        // c is substring of temp, so replace "?" with the value of "temp".
        // if temp == c, return integer value of "temp".
        // else return -1.
        else if (count === 2){
            let A = parseInt(a);
            let B = parseInt(b);
            let D = parseInt(d);
            temp = (D - A * B);
            index = c.indexOf("?");
            temp = temp.toString();
            c=c.substr(c,index)+temp[index]+c.substr(index+temp.length);
            if (temp===c) console.log(parseInt(temp[index]));
            else console.log(-1);
        }

        // if "?" in digit "d" is found, calculate value of "temp" variable.
        // d is substring of temp, so replace "?" with the value of "temp".
        // if temp == d, return integer value of "temp".
        // else return -1.
        else if (count === 3){
            let A = parseInt(a);
            let B = parseInt(b);
            let C = parseInt(c);
            temp = (A * B + C);
            index = d.indexOf("?");
            temp = temp.toString();
            d=d.substr(d,index)+temp[index]+d.substr(index+temp.length);
            if (temp===d) console.log(parseInt(temp[index]));
            else console.log(-1);
        }

        else {
            console.log(-1);
        }
    }
}

// Test Cases
const solve = new FixEquation();

solve.findMissingDigit("42 * 47 + 2 = ?976");     // output will be 1
solve.findMissingDigit("?2 * 47 + 2 = 1976");     // output will be 4
solve.findMissingDigit("4? * 47 + 2 = 1976");     // output will be 2
solve.findMissingDigit("42 * ?7 + 2 = 1976");     // output will be 4
solve.findMissingDigit("42 * 4? + 2 = 1976");     // output will be 7
solve.findMissingDigit("42 * 47 + ? = 1976");     // output will be 2
solve.findMissingDigit("42 * 47 + 2? = 1976");    // output will be -1
solve.findMissingDigit("42 * ?47 + 2 = 1976");    // output will be -1
