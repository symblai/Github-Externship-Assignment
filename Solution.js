class FixEquation {
  findMissingDigit(equation) {
    var equations=equation.split(" "); // splitting the equation based on space
    var A=equations[0];
    var B=equations[2];
    var C=equations[4];
    var D=equations[6];
    var val=0;
    var constant=0;
    if(D.includes('?')){           // if D contains the missing value
        val=parseInt(A)*parseInt(B)+parseInt(C);  
        constant=D;
    }
    else if(C.includes('?')){      // if C contains the missing value
        val=parseInt(D)-(parseInt(B)*parseInt(A));
        constant=C;
    }
    else if(B.includes('?')){      // if B contains the missing value
        val=(parseInt(D)-parseInt(C))/parseInt(A);
        constant=B;
    }
    else if(A.includes('?')){     // if A contains the missing value
        val=(parseInt(D)-parseInt(C))/parseInt(B);
        constant=A;
    }
    if(val<0){          // if the ans is negative
        return -1;
    }
   else if(val.toString().includes('.') || constant.replace('?','')==val.toString()){  // if it's decimal and checking for leading zeros or replacing the '?'  has no effect
       return -1;
    }
    else{
        constant=constant.replace('?',val.toString()[constant.indexOf('?')]); 
        if(constant==val.toString()){ 
            return parseInt(val);
        }
        return -1;  // no solution
    }
   }
}
var obj = new FixEquation();

const test1 = obj.findMissingDigit("42 * 47 + 2 = 1?76");
const test2 = obj.findMissingDigit("42 * 4?7 + 2 = 1976");
const test3 = obj.findMissingDigit("42 * 5? + 2 = 1976");

console.log(test1);
console.log(test2);
console.log(test3);
