class FixEquation {
    
    //Check whether the desired value is possible or not and if possible,then what is it?. 
    compareStrings(compareValue, comparedValue){
// comparedValue has '?'  and it is being compared to compareValue for possible solution
        if(compareValue.length !== comparedValue.length) return -1;
            const index=comparedValue.indexOf("?");
            for(let i = 0; i < comparedValue.length; i++){
                if(i==index || comparedValue[i]==compareValue[i]) continue;
                return -1;
            }
	    return compareValue[index];
    }
    
    // When A has '?'
    case1(A,B,C,D){
        B=parseInt(B);
        C=parseInt(C);
        D=parseInt(D);
            
        if(D-C<=0 || (D-C)%B!==0) return -1;
        let compareValue=(D-C)/B;
        return this.compareStrings(compareValue.toString(),A);
    }
    
    // When C has '?'
    case2(A,B,C,D){
    	A=parseInt(A);
        B=parseInt(B);
        D=parseInt(D);
        let compareValue=D-(A*B);
        if(compareValue<=0) return -1;
        return this.compareStrings(compareValue.toString(),C);
    }
  
    // When D has '?'
    case3(A,B,C,D){
  	    A=parseInt(A);
        B=parseInt(B);
        C=parseInt(C);
        let compareValue=A*B+C;
        return this.compareStrings(compareValue.toString(),D);
    }
  
    //Find the missing digit
    findMissingDigit(equation){
        const nums = equation.split(/[*]|[+]|[=]/);
        const numbers = nums.map(num => num.trim());
        const A = numbers[0];
        const B = numbers[1];
        const C = numbers[2];
        const D = numbers[3];

        //If A contains "?", find required digit.
        if(A.indexOf("?") != -1){
        	return this.case1(A,B,C,D);
        }
        
        //If B contains "?", find required digit.
        if(B.indexOf("?") != -1){
        	return this.case1(B,A,C,D);
        }
        //If C contains "?", find required digit.
        if(C.indexOf("?") != -1){
            return this.case2(A,B,C,D);
        }
        //If D contains "?", find required digit.
        return this.case3(A,B,C,D);
    }
}

const Fix = new FixEquation();
const testcases = [
    //possible cases when A has '?' 
    "4? * 47 + 2 = 1976", //D-C>0 and (D-C)%B=0 and digit possible
    "4? * 47 + 1976 = 1976", //D-C <=0 and digit not possible
    "4? * 47 + 3 = 1976",  //(D-C)%A!=0 and digit not possible
    "4? * 47 + 143 = 1976", //(D-C)%B==0 but digit not possible
    
    //possible cases when B has '?' 
    "47 * 4? + 2 = 1976", //D-C>0 and (D-C)%B=0 and digit possible
    "47 * 4? + 1976 = 1976", //D-C <=0 and digit not possible
    "47 * 4? + 3 = 1976", //(D-C)%A!=0 and digit not possible
    "47 * 4? + 143 = 1976", //(D-C)%B==0 but digit not possible
    
    //possible cases when C has '?'
    "42 * 47 + 19?4 = 3948", //D-A*B >0 and digit possible
    "43 * 47 + 4? = 1974", //D-A*B <=0 and digit not possible
    "42 * 47 + 19?5 = 3948", //D-A*B >0 but digit not possible
    
    // possible cases when D has '?'
    "42 * 47 + 2 = 197?",//digit possible
    "42 * 47 + 2 = 196?",//digit not possible
]
testcases.forEach(testcase => console.log(Fix.findMissingDigit(testcase)));

/*OUTPUT
2
-1
-1
-1
2
-1
-1
-1
7
-1
-1
6
-1
*/
