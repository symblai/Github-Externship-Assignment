// Write your code here
class FixEquation {
  findMissingDigit(equation) {
    const operands = equation.split(/\*|\+|=/).map((n) => n.trim());
    const [a, b, c, d] = operands.map(Number);

    const unknownOperands = operands.findIndex((opernd) => !Number(opernd));
    const unknownOperandsOperations = ["(d-c)/b", "(d-c)/a", "d-a*b", "a*b+c"][unknownOperands];

    const evaluation = eval(unknownOperandsOperations);
    if (evaluation < 0 || !Number.isInteger(evaluation)){
      return -1;
    }

    const value = operands[unknownOperands];

    const myRegex = value.replace("?", "(.?)");
    const solvedNum = String(evaluation).match(myRegex);

    const ansVal = (solvedNum || [])[1];
    return Number(ansVal) ?? -1;
  }
}
