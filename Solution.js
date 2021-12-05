// Write your code here

//This function returns the number of question marks in your array
function countQuestionMarks(array) {
  let count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "?") {
      count++;
    }
  }
  return count;
}

const findMissingDigit = (equation) => {
  //Remove the whitespaces in the equation string if any
  const equation2 = equation.replace(/ /g, "");
  //Split the equation string into an array of individual characters
  const s1 = equation2.split("");
  //Now split the array into two strings, one string for characters before the "=" and one for after the "="
  let e2 = s1.slice(0, s1.indexOf("=")).join("");
  let e3 = s1.slice(s1.indexOf("=") + 1, s1.length).join("");

  //If the number of question marks in the equation array is greater than one then return -1
  if (countQuestionMarks(equation2) > 1) {
    return -1;
  }

  //Check if the "?" comes after the "="
  if (equation2.indexOf("?") > equation2.indexOf("=")) {
    //Evaluate the left side of the equation
    e2 = eval(e2).toString();
    /*If the evaluated left equation is equal to the right 
      side(when "?" is replaced with the appropriate number
      from the right), return that replaced number*/
    if (e3.replace("?", e2[e3.indexOf("?")]) === e2) {
      return parseInt(e2[e3.indexOf("?")]);
    }
    //For any other case, return -1
    return -1;
  }

  //Check if the "?" comes before the "="
  if (equation2.indexOf("?") < equation2.indexOf("=")) {
    //This variable consists of all possible values for "?"(0-9)
    const numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    /*Loop through the number list to replace the "?" with the number 
      and check whether the evaluated left side is equal to the right 
      side of the equation, if yes then return that number from the number list*/
    for (let i = 0; i < numList.length; i++) {
      let res = e2.replace("?", numList[i]);
      if (eval(res).toString() === e3) {
        return numList[i];
      }
    }
    //For any other case, return -1
    return -1;
  }
};

//Provide equation as a string to the function and console log the output
console.log(findMissingDigit("42 * ?7 + 2 = 1976"));

//Link to the program: https://onecompiler.com/nodejs/3xke6jw4c
