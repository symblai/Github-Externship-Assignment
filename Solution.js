function isNotAnInteger(num){
    return Math.floor(num) != num ;
}
class FixEquation{

    findMissingDigit(equation){

        
        var elements = equation.split(" "); //the equation splits on spaces into the operands and operators
        const operands = [] ;
        var missingDig = -1; // missingDig = 0 would mean A has missing digit, 2 is B, 4 is C and 6 is D

        for(var i = 0; i < elements.length; i++){
            if( elements[i] == '+' || elements[i] == '*' || elements[i] == '=' ){
                continue;
            }
            else{

                if(elements[i].includes('?')){
                    missingDig = i;
                    operands.push(elements[i]);
                }
                else
                    operands.push(parseInt(elements[i] ));
            }
        }
        
        //let's work according to the missing number now, using switch case
        var A = operands[0], B = operands[1], C = operands[2], D = operands[3];
        var ans = -1;//expected answer
        switch(missingDig){
            case 0:
                ans = (D - C)/B ;
                break;
            case 2:
                ans = (D - C)/A ;
                break;
            case 4:
                ans = (D - A * B);
                break;
            case 6:
                ans = (A * B + C);
                console.log(ans);
                
        }
        //if the answer is negative or not an integer, its not in the boundaries of our solution, so return -1
        if( ans < 0 || isNotAnInteger(ans) )
            return -1;

        var ans_string = ans.toString();
        //if the length of expected answer and length of the number in the equation are different
        //it means there is leading 0 which is beyond the constraint of the question
        if(ans_string.length != elements[missingDig].length ) //extra question mark
            return -1;
        
        for(var i = 0; i < elements[missingDig].length; i++){
            
            if( elements[missingDig][i] != '?' && elements[missingDig][i] != ans_string[i] ) //handles cases where the other digits mismatch like 12?7 and 3247
                return -1;

            else if( elements[missingDig][i] == '?' ){
                var result = parseInt(ans_string[i]);
            }
            
        }
        
        return result;
    }
}

const readEquation = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readEquation.question( 'Enter your equation: ', equation => {

    var find = new FixEquation() ;
    var missingDigit = find.findMissingDigit(equation);

    console.log("\nEquation: ", equation);
    console.log("\nReturns: ", missingDigit);

    readEquation.close();

} )