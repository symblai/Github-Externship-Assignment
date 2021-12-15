// Write your code here
class FixEquation{
    // input : equation (string)
    // output : Numbers ( an array of 4 numbers having A, B, C and D as strings )
    // Description : This method takes the equation string as input , splits it into the 4 required numbers, trims them and stores them in an array.
    FindIndividualNumbers(equation){
        var Numbers = new Array(4);
        const AroundMultiply = equation.split("*");
        Numbers[0] = AroundMultiply[0].trim();
        const AroundAdd = AroundMultiply[1].split("+");
        Numbers[1] = AroundAdd[0].trim();
        const AroundEqual = AroundAdd[1].split("=");
        Numbers[2] = AroundEqual[0].trim();
        Numbers[3] = AroundEqual[1].trim();
        return Numbers;
    }
    // input : Number ( string of a single number )
    // output : Boolean value ( if the number contains '?' or not) 
    ContainsMissingDigit(Number){
        return Number.includes("?");
    }
    // input : Numbers (Array of strings)
    // Output : the index of Number in array Numbers which contains '?'
    // Description : The method iterates through all numbers and uses previous method ConatinsMissingIndex to find the Missing Number
    FindMissingNumberIndex(Numbers){
        for(var i=0;i<4;i++){
            if(this.ContainsMissingDigit(Numbers[i])){
                return i;
            }
        }
    }
    // input : Numbers ( the array of Numbers) , MissingNumberIndex (index of missing number)
    // output : Expected value of the missing number if there wasn't a '?' in that number
    // Description : The method finds expected value of missing number by assuming it as x and solving the equation for x.
    FindMissingNumber(Numbers, MissingNumberIndex){
        
        if(MissingNumberIndex == 0){
            return (parseInt(Numbers[3]) - parseInt(Numbers[2]))/parseInt(Numbers[1]);
        }
        else if(MissingNumberIndex == 1){
            return (parseInt(Numbers[3]) - parseInt(Numbers[2]))/parseInt(Numbers[0]);
        }
        else if(MissingNumberIndex == 2){
            return parseInt(Numbers[3]) - parseInt(Numbers[1])*parseInt(Numbers[0]);
        }
        else{
            return parseInt(Numbers[2]) + parseInt(Numbers[1])*parseInt(Numbers[0]);
        }
    }
    // input : equatiob (string)
    // output : missing digit ( if possible otherwise -1)
    // Description : The function first finds values of A, B, C and D using FindIndividualNumbers method. 
    // It then finds missing number among them
    // It then finds expected value of that missing number if it didn't have '?'
    // It then compares the actual value and expected value to find missing digit.
    findMissingDigit(equation){
        var Numbers = this.FindIndividualNumbers(equation);
        var MissingNumberIndex = this.FindMissingNumberIndex(Numbers);
        var ExpectedValue = this.FindMissingNumber(Numbers, MissingNumberIndex);
        var ActualValue = Numbers[MissingNumberIndex]
        if(Number.isInteger(ExpectedValue)){
            ExpectedValue = ExpectedValue.toString();
            if(ExpectedValue.length != ActualValue.length){
                return -1;
            }
            var len = ExpectedValue.length;
            var MissingDigit = -1;
            for(var i = 0; i < len; i++){
                if(ActualValue[i] == '?'){
                    MissingDigit = parseInt(ExpectedValue[i]);
                }
                else if(ActualValue[i] != ExpectedValue[i]){
                    return -1;
                }
            }
            return MissingDigit;
        }
        return -1;
    }
}

const FixEqn = new FixEquation();
const equations = ["42 * 47 + 2 = 1?76","4? * 47 + 2 = 1976"," 42 * ?7 + 2 = 1976","42 * ?47 + 2 = 1976","2 * 12? + 2 = 247"];
for(var i=0;i<equations.length;i++){
    console.log("Equation : " + equations[i])
    console.log("Returns : " + FixEqn.findMissingDigit(equations[i]))
}
