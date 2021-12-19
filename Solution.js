// Write your code here

class FixEquation {

    //findMissingDigit: Method for finding the missing digit in the given equation of the format "A * B + C = D";
    findMissingDigit(string) {

        //extracting the terms from the equation
        let A = string.slice(0, string.indexOf("*") - 1);
        let B = string.slice(string.indexOf("*") + 2, string.indexOf("+") - 1);
        let C = string.slice(string.indexOf("+") + 2, string.indexOf("=") - 1);
        let D = string.slice(string.indexOf("=") + 2);
        let result, unknownTerm;

        //Solving the equation for unknown term
        if (isNaN(A)) {
            result = String((Number(D) - Number(C)) / Number(B));
            unknownTerm = A;
        }
        else if (isNaN(B)) {
            result = String((Number(D) - Number(C)) / Number(A));
            unknownTerm = B;
        }
        else if (isNaN(C)) {
            result = String(Number(A) * Number(B) - Number(D));
            unknownTerm = C;
        }
        else {
            result = String(Number(A) * Number(B) + Number(C));
            unknownTerm = D;
        }

        //checking for valid result and returning correct response
        if (unknownTerm.length === result.length) {
            let iq = unknownTerm.indexOf("?");
            if (result === (unknownTerm.slice(0, iq) + result[iq] + unknownTerm.slice(iq + 1))) {
                return result[iq]
            }
            else return -1;
        }
        else {
            return -1;
        }
    }
}

//sample testcases
var testCases = [
    "42 * 47 + 2 = 1?76",
    "4? * 47 + 2 = 1976",
    "42 * ?7 + 2 = 1976",
    "42 * ?47 + 2 = 1976",
    "2 * 12? + 2 = 247"]

//main starter function
function main(testCases) {
    const solution = new FixEquation();
    testCases.forEach(eq => {
        console.log(solution.findMissingDigit(eq));
    });
}

//main funcion
main(testCases);