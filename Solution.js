// object class
class FixEquation {

    findMissingDigit(str) {
        // str is of the form A * B + C = D
        // in this either A, B, C or D has a '?' that has to be found
        
        let values = this.separateValues(str);
        let mul1=values[0], mul2=values[1], add=values[2], res=values[3];

        let qnmarkPos = this.findQuestionMark(mul1, mul2, add, res);

        let temp = -1, ans=-1, arg2="";
        if(qnmarkPos==1){
            temp = (parseFloat(res) - parseFloat(add))/parseFloat(mul2);
            ans = parseInt(temp);
            console.log("temp = " + temp + " and ans = " + ans);
            arg2=mul1;
        }
        else if(qnmarkPos==2){
            temp = (parseFloat(res) - parseFloat(add))/parseFloat(mul1);
            ans = parseInt(temp);
            console.log("temp = " + temp + " and ans = " + ans);
            arg2=mul2;
        }
        else if(qnmarkPos==3){
            temp = parseFloat(res) - (parseFloat(mul2)*parseFloat(mul1));
            ans = parseInt(temp);
            console.log("temp = " + temp + " and ans = " + ans);
            arg2=add;
        }
        else if(qnmarkPos==4){
            temp = parseFloat(mul1)*parseFloat(mul2) + parseFloat(add);
            ans = parseInt(temp);
            console.log("temp = " + temp + " and ans = " + ans);
            arg2=res;            
        }
      
        if(ans < 0 || temp - ans != 0) {
            console.log("returned from first condition");
            return -1;
        }
        return this.findDigit(ans.toString(), arg2);
    }

    findDigit(ans, str){
        if(ans.length != str.length) {
            console.log("returned from second condition");
            return -1; // leading zero case
        }
        let itr=0, ret;

        while(itr<ans.length){
            if(str[itr]=='?') ret = parseInt(ans[itr]);
            else if(str[itr] != ans[itr]) {
                console.log("returned from third condition");
                return -1;
            }
            itr++;
        }
        return ret;
    }


    findQuestionMark(mul1, mul2, add, res){
        let order=-1;
        if(this.checkString(mul1)) order=1;
        else if(this.checkString(mul2)) order=2;
        else if(this.checkString(add)) order=3;
        else if(this.checkString(res)) order=4;
        return order;
    }

    checkString(str){
        let i=0, sz = str.length;
        for(i=0;i<sz;i++){
            if(str[i] == '?') return true;
        }
        return false;
    }

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
}

let equation = "42 * 47 + 2 = 1976";
let fixedEquationResponse = new FixEquation();
let response = fixedEquationResponse.findMissingDigit(equation);

if(response > 0)
    console.log("The missing question mark is " + response);
else console.log("No such number can be defined!");