// Write your code here
class FixEquation {
  FixEquation() {
    this.equation = NULL;
  }

  findMissingDigit(equation) {
    let eqStr = equation.split(" ");

    if (eqStr[0].search("[?]") !== -1) {
      let b, c, d;
      b = eqStr[2];
      c = eqStr[4];
      d = eqStr[6];

      let a = (parseInt(d) - parseInt(c)) / parseInt(b);
      if (a.toString().length != eqStr[0].length || a % 1 !== 0) {
        return -1;
      } else {
        let ind = eqStr[0].search("[?]");
        let ans = a.toString();
        return parseInt(ans[ind]);
      }
    } else if (eqStr[2].search("[?]") !== -1) {
      let a, c, d;
      a = eqStr[0];
      c = eqStr[4];
      d = eqStr[6];
      let b = (parseInt(d) - parseInt(c)) / parseInt(a);
      if (b.toString().length != eqStr[2].length || b % 1 !== 0) {
        return -1;
      } else {
        let ind = eqStr[2].search("[?]");
        let ans = b.toString();
        return parseInt(ans[ind]);
      }
    } else if (eqStr[4].search("[?]") !== -1) {
      let a, b, d;
      a = eqStr[0];
      b = eqStr[2];
      d = eqStr[6];

      let c = parseInt(d) / (parseInt(a) * parseInt(b));
      if (c.toString().length != eqStr[0].length || c % 1 !== 0) {
        return -1;
      } else {
        let ind = eqStr[4].search("[?]");
        let ans = c.toString();
        return parseInt(ans[ind]);
      }
    } else {
      let a, b, c;
      a = eqStr[0];
      b = eqStr[2];
      c = eqStr[4];

      let d = parseInt(a) * parseInt(b) + parseInt(c);
      if (d.toString().length != eqStr[6].length || d % 1 !== 0) {
        return -1;
      } else {
        let ind = eqStr[6].search("[?]");
        let ans = d.toString();
        return parseInt(ans[ind]);
      }
    }
    return 0;
  }
}

var obj = new FixEquation();

var testCases = [
  "42 * 47 + 2 = 1?76",
  "4? * 47 + 2 = 1976",
  "42 * ?7 + 2 = 1976",
  "42 * ?47 + 2 = 1976",
  "2 * 12? + 2 = 247",
];
for (let i = 0; i < testCases.length; i++) {
  console.log(
    "input : " +
      testCases[i] +
      "   output: " +
      obj.findMissingDigit(testCases[i])
  );
}
