// Write your code here
class FixEquation {
  findMissingDigit(equation) {
    let RHS, LHS;
    [LHS, RHS] = equation.split("=");
    LHS = LHS.trim();
    RHS = RHS.trim();
    if (RHS.includes("?")) {
      let lhs_res = eval(LHS);
      let index = RHS.indexOf("?");
      let lhs_str = lhs_res.toString();
      let rhs_repl = RHS.replace("?", lhs_str[index]);
      if (rhs_repl.trim() === lhs_str) {
        return parseInt(lhs_str[index]);
      } else {
        return -1;
      }
    } else {
      let index = LHS.indexOf("?");
      for (let i = 0; i <= 9; i++) {
        let temp;
        if (
          !(
            i == 0 &&
            (index === 0 ||
              LHS[index - 1] === " " ||
              LHS[index - 1] === "+" ||
              LHS[index - 1] === "*")
          )
        ) {
          temp = LHS.replace("?", i - "0");
          let res = eval(temp);
          if (res.toString() === RHS) {
            return i;
          }
        }
      }
      return -1;
    }
  }
}

instance = new FixEquation();
console.log(instance.findMissingDigit("42 * 47 + 2 = 1?76"));
console.log(instance.findMissingDigit("4? * 47 + 2 = 1976"));
console.log(instance.findMissingDigit("42 * ?7 + 2 = 1976"));
console.log(instance.findMissingDigit("42 * ?47 + 2 = 1976"));
console.log(instance.findMissingDigit("2 * 12? + 2 = 247"));
