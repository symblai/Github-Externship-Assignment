class FixEquation {
    constructor(equation){
        this.equation = equation;
    }
    getEachTerm(equation) {
      const temp = this.equation.split(/[+,*,=,]/);
      return [temp[0].trim(), temp[1].trim(), temp[2].trim(), temp[3].trim()];
    }
    PositionOfQuestionMark(variables) {
      return variables.findIndex((element) => {
        return element.includes("?");
      });
    }
    getMissingNumber(variables, index) {
      if (index === 3) {
        return (
          parseInt(variables[0]) * parseInt(variables[1]) + parseInt(variables[2])
        );
      } else if (index === 2) {
        return (
          parseInt(variables[3]) - parseInt(variables[0]) * parseInt(variables[1])
        );
      } else if (index == 1) {
        return (
          (parseInt(variables[3]) - parseInt(variables[2])) /
          parseInt(variables[0])
        );
      } else {
        return (
          (parseInt(variables[3]) - parseInt(variables[2])) /
          parseInt(variables[1])
        );
      }
    }
    findMissingDigit(equation) {
      const variables = this.getEachTerm(equation);
      const indexOfVariable = this.PositionOfQuestionMark(variables);
      const variable = this.getMissingNumber(
        variables,
        indexOfVariable
      ).toString();
      const missingDigitVariable = variables[indexOfVariable];
      if (variable.length !== missingDigitVariable.length) {
        return -1;
      }
      const indexOfDigit = missingDigitVariable.indexOf("?");
      return parseInt(variable[indexOfDigit]);
    }
  }
  
module.exports = {
  FixEquation,
}; 


// TEST 1
// returns 9
let equation1 = new FixEquation("42 * 47 + 2 = 1?76");
let theMissingDigit1 = equation1.findMissingDigit();
console.log(theMissingDigit1);

// TEST 2
// RETURNS 2
let equation2 = new FixEquation("4? * 47 + 2 = 1976");
let theMissingDigit2 = equation2.findMissingDigit();
console.log(theMissingDigit2);

// TEST 3
// returns 4
let equation3 = new FixEquation("42 * ?7 + 2 = 1976");
let theMissingDigit3 = equation3.findMissingDigit();
console.log(theMissingDigit3);

// TEST 4
// returns -1 since the test case has no valid solution. The numbers cannot have leading zeros, so we cannot fill in a zero in front of 47.
let equation4 = new FixEquation("42 * ?47 + 2 = 1976");
let theMissingDigit4 = equation4.findMissingDigit();
console.log(theMissingDigit4);

// TEST 5
// returns -1 since 2 times of any number +2 can't be uneven.
let equation5 = new FixEquation("2 * 12? + 2 = 247");
let theMissingDigit5 = equation5.findMissingDigit();
console.log(theMissingDigit5);