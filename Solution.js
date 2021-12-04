// Write your code here

// Approach (algo) : 
// 1. find missing index of given equation
// 2. find finalAns
// 3. return missing index of finalAns+

class FixEquation {  

    // function :
    // return type : Integer
    // params type : string
    findMissingDigit(equation) {                
        
        const finalAns = -1;

        // spliting the numbers from the variabls as words
        const words = equation.split(/[*-/+=]/);       
        const splitedwords = words.map((n) => n.trim());   // removing spaces    

        // assigning to diff variables from the array
        const [a , b, c , d] = splitedwords;
        
        // finding index of word that contains '?'
        const missingIndexofNum = splitedwords.findIndex(word => (word.includes('?')))                

        var realAns;

        switch (missingIndexofNum) {

            case 0:
                realAns = eval('(d - c) / b')
                break;
            
            case 1:
                realAns = eval('(d - c) / a')
                break;

            case 2:
                realAns = eval('d - a * b')
                break;

            case 3:
                realAns = eval('a * b + c')
                break;                
        
            default:
                break;
        }
        console.log(typeof realAns)
        // After getting finalAns, we can compare the size 
        // if same then, direct return the missingIndex from finalAns
        // else return -1
        if(splitedwords[missingIndexofNum].length != realAns.toString().length)
            return finalAns;
        else{            
            const missIndexofmissingNum = splitedwords[missingIndexofNum].indexOf('?')            
            const finalAnsinInteger = parseInt(realAns.toString()[missIndexofmissingNum]);
            return finalAnsinInteger;
        }

    }


}

// creating object to call function of a class
let object = new FixEquation();
console.log(object.findMissingDigit("4? * 47 + 2 = 1976"));
console.log(object.findMissingDigit("42 * 47 + 2 = 197?"));