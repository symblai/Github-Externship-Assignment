// Write your code here
class FixEquation {
  #equation;

  constructor() {
    this.#equation = "";
  }

  #isEquationCorrect() {
  const variables = this.#equation.split(" ");

    return (
      parseInt(variables[0]) * parseInt(variables[2]) +
        parseInt(variables[4]) ===
      parseInt(variables[6])
    );
  }

  #getString(index, digit) {
    return (
      this.#equation.substr(0, index) + digit + this.#equation.substr(index + 1)
    );
  }

  findMissingDigit(equation_) {
    this.#equation = equation_;

    let unknownDigit = -1;

    for (let i = 0; i < this.#equation.length; ++i) {
      if (this.#equation[i] === "?") {
        unknownDigit = i;
      }
    }

    console.assert(unknownDigit != -1, "Invalid Equation");

    let missingDigit = -1;

    for (let digit = "0"; digit <= "9"; ++digit) {

      if (
        digit === "0" &&
        (unknownDigit === 0 || this.#equation[unknownDigit - 1] === " ")
      ) {
        // Checking for leading zeroes
        continue;
      }
      this.#equation = this.#getString(unknownDigit, digit);

      if (this.#isEquationCorrect()) {
        if (missingDigit != -1) {
          // if more than one solution exists;
          return -1;
        }
        missingDigit = digit - "0";
      }
    }

    return missingDigit;
  }
}

const Equations = [
  "42 * 47 + 2 = 1?76",
  "4? * 47 + 2 = 1976",
  "42 * ?7 + 2 = 1976",
  "42 * ?47 + 2 = 1976",
  "2 * 12? + 2 = 247",
  "2 * 123 + 2 = 247",
];

for (let i = 0; i < Equations.length; ++i) {
  let X = new FixEquation();

  console.log(X.findMissingDigit(Equations[i]));
}
