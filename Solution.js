// Write your code here

class FixEquation {
  findMissingDigit(equation) {
    let eq = equation.split(/[+,*,=,]/);
    let position, missingDigitNumber;
    for (let number in eq) {
      eq[number] = eq[number].trim();
      if (eq[number].indexOf("?") === -1) {
        eq[number] = parseInt(eq[number]);
      } else position = number;
    }
    if (position == 0) {
      missingDigitNumber = (eq[3] - eq[2]) / eq[1];
      missingDigitNumber = missingDigitNumber.toString();
    } else if (position == 1) {
      missingDigitNumber = (eq[3] - eq[2]) / eq[0];
      missingDigitNumber = missingDigitNumber.toString();
    } else if (position == 2) {
      missingDigitNumber = eq[3] - eq[0] * eq[1];
      missingDigitNumber = missingDigitNumber.toString();
    } else if (position == 3) {
      missingDigitNumber = eq[2] + eq[0] * eq[1];
      missingDigitNumber = missingDigitNumber.toString();
    }
    
    if (missingDigitNumber.length !== eq[position].length) return -1;
    for (let digit in missingDigitNumber) {
      if (
        eq[position][digit] !== "?" &&
        eq[position][digit] !== missingDigitNumber[digit]
      )
        return -1;
    }
    return missingDigitNumber[eq[position].indexOf("?")];
  }
}

//function to run all the given test cases.
const runTestCases = () => {
  solution = new FixEquation();
  const testCases = [
    "42 * 47 + 2 = 1?76",
    "4? * 47 + 2 = 1976",
    "42 * ?7 + 2 = 1976",
    "42 * ?47 + 2 = 1976",
    "2 * 12? + 2 = 247",
  ];

  testCases.forEach((equation, index) => {
    const answer = solution.findMissingDigit(equation);
    console.log(`Test Case ${index+1} :
        Test Equation : ${equation}
        ${
          answer === -1
            ? `No valid solution exists, returned -1`
            : `The missing digit is : ${answer}`
        }\n`);
  });
};

runTestCases();
//for running and checking the test cases.
