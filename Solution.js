class FixEquation{

    // finding missing number
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

    FindIndividualNumbers(equation) {

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

    ContainsMissingDigit(Number){
        return Number.includes("?");
    }

    // getting missing digit index
    FindMissingNumberIndex(Numbers){
        for(var i=0;i<4;i++){
            if(this.ContainsMissingDigit(Numbers[i])){
                return i;
            }
        }
    }

    // finding the missing digit
    findMissingDigit(equation) {
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

// creating the instance of the class FixEquation
const obj = new FixEquation();

// test case equations
const equations = [
    "42 * 47 + 2 = 1?76",
    "4? * 47 + 2 = 1976",
    " 42 * ?7 + 2 = 1976",
    "42 * ?47 + 2 = 1976",
    "2 * 12? + 2 = 247"
];

// getting result
for(var i=0; i < equations.length; i++) {
    console.log(`Equaton: ${equations[i]}`)
    console.log(`Return: ${obj.findMissingDigit(equations[i])}`)
    console.log("")
}