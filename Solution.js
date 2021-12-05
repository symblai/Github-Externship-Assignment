// Write your code here
// The format of equation is A*B + C = D
class FixEquation {

    check(string) {
        // iterating string so that anything of '=' or '?' found first '=' found first resembles no ? in left side.
        for (let i = 0; i < string.length; i++) {
            if (string.charAt(i) === '='){
                return true;
            }
            if (string.charAt(i) === '?'){
                return false;
            }
        }
        return true;
    }
    // findQuestion method return value of '?' by comparing the actual value the number could have.
    findQuestion(string, n, target) {
        // checking for the number of digits if exceeds limit will return -1
        if (target < Math.pow(10, n) || target > Math.pow(10, n + 1)) {
            return -1;
        }
        // checking the value of "?" by reverse traversing the number and number_string 
        for (let i = target; i >= 0 && n >= 0; i /= 10, n--) {
            let question = Math.floor(i % 10);
            // if we get "?" we can return the digit found there.
            if (string.charAt(n) === '?') {
                return question;
                // if the number_string and main number doesn't equalise at any point, we return -1; 
            } else if (Number.parseInt(string.substring(n, n + 1), 10) !== question) break;
        }
        return -1;
    }
    // findMissingDigit method returns the missing number i.e replacement of '?'.
     findMissingDigit(string) {
        const elements = string.split(" ");
        let target;
        if (this.check(string)) {
            // here only d has a '?' 
            let a = Number.parseInt(elements[0], 10);
            let b = Number.parseInt(elements[2], 10);
            let c = Number.parseInt(elements[4], 10);
            // getting the numerical value of d
            target = (a * b) + c;
            // getting string value of d given in input
            let dstr = elements[6];
            // finding the value at question mark
            let question = this.findQuestion(dstr, dstr.length - 1, target)
            return question;
        } else {
            // as d doesn't contains "?" taking it's numerical value.
            let d = Number.parseInt(elements[6]);
            // rest all values in string form
            let astr = elements[0];
            let bstr = elements[2];
            let cstr = elements[4];
            let first = Number.parseInt(astr,10);
            let second = Number.parseInt(bstr,10);
            let third = Number.parseInt(cstr,10);
            // checking if a contains "?"
            if (astr.includes("?")) {
                // for the special cases where one side may remain even or odd by entrance of division or typecasting or floor values
                if (second % 2 === 0 && third % 2 === 0 && d % 2 !== 0) {
                    return -1;
                } else {
                    // checking numerical value of a
                    target = ((d - third) /second);
                    // finding the value at question mark
                    let question = this.findQuestion(astr, astr.length - 1, target);
                    return question;
                }
                // getting if b contains "?"
            } else if (bstr.includes("?")) {
                // for the special cases where one side may remain even or odd by entrance of division or typecasting or floor values
                if (third % 2 === 0 && first % 2 === 0 && d % 2 !== 0) {
                    return -1;
                } else {
                    // getting numerical value of b
                    target = (d - third) /first;
                    let question = this.findQuestion(bstr, bstr.length - 1, target);
                    return question;
                }
            } else {
                
                target = d - (first * second);
                let question = this.findQuestion(cstr, cstr.length - 1, target);
                return question;
            }
        }
    }
    
} 

const op = new FixEquation;
console.log(op.findMissingDigit("42 * 2 + 4? = 125"));
// output for this input is 1