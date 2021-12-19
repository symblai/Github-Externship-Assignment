// Write your code here
var readline = require("readline");
var stringread = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class FixEquation {
  findMissingDigit(equation) {
    var a = 0,b = 0,c = 0,d = 0,A = "",B = "",C = "",D = "",savecase,casex = 0,ansvar, wrongchar,flag = 0,ans;
    for (var i = 0; i < equation.length; i++) {
      if (equation[i] == "*" || equation[i] == "+" || equation[i] == "=") {
        casex++;
      } else if (parseInt(equation[i]) >= 0 && parseInt(equation[i]) <= 9) {
        switch (casex) {
          case 0:
            a = a * 10 + parseInt(equation[i]);
            A = A + equation[i];
            break;
          case 1:
            b = b * 10 + parseInt(equation[i]);
            B = B + equation[i];
            break;
          case 2:
            c = c * 10 + parseInt(equation[i]);
            C = C + equation[i];
            break;
          case 3:
            d = d * 10 + parseInt(equation[i]);
            D = D + equation[i];
            break;
          default:
        }
      } else if (equation[i] == "?") {
        savecase = casex;
        switch (casex) {
          case 0:
            a = a * 10;
            A = A + equation[i];
            break;
          case 1:
            b = b * 10;
            B = B + equation[i];
            break;
          case 2:
            c = c * 10;
            C = C + equation[i];
            break;
          case 3:
            d = d * 10;
            D = D + equation[i];
            break;
          default:
        }
      }
    }
    switch (savecase) {
      case 0:
        ansvar = (d - c) / b;
        wrongchar = A;
        break;
      case 1:
        ansvar = (d - c) / a;
        wrongchar = B;
        break;
      case 2:
        ansvar = d - a * b;
        wrongchar = C;
        break;
      case 3:
        ansvar = a * b + c;
        wrongchar = D;
        break;
      default:
    }
    var correct = ansvar.toString();
    if (ansvar % 1 != 0 || correct.length != wrongchar.length) {
      return -1;
    }
    for (var j = 0; j < correct.length; j++) {
      if (correct[j] != wrongchar[j]) {
        flag++;
        if (flag > 1) {
          return -1;
        }
        ans = correct[j];
      }
    }
    return parseInt(ans);
  }
}

stringread.question("", function (equation) {
  const a = new FixEquation();
  const answer = a.findMissingDigit(equation);
  console.log(answer);
  stringread.close();
});
