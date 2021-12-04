// Write your code here
class FixEquation {
  /**
   * Fix a equation string by finding missing digit.
   * @param {string} equation - an equation having a missing digit
   * @return {number} single digit number.
   */
  findMissingDigit(equation) {
    // Split equation to variables i.e. "42 * 47 + 2 = 1?76" => [ '42', '47', '2', '1?76' ]
    const variables = equation.split(/\*|\+|=/).map((n) => n.trim());

    // Map variables { a: 42, b: 47, c: 2, d: NaN }
    const [a, b, c, d] = variables.map(Number);

    // Find unknown variable's(which is not a number) index => 3 {d} is unknown here
    const unknownVariableIndex = variables.findIndex(
      (variable) => !Number(variable)
    );

    // Function for unknown variable i.e. { d = a * b + c } in this case
    const unknownVariableFunction = ["(d-c)/b", "(d-c)/a", "d-a*b", "a*b+c"][
      unknownVariableIndex
    ];

    // Evaluate unknown variable's true value by calculating it, here using { d = a * b + c }
    const calculatedNumber = eval(unknownVariableFunction);

    // Return { -1 } if value is not positive integer
    if (calculatedNumber < 0 || !Number.isInteger(calculatedNumber)) {
      return -1;
    }

    // Get unknown variable's original value i.e. 1?76
    const unknownVariableValue = variables[unknownVariableIndex];

    // convert this to RegEx i.e. 1(.?)76
    const unknownVariableRegex = unknownVariableValue.replace("?", "(.?)");

    // Match this regex with our calculated value => [ '1976', '9', index: 0, input: '1976', groups: undefined ]
    const matchNumber = String(calculatedNumber).match(unknownVariableRegex);

    // found matched missing digit i.e. 9
    const missingValue = (matchNumber || [])[1];

    return Number(missingValue) ?? -1;
  }
}
