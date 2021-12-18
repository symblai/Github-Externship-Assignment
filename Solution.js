// Write your code here

// This is the main class
class FixEquation {
    
    //This is the Constuctor for the class to initialize the variables
    constructor(a) {
        this.Input = a;
    }
    
    //This is the function to find the missing Digit
    findMissingDigit() {
        
        //split the string on space
        var input = this.Input.split(' '); 
        var A = input[0];
        var B = input[2];
        var C = input[4];
        var D = input[6];
        var MarkElement;
        var result;
        
        //if A contains '?'
        if(A.includes('?')){ 
            result = (parseInt(D)-parseInt(C))/parseInt(B);
            MarkElement = A;
        }
        
        //if B contains '?'
        if(B.includes('?')){ 
            result = (parseInt(D)-parseInt(C))/parseInt(A);
            MarkElement = B;
        }
        
        //if C contains '?'
        if(C.includes('?')){ 
            result = (parseInt(D)-(parseInt(A)*parseInt(B)));
            MarkElement = C;
        }
        
        //if D contains '?'
        if(D.includes('?')){ 
            result = parseInt(A) * parseInt(B) + parseInt(C);
            MarkElement = D;
        }
        
        //Typecasting the result to string
        result = String(result);
        
        // if the length of result and the one with '?' is not equal, then return -1
        if(result.length !== MarkElement.length){ 
            return -1;
        }
        
        for(var i = 0; i < result.length; i++) {
            // If the MarkElement at i index is not '?' and the character of result and MarkElement at the same Index is not same then return -1
            if((MarkElement[i] !== result[i]) && (MarkElement[i] !== '?')) { 
                return -1;
            }
            // If the MarkElement at i index is '?' then return the result character at the same Index i
            else if(MarkElement[i] === '?'){ 
                return parseInt(result[i]);
            }
        }
        return -1; 
    }
}

//It is the initialization of the class to call the class Method
let classInitialize = new FixEquation('4? * 47 + 2 = 1976');

//It is the calling of the findMissingDigit Method of the class FixEquation
let num = classInitialize.findMissingDigit();

//It is the printing of the output
console.log(num);