// Write your code here
function findMissingDigit(equation){
    var equationArray = equation.split("");
    var firstNumber = equationArray[0];
    var secondNumber = equationArray[2];
    var missingDigit = "";
    for(var i = 0; i < firstNumber.length; i++){
        if(firstNumber[i] !== secondNumber[i]){
            missingDigit = firstNumber[i];
        }
    }
    return missingDigit;
}