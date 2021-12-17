// Write your code here
const readline = require("readline");

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

class FixEquation{
    findMissingDigit(equation){
        const myArray = equation.split(" ");
        var question;
        var answer;

        if(myArray[0].includes('?')){
            question = myArray[0];
            var B = parseInt(myArray[2]);
            var C = parseInt(myArray[4]);
            var D = parseInt(myArray[6]);
            answer = (D-C)/B;
        }
        else if(myArray[2].includes('?')){
            question = myArray[2];
            var A = parseInt(myArray[0]);
            var C = parseInt(myArray[4]);
            var D = parseInt(myArray[6]);
            answer = (D-C)/A;
        }
        else if(myArray[4].includes('?')){
            question = myArray[4];
            var A = parseInt(myArray[0]);
            var B = parseInt(myArray[2]);
            var D = parseInt(myArray[6]);
            answer = D-(A*B);
        }
        else if(myArray[6].includes('?')){
            question = myArray[6];
            var A = parseInt(myArray[0]);
            var B = parseInt(myArray[2]);
            var C = parseInt(myArray[4]);
            answer = (A*B)+C;
        }

        if(answer<0 || answer % 1 !== 0 || answer.toString().length < question.length){
            return -1;
        }
        else{
            answer = answer.toString();
            for(let i=0; i<question.length; i++){
                if(question[i]=='?'){
                    return answer[i];
                }
            }
        }
    }
}

interface.question("Enter the equation string : ", function (equ) {
    var object = new FixEquation();
    const result = object.findMissingDigit(equ);
    console.log(`Answer : ${result}`);
    interface.close();
});

