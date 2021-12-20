//Author : Shishir Tiwari

class FixEquation {
  _compare(val1, val2) {
    val1 = val1.toString();
    let digit = -1;
    if (val1.length === val2.length)
      for (let i = 0; i < val2.length; i++) {
        if (val2[i] === "?") digit = parseInt(val1[i]);
        else if (val1[i] !== val2[i]) break;
      }
    return digit;
  }
  _findVariableWithMissingDigit([A, B, C]) {
    return (
      (() => (A.includes("?") ? "A" : ""))() ||
      (() => (B.includes("?") ? "B" : ""))() ||
      (() => (C.includes("?") ? "C" : ""))() ||
      "D"
    );
  }
  _evaluateExpression(variableWithMissingDigit, [A, B, C, D]) {
    switch (variableWithMissingDigit) {
      case "A":
        return this._compare(eval(`(${D} - ${C}) / ${B}`), A);
      case "B":
        return this._compare(eval(`(${D} - ${C}) / ${A}`), B);
      case "C":
        return this._compare(eval(`${D} - ${A} * ${B}`), C);
      default:
        return this._compare(eval(`${A} * ${B} + ${C}`), D);
    }
  }
  findMissingDigit(equation) {
    const variables = equation.trim().split(/[\s+*=]+/);
    const missingVariable = this._findVariableWithMissingDigit(variables);
    return this._evaluateExpression(missingVariable, variables);
  }
}
let Check = new FixEquation();
console.log(Check.findMissingDigit("   12  * 2 +  8     =  3? "));
