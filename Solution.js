function findMissingDigit(equation) {
    var firstNum = equation.split("*");
    
    var secondNum = firstNum[1].split("+");
    
    var thirdNum = secondNum[1].split("=");
    
    var fourthNum = thirdNum[1];
    
    // console.log(firstNum[0], secondNum[0], thirdNum[0], fourthNum);

    check1 = checkQuestion(firstNum[0]);
    check2 = checkQuestion(secondNum[0]);
    check3 = checkQuestion(thirdNum[0]);
    check4 = checkQuestion(fourthNum);

    // check for 1
    if(check1===true) {
        var ans = (parseInt(fourthNum)-parseInt(thirdNum[0]))/parseInt(secondNum[0]);
        
        for(var i=firstNum[0].length-1; i>=0; i--) {
            if(firstNum[0][i] === '?') {
                var position = i;
                break;
            }
        }
        if(position === 0){
            var leftNum = firstNum[0].slice(1,firstNum[0].length);
        }
        
        if(position === firstNum[0].length-1) {
            var leftNum = firstNum[0].slice(0, firstNum[0].length-1);
        }
        var length = String(ans).length;
        var ans1 = ans;
        while(ans>0) {
            if(length === position+1) {
                var rem = Math.floor(ans%10);
            } 
            length = length - 1;
            ans = ans/10;
        }
        
        if(ans1 === parseInt(leftNum)) {
            rem = -1;
        }
        console.log(rem);
        }
        // end check for 1

        // check for 2
        if(check2===true) {
            var ans = (parseInt(fourthNum)-parseInt(thirdNum[0]))/parseInt(firstNum[0]);
            
            for(var i=secondNum[0].length-1; i>=0; i--) {
                if(secondNum[0][i] === '?') {
                    var position = i;
                    break;
                }
            }
            if(position === 0){
                var leftNum = secondNum[0].slice(1,secondNum[0].length);
            }
            if(position === secondNum[0].length-1) {
                var leftNum = secondNum[0].slice(0, secondNum[0].length-1);
            }
            
            var length = String(ans).length;
            var ans1 = ans;
            while(ans>0) {
                if(length === position+1) {
                    var rem = Math.floor(ans%10);
                } 
                length = length - 1;
                ans = ans/10;
            }
            
        if(ans1 === parseInt(leftNum)) {
            rem = -1;
        }
            console.log(rem);
            }
    
        // end check for 2

        // check for 3
        if(check3===true) {
            var ans = parseInt(fourthNum)-(parseInt(firstNum[0])*parseInt(secondNum[0]));
            
            for(var i=thirdNum[0].length-1; i>=0; i--) {
                if(thirdNum[0][i] === '?') {
                    var position = i;
                    break;
                }
            }
            if(position === 0){
                var leftNum = thirdNum[0].slice(1,thirdNum[0].length);
            }
            if(position === thirdNum[0].length-1) {
                var leftNum = thirdNum[0].slice(0, thirdNum[0].length-1);
            }
            var length = String(ans).length;
            var ans1 = ans;
            while(ans>0) {
                if(length === position+1) {
                    var rem = Math.floor(ans%10);
                } 
                length = length - 1;
                ans = ans/10;
            }
            
        if(ans1 === parseInt(leftNum)) {
            rem = -1;
        }
            console.log(rem);
            }
        // end check for 3

    // check for 4

    if(check4===true) {
        ans = (parseInt(firstNum[0])*parseInt(secondNum[0]))+parseInt(thirdNum[0]);
        for(var i=fourthNum.length-1; i>=0; i--) {
            if(fourthNum[i] === '?') {
                var position = i;
                break;
            }
        }
        if(position === 0){
            var leftNum = fourthNum.slice(1,fourthNum.length);
        }
        if(position === fourthNum.length-1) {
            var leftNum = fourthNum.slice(0, fourthNum.length-1);
        }

        var length = String(ans).length;
        var ans1 = ans;
            while(ans>0) {
                if(length === position+1) {
                    var rem = Math.floor(ans%10);
                }
                length = length - 1;
                ans = ans/10;
            }
        
        if(ans1 === parseInt(leftNum)) {
            rem = -1;
        }
    console.log(rem);
        }
        // end check for 4
}

function checkQuestion(string) {
    var length = string.length;
    for(var i=0; i<length; i++) {
        if(string[i]=='?') {
            return true;
        }
    }
    return false;
}

findMissingDigit("42*?7+2=1976");