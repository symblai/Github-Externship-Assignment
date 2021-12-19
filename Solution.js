// Write your code here

class FixEquation {
    //function to find the missing digit
    findMissingDigit(equation) {
      //splitting the equation into parts across the spaces
      const variables = equation.split(" ");
      //assigning the variables A,B,C,D their values from the array
      let A = variables[0];
      let B = variables[2];
      let C = variables[4];
      let D = variables[6];
  
      let variableWithQuesMark = this.getVariableWithQuestionMark(A, B, C, D);
  
      return this.findDigitValue(A, B, C, D, variableWithQuesMark);
    }
    //this function returns the variable that has a question mark
    getVariableWithQuestionMark(A, B, C, D) {
      if (A.includes("?")) {
        return "A";
      } else if (B.includes("?")) {
        return "B";
      } else if (C.includes("?")) {
        return "C";
      } else if (D.includes("?")) {
        return "D";
      } else {
        return "None";
      }
    }
  
    //this function finds the value of missing digit based on diffferent scenarios
    findDigitValue(A, B, C, D, variableWithQuesMark) {
      let digitVal = -1;
      if (variableWithQuesMark == "A") {
        digitVal = (parseInt(D) - parseInt(C)) / parseInt(B);
        return this.replaceQuestionMark(A, digitVal.toString());
      } else if (variableWithQuesMark == "B") {
        digitVal = (parseInt(D) - parseInt(C)) / parseInt(A);
        return this.replaceQuestionMark(B, digitVal.toString());
      } else if (variableWithQuesMark == "C") {
        digitVal = parseInt(D) / (parseInt(B) * parseInt(A));
        return this.replaceQuestionMark(C, digitVal.toString());
      } else if (variableWithQuesMark == "D") {
        digitVal = parseInt(A) * parseInt(B) + parseInt(C);
        return this.replaceQuestionMark(D, digitVal.toString());
      } else {
        return digitVal;
      }
    }
  
    //this function compares the variable with question mark
    //and the possible digit value and returns it
    replaceQuestionMark(variableWithQuesMark, digitVal) {
      if (variableWithQuesMark.length !== digitVal.length) {
        return -1;
      }
      let index = variableWithQuesMark.indexOf("?");
      let digit = digitVal.charAt(index);
  
      return parseInt(digit);
    }
  }
  