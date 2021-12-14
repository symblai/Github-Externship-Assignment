// Write your code here
class FixEquation {
  getVar(equation) {
    const temp = equation.split(/[+,*,=,]/);
    return [temp[0].trim(), temp[1].trim(), temp[2].trim(), temp[3].trim()];
  }
  MissingNumberPosition(variables) {
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
    const variables = this.getVar(equation);
    const indexOfVariable = this.MissingNumberPosition(variables);
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