// Submission by Omkar Narayankar

class FixEquation {
    /**
     * @param {String} - Equation string in the format "A * B + C = D"
     * @returns {int} Missing value
     */
    findMissingDigit = (eq) => {
      //Extracts all the values from the string
      const star_index = equation.indexOf("*");
      const A = equation.slice(0, star_index - 1);
      const plus_index = equation.indexOf("+");
      const B = equation.slice(star_index + 2, plus_index - 1);
      const equality_index = equation.indexOf("=");
      const C = equation.slice(plus_index + 2, equality_index - 1);
      const D = equation.slice(equality_index + 2);
  
      // Finds the value with the missing digit amongst A, B, C, D
      let defect = { value: null, index: null };
      if (A.includes("?")) {
        defect.value = "A";
        defect.index = A.indexOf("?");
      } else if (B.includes("?")) {
        defect.value = "B";
        defect.index = B.indexOf("?");
      } else if (C.includes("?")) {
        defect.value = "C";
        defect.index = C.indexOf("?");
      } else if (D.includes("?")) {
        defect.value = "D";
        defect.index = D.indexOf("?");
      }
  
      // Figures out the missing digit
      switch (defect.value) {
        case "A": {
          const val = Number(D) / Number(B);
          const value = Math.round(val);
  
          // If the value after the missing digit is the actual value then the missing digit indicates a leading zero which is not possible
          if (A.startsWith("?") && A.slice(1) === value.toString()) {
            return -1;
          }
  
          // Verifying if the calculated value satisfies the equation
          if (value * Number(B) + Number(C) === Number(D)) {
            return Number(value.toString().charAt(defect.index));
          } else {
            return -1;
          }
        }
        case "B": {
          const val = Number(D) / Number(A);
          const value = Math.round(val);
  
          if (B.startsWith("?") && B.slice(1) === value.toString()) {
            return -1;
          }
  
          // Verifying if the calculated value satisfies the equation
          if (Number(A) * value + Number(C) === Number(D)) {
            return Number(value.toString().charAt(defect.index));
          } else {
            return -1;
          }
        }
        case "C": {
          let val = Number(D) / Number(A);
          val = val % 1;
          const value = val * A;
  
          if (C.startsWith("?") && C.slice(1) === value.toString()) {
            return -1;
          }
  
          // Verifying if the calculated value satisfies the equation
          if (Number(A) * Number(B) + value === Number(D)) {
            return Number(value.toString().charAt(defect.index));
          } else {
            return -1;
          }
        }
        case "D": {
          const val = Number(A) * Number(B) + Number(C);
  
          if (D.startsWith("?") && D.slice(1) === value.toString()) {
            return -1;
          }
  
          // No need to verify
          return Number(val.toString().charAt(defect.index));
        }
      }
    };
  }
  
  const solver = new FixEquation();
  const equation = "42 * 47 + 2 = 1?76";
  value = solver.findMissingDigit(equation);
  console.log(value);
  
