//A * B + C = D
class FixEquation {
    findMissingDigit(equation) {
      let token = "";
      let positionOfQues = 0;
      const split = [];
      const objectMap = {
        0: (array) => eval(`(${array[6]}-${array[4]})/${array[2]}`),
        2: (array) => eval(`(${array[6]}-${array[4]})/${array[0]}`),
        4: (array) => eval(`${array[6]}-${array[0]}*${array[2]}`),
        6: (array) => eval(`${array[0]}*${array[2]}+${array[4]}`),
      };
      for (let i = 0; i < equation.length; i++) {
        if (equation[i] !== " ") {
          token += equation[i];
          if (equation[i] === "?") {
            positionOfQues = split.length;
          }
        } else {
          split.push(token);
          token = "";
          continue;
        }
      }
      split.push(token);
      const ans = objectMap[positionOfQues](split).toString();
      if (ans.length !== split[positionOfQues].length) {
        return -1;
      }
      let quesCharPos = 0;
      for (let i = 0; i < split[positionOfQues].length; i++) {
        if (split[positionOfQues][i] === "?") {
          quesCharPos = i;
          continue;
        }
        if (split[positionOfQues][i] !== ans[i]) {
          return -1;
        }
      }
      return ans[quesCharPos];
    }
  }
  const solveIt = new FixEquation();
  const testCases = [
    "42 * 47 + 2 = 1?76",
    "4? * 47 + 2 = 1976",
    "42 * ?7 + 2 = 1976",
    "42 * ?47 + 2 = 1976",
    "2 * 12? + 2 = 247",
  ];
  testCases.map((el) => console.log(solveIt.findMissingDigit(el)));  