// Write your code here
// Write your code here

//class implementation of the solution
class FixEquation {
    findMissingDigit(equation) {

      let idx_question_mark = equation.indexOf("?");  //find the index of the question mark

      equation = equation.replace( / +/g, ' ' ); //removing extra spaces between the operants and operator

      for (let i = "0"; i <= "9"; i++) { //loop for replacing question mark with digits from 0-9
                                         // and checking if the equations LHS = RHS

        let replaced_equation = equation.replace("?", i); //replacing question mark with digits from 0-9

        let equation_variables = replaced_equation.split(" "); //splitting the equation using spaces

        let A = equation_variables[0]; //finding a
        let B = equation_variables[2]; //finding b
        let C = equation_variables[4]; //finding c
        let D = equation_variables[6]; //finding d
        if (
          parseInt(A) * parseInt(B) + parseInt(C) == parseInt(D) //evaluating the LHS and RHS and if it's equal then 
                                                                 //then the replaced digits is our ans
        ) 
        {
            //checking for the leading zeros
           if(i == "0") {
               if(idx_question_mark == 0 && equation[idx_question_mark+1] != " ")
               {
                   return -1;
               }
               else if(equation[idx_question_mark-1] == " " && equation[idx_question_mark+1] != " "){
                   return -1;
               }
           }
               return i;
        }
      }
      return -1;
  }
}

//test cases for validating the algorithm
var test_cases = [
    '42 * 47 + 2 = 1?76',
    '4? * 47 + 2 = 1976',
    '42 * ?7 + 2 = 1976',
    '42 * ?47 + 2 = 1976',
    '2 * 12? + 2 = 247',
    '? * 2 + 3 = 3',
    '1 * 2 + ? = 3',    
    ]
    
//creating an object of the class
FixEquation_object = new FixEquation()
    
test_cases.forEach(test => { 
console.log(FixEquation_object.findMissingDigit(test))});
