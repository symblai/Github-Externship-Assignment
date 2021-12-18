class FixEquation {
  findMissingDigit(equation) {
    // splitting equation
    var variables = equation.split(" ");
    //question mark position
    var quesPos = 0;
    //number having question mark index
    let index = 0;
    //array to store numbers
    let numbers = [];
    //var to store answer
    var ans = 0;
    var check = 0;
    for (let i = 0; i < variables.length; ++i) {
      //Since we are already given equation format we will just check for *,+,=
      if (
        variables[i] !== "*" &&
        variables[i] !== "+" &&
        variables[i] !== "="
      ) {
        //checking if elements has ? or not
        if (variables[i].includes("?")) {
          //updating questionmark number index
          index = i;
          numbers.push(variables[i]);
          //updating quesmark position
          check = variables[i];
          for (let j = 0; j < check.length; ++j) {
            if (check[j] === "?") {
              // updating '?' position
              quesPos = j;
            }
          }
        } else {
          //pushing elements in array

          numbers.push(parseInt(variables[i]));
        }
      }
    }

    //questionmark number is in A,B,C,D
    //instead of if you can use switch also
    if (index === 0) {
      ans = (numbers[3] - numbers[2]) / numbers[1];
    } else if (index === 2) {
      ans = (numbers[3] - numbers[2]) / numbers[0];
    } else if (index === 4) {
      ans = numbers[3] - numbers[0] * numbers[1];
    } else {
      ans = numbers[0] * numbers[1] + numbers[2];
    }
    //return -1 if ans is float or negative
    if (!Number.isInteger(ans) || ans < 0) {
      return -1;
    } else {
      ans = ans.toString();
      //if questionmark is in place of leading zeros in a number
      if (check.includes(ans)) {
        return -1;
      } else {
        return ans[quesPos];
      }
    }
  }
}
const readline = require("readline");
var readInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
readInput.question("Enter equation: ", (eqn) => {
  var processEqn = new FixEquation();
  var answer = processEqn.findMissingDigit(eqn);

  console.log("Returns ", answer);
  readInput.close();
});
