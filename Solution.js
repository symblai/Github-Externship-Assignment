// Write your code here

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

class FixEquation {
    // Function: findMissingDigit
    // Parameters : String
    // Returns : Integer
    // Method signature : function findMissingDigit(equation)
    findMissingDigit(equation) {
        // get input and split
        let numbers = []
        let unknown = -1
        let tokens = equation.split(" ")
        let temp = ""

        for (let i = 0; i < tokens.length; i+=2) {
            if (tokens[i].search("\\?") > -1) {
                temp = tokens[i]
                unknown = i/2
            } else {
                // convert to int
                temp = parseInt(tokens[i])
            }
            numbers.push(temp)
        }

        let projected = 0
        let A = numbers[0]
        let B = numbers[1]
        let C = numbers[2]
        let D = numbers[3]

        // find the value of the unknown number
        switch (unknown) {
            case 0:
                projected = (D - C) / B
                break;

            case 1:
                projected = (D - C) / A
                break;

            case 2:
                projected = D - (A * B)
                break;

            case 3:
                projected = (A * B) + C
                break;
        
            default:
                break;
        }

        // check if projected is not floating
        if (projected % 1 != 0) {
            return (-1)
        }
        // if ? is a leading zero
        projected = String(projected)
        // console.log(projected);
        // console.log(tokens[unknown * 2]);

        if (tokens[unknown * 2].search(projected) > -1) {
            return (-1)
        }

        // check if all digits other than ? are same
        for (let i = 0; i < projected.length; i++) {
            if (tokens[unknown * 2][i] == '?') {
                return (parseInt(projected[i]))
                // break
            }
        }
    }
}


readline.question(`Equation: `, eqn => {
    const obj = new FixEquation();
    console.log(obj.findMissingDigit(eqn))
    readline.close()
})