// Write your code here

class FixEquation {
  findMissingDigit(equation) {
    let equation1 = equation.split(/[+,*,=,]/);
    let pos, result;
    for (let i in equation1) {
      equation1[i] = equation1[i].trim();
      if (equation1[i].indexOf("?") == -1) {
        equation1[i] = parseInt(equation1[i]);
      } else pos = i;
    }
    if (pos == 0) {
      result = (equation1[3] - equation1[2]) / equation1[1];
      result = result.toString();
    } else if (pos == 1) {
      result = (equation1[3] - equation1[2]) / equation1[0];
      result = result.toString();
    } else if (pos == 2) {
      result = equation1[3] - equation1[0] * equation1[1];
      result = result.toString();
    } else if (pos == 3) {
      result = equation1[2] + equation1[0] * equation1[1];
      result = result.toString();
    }
    //console.log(equation1);
    if (result.length != equation1[pos].length) return -1;
    else return result[equation1[pos].indexOf("?")];
  }
}

//code written by Nithin Shanmugam V
