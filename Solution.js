// Write your code here
class FixEquation {
    findMissingDigit(S) {  // String Parameter
        const Arr = S.split(" ");
        var flag = 0
        var missingDigPos = 1;
        var pos = 0;
        var res = 0;
        var ans = -1;
        for(let x in Arr){
            if (x == "+" || x == "-" || x == "*" || x == "*"){
                missingDigPos += 1;
                continue;
            }
            else{
                for(let y in x){
                    if(y=="?"){
                        flag = 1;
                        break;
                    }
                    pos++;
                }
                if(flag==1){
                    break;
                }
            }

        }
        var A = parseInt(Arr[0]);
        var B = parseInt(Arr[2]);
        var C = parseInt(Arr[4]);
        var D = parseInt(Arr[6]);
        flag = 0;
        switch (missingDigPos){
            case 1:
                var B = parseInt(Arr[2]);
                var C = parseInt(Arr[4]);
                var D = parseInt(Arr[6]);
                res = parseInt( (D - C) / B );
                const Digits = [];
                var i = 0;
                var temp = res;
                while(temp){
                    Digits[i++] = temp%10;
                    temp/=10;
                }
                i--;
                for (x in Arr[0]){
                    if(Digits[i--]==parseInt(x[0])){
                        flag = 1; 
                    }
                    else if(x == "?"){
                        ans = Digits[i--];
                    }
                    else{
                        flag = 0;
                        break;
                    }
                }
                break;
            case 2:
                var A = parseInt(Arr[0]);
                var C = parseInt(Arr[4]);
                var D = parseInt(Arr[6]);
                res = parseInt( (D - C) / A );
                const Digits = [];
                var i = 0;
                var temp = res;
                while(temp){
                    Digits[i++] = temp%10;
                    temp/=10;
                }
                i--;
                for (x in Arr[2]){
                    if(Digits[i--]==parseInt(x[0])){
                        flag = 1; 
                    }
                    else if(x == "?"){
                        ans = Digits[i--];
                    }
                    else{
                        flag = 0;
                        break;
                    }
                }
                break;
            case 3:
                var A = parseInt(Arr[0]);
                var B = parseInt(Arr[2]);
                var D = parseInt(Arr[6]);
                res = parseInt( D - (A*B) );
                const Digits = [];
                var i = 0;
                var temp = res;
                while(temp){
                    Digits[i++] = temp%10;
                    temp/=10;
                }
                i--;
                for (x in Arr[4]){
                    if(Digits[i--]==parseInt(x[0])){
                        flag = 1; 
                    }
                    else if(x == "?"){
                        ans = Digits[i--];
                    }
                    else{
                        flag = 0;
                        break;
                    }
                }
                break;
            case 4:
                var A = parseInt(Arr[0]);
                var B = parseInt(Arr[2]);
                var C = parseInt(Arr[4]);
                res = parseInt( (A*B) + C );
                const Digits = [];
                var i = 0;
                var temp = res;
                while(temp){
                    Digits[i++] = temp%10;
                    temp/=10;
                }
                i--;
                for (x in Arr[6]){
                    if(Digits[i--]==parseInt(x[0])){
                        flag = 1; 
                    }
                    else if(x == "?"){
                        ans = Digits[i--];
                    }
                    else{
                        flag = 0;
                        break;
                    }
                }
                break;
        }
        if (flag == 0){
            return -1;
        }
        return ans;
    }
}

