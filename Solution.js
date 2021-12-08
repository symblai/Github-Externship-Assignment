// Author: Swapnal Shahil

class FixEquation {
  findMissingDigit(equation) {
    // splitted equation string to extract a,b,c and d.
    var numbers = equation.split(" ");
    var a = numbers[0];
    var b = numbers[2];
    var c = numbers[4];
    var d = numbers[6];

    if (a.indexOf("?") > -1) {
      if (parseInt(b) === 0) {
        return -1;
      } else {
        // required mathematical operation
        var expectedNum = (parseInt(d) - parseInt(c)) / parseInt(b);
        expectedNum = String(expectedNum);
        // checking if length of number calculated as a string equals to length of number with '?'.
        // If not equal then return -1 as stated in question.
        if (expectedNum.length != a.length) {
          return -1;
        } else {
          // returning final digit
          var index = a.indexOf("?");
          return parseInt(expectedNum[index]);
        }
      }
    } else if (b.indexOf("?") > -1) {
      if (parseInt(a) === 0) {
        return -1;
      } else {
        var expectedNum = (parseInt(d) - parseInt(c)) / parseInt(a);
        expectedNum = String(expectedNum);
        if (expectedNum.length != b.length) {
          return -1;
        } else {
          var index = b.indexOf("?");
          return parseInt(expectedNum[index]);
        }
      }
    } else if (c.indexOf("?") > -1) {
      var expectedNum = parseInt(d) - parseInt(a) * parseInt(b);
      expectedNum = String(expectedNum);
      if (expectedNum.length != c.length || parseInt(expectedNum) < 0) {
        return -1;
      } else {
        var index = c.indexOf("?");
        return parseInt(expectedNum[index]);
      }
    } else if (d.indexOf("?") > -1) {
      var expectedNum = parseInt(a) * parseInt(b) + parseInt(c);
      expectedNum = String(expectedNum);
      if (expectedNum.length != d.length) {
        return -1;
      } else {
        var index = d.indexOf("?");
        return parseInt(expectedNum[index]);
      }
    } else {
      return -1;
    }
  }
}

const sol = new FixEquation();

console.log(sol.findMissingDigit("42 * 47 + 2 = 1?76")); //Output: 9
console.log(sol.findMissingDigit("4? * 47 + 2 = 1976")); //Output: 2
console.log(sol.findMissingDigit("42 * ?7 + 2 = 1976")); //Output: 4
console.log(sol.findMissingDigit("42 * ?47 + 2 = 1976")); //Output: -1
console.log(sol.findMissingDigit("2 * 12? + 2 = 247")); //Output: -1
