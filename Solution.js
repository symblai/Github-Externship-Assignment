// 
// Solution by: Akshath Kaushal
// GitHub: https://github.com/akshathkaushal
// LinkedIn: www.linkedin.com/in/akshath-kaushal-08277817b
// 


// object class
class FixEquation {

    findMissingDigit(str) {
        // str is of the form A * B + C = D
        // in this either A, B, C or D has a '?' that has to be found
        

        // step 1: separate the numeric values from the equation
        let values = this.separateValues(str);
        let mul1=values[0], mul2=values[1], add=values[2], res=values[3];

        // step 2: find position (1/2/3/4) of the number(A/B/C/D) containing a '?'  
        let qnmarkPos = this.findQuestionMark(mul1, mul2, add, res);

        // step 3: based on the position of the found number, calculate the actual value of that number
        let temp = -1, ans=-1, arg2="";
        if(qnmarkPos==1){ // '?' is found in A
            temp = (parseFloat(res) - parseFloat(add))/parseFloat(mul2);
            ans = parseInt(temp);
            arg2=mul1;
        }
        else if(qnmarkPos==2){ // '?' is found in B
            temp = (parseFloat(res) - parseFloat(add))/parseFloat(mul1);
            ans = parseInt(temp);
            arg2=mul2;
        }
        else if(qnmarkPos==3){ // '?' is found in C
            temp = parseFloat(res) - (parseFloat(mul2)*parseFloat(mul1));
            ans = parseInt(temp);
            arg2=add;
        }
        else if(qnmarkPos==4){ // '?' is found in D
            temp = parseFloat(mul1)*parseFloat(mul2) + parseFloat(add);
            ans = parseInt(temp);
            arg2=res;            
        }
        
        // step 4: return the digit that should replace the '?' 
        if(ans < 0 || temp - ans != 0) { // if the ans is negative or not a whole number
            return -1;
        }
        return this.findDigit(ans.toString(), arg2);
    }

    // ================= helper functions ================= //

    //  
    // this function separates the differnt numbers by iterating through the string
    // return type: a list of the numbers as strings
    // 
    separateValues(str){

        let mul1="", mul2="", add="", res="";
        let i = 0, sz = str.length;

        while(str[i] != '*'){
            if(str[i]!=' ') mul1+=str[i];
            i++;
        }
        i+=2;
        while(str[i] != '+'){
            if(str[i]!=' ') mul2+=str[i];
            i++;
        }
        i+=2;
        while(str[i] != '='){
            if(str[i]!=' ') add+=str[i];
            i++;
        }
        i+=2;
        while(i<sz) {
            res+=str[i];
            i++;
        }

        return [mul1, mul2, add, res];
    }

    //
    // this function finds which number (A/B/C/D) contains a '?'
    // if A contains a '?', 1 is returned
    // if B contains a '?', 2 is returned
    // if C contains a '?', 3 is returned
    // if D contains a '?', 4 is returned
    // if a '?' is not found, -1 is returned
    // 
    findQuestionMark(mul1, mul2, add, res){
        let order=-1;
        if(this.checkString(mul1)) order=1;
        else if(this.checkString(mul2)) order=2;
        else if(this.checkString(add)) order=3;
        else if(this.checkString(res)) order=4;
        return order;
    }

    //
    // this function checks if the string str (argument) contains a '?' or not
    // if '?' is preesent, true is returned, else false is returned.
    // 
    checkString(str){
        let i=0, sz = str.length;
        for(i=0;i<sz;i++){
            if(str[i] == '?') return true;
        }
        return false;
    }

    // 
    // this functions iterates str (argument) and checks the position of '?'
    // then it returns the corresponding digit at the designated value of '?'
    // 
    findDigit(ans, str){
        if(ans.length != str.length) {
            return -1; // leading zero or non-whole number case
        }
        let itr=0, ret;

        while(itr<ans.length){
            if(str[itr]=='?') ret = parseInt(ans[itr]);
            else if(str[itr] != ans[itr]) { // if apart from the '?' some other digit doesn't match
                return -1;
            }
            itr++;
        }
        return ret;
    }
    
}


// driver code
let listOfEquations = [
    "42 * 47 + 2 = 1?76", 
    "4? * 47 + 2 = 1976", 
    "42 * ?7 + 2 = 1976", 
    "42 * ?47 + 2 = 1976", 
    "2 * 12? + 2 = 247"
];

let i=0;
let fixedEquationResponse = new FixEquation();

for(i=0;i<listOfEquations.length;i++){
    let equation = listOfEquations[i];
    let response = fixedEquationResponse.findMissingDigit(equation);

    console.log("Equation: " + equation);
    console.log("Returns: " + response);
}