/*
Symblai - open source contribution - Github Externship assignment
    ~done by Jotheeswaran N
*/
class FixEquation {
    constructor(equation){
        this.equation = equation;
    }
    findMissingDigit() {
        let terms = this.equation.split(/[*+=]/);      //The equation is split into strings and stored in a array 
        var integers = []; 
        let integerIndex , missingDigitIndex, missingDigit ;
        for (let key in terms) {                        //The strings are converted to integers except the term with unknown variable
            if (terms[key].includes("?") != true) {
                integers.push(parseInt(terms[key]));
            }
            else{
                integers.push((terms[key]));
                integerIndex = key;                     //The index of term with unknown variable is determined
            }
        }
        missingDigitIndex = integers[integerIndex].indexOf("?");
        integers[integerIndex] = integers[integerIndex].replace("?",0); //The index of unknown variable "?" is determined
         
        if (parseInt(integers[0]) * parseInt(integers[1]) + parseInt(integers[2]) == parseInt(integers[3]) ) {  
            return -1;                                  //The leading non zero contraint is verified and if present present the program returns -1
        }else{
            for (let missingDigit = 1; missingDigit < 10; missingDigit++) {
                integers[integerIndex] = (integers[integerIndex].substr(0,missingDigitIndex)) + (missingDigit.toString()) + (integers[integerIndex].substr(missingDigitIndex+1)).toString();
                if (parseInt(integers[0]) * parseInt(integers[1]) + parseInt(integers[2]) == parseInt(integers[3]) ) {
                    return missingDigit;                           //The question looped with all the numbers from 0-9 .If a number satifies the equation, that number is returned as the missing number.
                    break;
                }   
            }
        }       
        return -1;                              // -1 is returned , if the equation has no solution
    }
}

let equation = new FixEquation("42 * 47 + 2 = 197?");
let theMissingDigit = equation.findMissingDigit();
console.log(theMissingDigit);
