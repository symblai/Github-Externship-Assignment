class FixEquation {
  extractValues(equation) {
    // This method extracts the respective values of A, B, C and D and return a combined object.

    let locationOfStar = equation.indexOf('*');
    let locationOfPlus = equation.indexOf('+');
    let locationOfEqualsTo = equation.indexOf('=');

    if (
      locationOfStar !== -1 &&
      locationOfPlus !== -1 &&
      locationOfEqualsTo !== -1
    ) {
      return {
        A: equation.substring(0, locationOfStar).trim(),
        B: equation.substring(locationOfStar + 1, locationOfPlus).trim(),
        C: equation.substring(locationOfPlus + 1, locationOfEqualsTo).trim(),
        D: equation.substring(locationOfEqualsTo + 1).trim(),
      };
    } else {
      return null;
    }
  }

  findMissingDigit(equation) {
    if (!equation) return -1;

    const values = this.extractValues(equation);

    if (!values) return -1;

    const { A, B, C, D } = values;
    let resultString, searchingString;

    if (D.includes('?')) {
      const result = parseInt(A) * parseInt(B) + parseInt(C);
      resultString = result.toString();
      searchingString = D;
    } else if (A.includes('?')) {
      if ((parseInt(D) - parseInt(C)) % parseInt(B) === 0) {
        const result = (parseInt(D) - parseInt(C)) / parseInt(B);
        resultString = result.toString();
        searchingString = A;
      } else {
        return -1;
      }
    } else if (B.includes('?')) {
      if ((parseInt(D) - parseInt(C)) % parseInt(A) === 0) {
        const result = (parseInt(D) - parseInt(C)) / parseInt(A);
        resultString = result.toString();
        searchingString = B;
      } else {
        return -1;
      }
    } else if (C.includes('?')) {
      if (parseInt(D) % (parseInt(A) * parseInt(B)) === 0) {
        const result = parseInt(D) / (parseInt(A) * parseInt(B));
        resultString = result.toString();
        searchingString = C;
      } else {
        return -1;
      }
    }

    if (resultString.length === searchingString.length) {
      const missingNumber = searchingString.indexOf('?');
      return resultString[missingNumber];
    } else {
      return -1;
    }
  }
}

const runTestCases = () => {
  solution = new FixEquation();
  const tests = [
    '42 * 47 + 2 = 1?76',
    '4? * 47 + 2 = 1976',
    '42 * ?7 + 2 = 1976',
    '42 * ?47 + 2 = 1976',
    '2 * 12? + 2 = 247',
  ];

  tests.forEach((test, index) => {
    const answer = solution.findMissingDigit(test);
    console.log(`Test Case ${index} :
      Test Equation : ${test}
      ${
        answer === -1
          ? `No solution for the given equation exists, returned -1`
          : `Missing digit is : ${answer}`
      }\n`);
  });
};

// runTestCases();
// To check and run test cases uncomment the above line
