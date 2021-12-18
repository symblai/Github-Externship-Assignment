class FixEquation {
  findMissingDigit(equation) {
    let a, b, c, d, givenStr, expectedStr, A, B, C, D;
    // Variables with uppercase represent strings while lowercase represent numbers

    // Splitting the individual number
    const givenVal = equation.split(" ");
    A = givenVal[0];
    B = givenVal[2];
    C = givenVal[4];
    D = givenVal[6];

    // If A contains ? (Missing digit)
    if (A.includes("?")) {
      b = parseInt(B);
      c = parseInt(C);
      d = parseInt(D);

      if (b == 0) return -1; // if b is 0 then a become undefined

      a = (d - c) / b;

      givenStr = A;
      expectedStr = a.toString();
    } else if (B.includes("?")) {
      // If B contains ? (Missing digit)
      a = parseInt(A);
      c = parseInt(C);
      d = parseInt(D);

      if (a == 0) return -1; // if a is 0 then b become undefined

      b = (d - c) / a;

      givenStr = B;
      expectedStr = b.toString();
    } else if (C.includes("?")) {
      // If C contains ? (Missing digit)
      a = parseInt(A);
      b = parseInt(B);
      d = parseInt(D);

      c = d - a * b;

      givenStr = C;
      expectedStr = c.toString();
    } else {
      // If D contains ? (Missing digit)
      a = parseInt(A);
      b = parseInt(B);
      c = parseInt(C);

      d = a * b + c;

      givenStr = D;
      expectedStr = d.toString();
    }

    if (givenStr.length == expectedStr.length) {
      // Check rest of digit of the expected string match with given string
      let positionOfMissing;
      for (let i = 0; i < expectedStr.length; i++) {
        if (givenStr[i] == "?") {
          positionOfMissing = i;
        } else if (givenStr[i] != expectedStr[i]) {
          // If any digit missmatch than missing digit cannot be determined
          return -1;
        }
      }
      return parseInt(expectedStr[positionOfMissing]);

    } else {
      // If length of given and expected string in not same than missing digit cannot be determined
      return -1;
    }
  }
}

// Given test case

let solve = new FixEquation();
console.log(solve.findMissingDigit("42 * 47 + 2 = 1?76"));
console.log(solve.findMissingDigit("4? * 47 + 2 = 1976"));
console.log(solve.findMissingDigit("42 * ?7 + 2 = 1976"));
console.log(solve.findMissingDigit("42 * ?47 + 2 = 1976"));
console.log(solve.findMissingDigit("2 * 12? + 2 = 247"));
