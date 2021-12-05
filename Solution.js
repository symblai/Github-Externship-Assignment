
// step 1- split the string around white space using split method that will give us array of ['A','*','B','+','C','=','D']

// step-2 find the Number with question mark and its index in the above array 

// step-3 Convert strings A,B,C,D into integers(except the number which has "?")

// step-4 find the actual number whic has to be there in place of string with ?

// step-5 compare the actual string which we found above and the string with "?" and hence find the value "?"


// write your code here


class FixEquation 
{
 
      findMissingDigit(equation) 
    {
// step-1 we will make an array of all the chracters removing all white spaces
const splitEquation= equation.split(" ");

// step-2 Now we will find the string which contain '?'
const defect = splitEquation.filter(word => (word.includes("?")))[0];
const defectIndex=splitEquation.indexOf(defect);

// step-3 Convert strings A,B,C,D into integers(except the number which has "?")
function convertToint(index)  
{
    
        let intValue = -1;
        if (index != defectIndex) {

            intValue = parseInt(splitEquation[index], 10);
        } else {
            intValue =defect;
        }

        return intValue;
    
};
const A= convertToint(0);
const B= convertToint(2);
const C= convertToint(4);
const D= convertToint(6);

// step-4 now we will find the actual number 
function correctNumber(A, B, C, D, defect)
 {
    let correctNum = -1;

    if (A === defect) {
        if ((D - C) % B == 0) {
            correctNum = (D - C) / B;
        }
    } else if (B === defect) {
        if ((D - C) % A == 0) {
            correctNum = (D - C) / A;
        }
    } else if (C === defect) {
        if (D - (A * B) >= 0) {
            correctNum = D - (A * B);
        }
    } else if (D === defect) {
        correctNum = A * B + C;
    }
    return(correctNum.toString());
};
const actualString=correctNumber(A, B, C,D, defect);

//step-5 compare the actual string which we found above and the string with "?" and hence find the value "?"
function compare(actualString, defect) 
{
    
    if (actualString.length != defect.length || actualString.charAt(0) === '0') {
        return -1
    }
    let position = -1;
    for (let index = 0; index < defect.length; index++) {
        if (defect.charAt(index) === '?') {
            position = index;
            break;
        }
    }
    return(parseInt(actualString.charAt(position), 10));
}



const finalAnswer= compare(actualString,defect);


return finalAnswer;
};
}

// for checking
const FixEquationObj= new FixEquation();

console.log(FixEquationObj.findMissingDigit("42 * 47 + 2 = 1?76"));
