// Write your code here

class FixEquation {
    
    //Check whether the desired value and given value can match or not. 
   isValidString(value, newValue){
      
       if(value.length !== newValue.length) return false;
      
        let matchChar = true;
        const index = value.indexOf("?");
        
         for(let i = 0; i < newValue.length; i++){
            if(i === index) continue;
            else if(value[i] !== newValue[i]) matchChar = false;
         }
        
         if(!matchChar) return false;
         return true;
  }

  //Find the missing digit
  findMissingDigit(equation){
        let numbers = equation.split(/[*]|[+]|[=]/);
        let newNumbers = numbers.map(number => number.trim());
        let A = newNumbers[0];
        let B = newNumbers[1];
        let C = newNumbers[2];
        let D = newNumbers[3];
       
       //If A contains "?", return the required digit.
       if(A.indexOf("?") != -1){
            if((parseInt(D) - parseInt(C)) % parseInt(B) != 0) return -1;
            else{
              let missingValue = (parseInt(D) - parseInt(C))/ parseInt(B);
              let newA = missingValue.toString();
              if(this.isValidString(A, newA)) return newA[A.indexOf("?")];
              else return -1;
            }
       }
       //If B contains "?", return the required digit
        else if(B.indexOf("?") != -1){
            if((parseInt(D) - parseInt(C)) % parseInt(A) != 0) return -1;
            else{
              let missingValue = (parseInt(D) - parseInt(C))/ parseInt(A);
              let newB = missingValue.toString();
              if(this.isValidString(B, newB)) return newB[B.indexOf("?")];
              else return -1;
            }
       }
       //If C contains "?", return the required digit
       else if(C.indexOf("?") != -1){
              let missingValue = parseInt(D) - parseInt(B) * parseInt(A);
              let newC = missingValue.toString();
              if(this.isValidString(C, newC)) return newC[C.indexOf("?")];
              else return -1;
        
       }
       //If C contains "?", return the required digit
       else if(D.indexOf("?") != -1){
              let missingValue = parseInt(C) + parseInt(B) * parseInt(A);
              let newD = missingValue.toString();
              if(this.isValidString(D, newD)) return newD[D.indexOf("?")];
              else return -1;
         }
         return -1;
    }
    
}

 const Fix = new FixEquation();
 const testcases = [
     "42 * 47 + 2 = 1?76",
     "4? * 47 + 2 = 1976",
     "42 * ?7 + 2 = 1976",
     "42 * ?47 + 2 = 1976",
     "2 * 12? + 2 = 247"
 ]
 testcases.forEach(testcase => console.log(Fix.findMissingDigit(testcase)));
