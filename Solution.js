// Write your code here
class FixEquation {
  getproperTerm(term) {
    if (term.includes("?")) {
      return term;
    }
    return parseInt(term, 10);
  }

  findInvalidTerm(A, B, C, D) {
    // invalid term was not converted into an integer type
    let invalidTerm;
    if (typeof A == "string") {
      invalidTerm = A;
    } else if (typeof B == "string") {
      invalidTerm = B;
    } else if (typeof C == "string") {
      invalidTerm = C;
    } else if (typeof D == "string") {
      invalidTerm = D;
    }
    return invalidTerm;
  }

  findInvalidTermValue(invalidTerm, A, B, C, D) {
    let value = -1;
    if (invalidTerm == A) {
      let equation = D - C;
      if (equation % B == 0) {
        value = equation / B;
      }
    } else if (invalidTerm == B) {
      let equation = D - C;
      if (equation % A == 0) {
        value = equation / A;
      }
    } else if (invalidTerm == C) {
      let equation = A * B;
      if (D % equation == 0) {
        value = D / equation;
      }
    } else if (invalidTerm == D) {
      value = A * B + C;
    }
    return value.toString();
  }

  findMissingDigitValue(invalidTermValue, invalidTerm) {
    let termSize = invalidTermValue.length;
    for (let digit = 0; digit < termSize; digit++) {
      if (invalidTermValue[digit] != invalidTerm[digit]) {
        return parseInt(invalidTermValue[digit]);
      }
    }
  }

  findMissingDigit(equation) {
    // if equation = "42 * ?47 + 2 = 1976" then
    // splitEquation = ["42", "*", "?47", "+", "2", "=", "1976"];
    let splitEquation = equation.split(" ");

    // Convert all strings to integers except one that contains "?"
    let A = this.getproperTerm(splitEquation[0]);
    let B = this.getproperTerm(splitEquation[2]);
    let C = this.getproperTerm(splitEquation[4]);
    let D = this.getproperTerm(splitEquation[6]);

    // Find the term which contains question mark (i.e invalid term) from A, B, C, D
    let invalidTerm = this.findInvalidTerm(A, B, C, D);

    // Find the complete value of invalid term
    let invalidTermValue = this.findInvalidTermValue(invalidTerm, A, B, C, D);

    if (
      invalidTermValue == "-1" ||
      invalidTerm.length != invalidTermValue.length
    ) {
      return -1;
    } else {
      let digitValue = this.findMissingDigitValue(
        invalidTermValue,
        invalidTerm
      );
      return digitValue;
    }
  }
}

let equation = new FixEquation();
console.log(equation.findMissingDigit("2 * 12? + 2 = 247"));
