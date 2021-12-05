// Write your code here
class FixEquation {
    findMissingDigit(given_equation) {
        // split the given equation in break point char contains either * , + , = as given equation is A * B + C = D
        let split_equation = given_equation.split(/[*/+=]/);
        let invalidOperand=-1;
        // given equation is string so it may be contain blank spaces which need to be remove
        split_equation = split_equation.map((item) => {
            return item.trim();
        })
        // checking which out of 4 is invalid operand
        if(split_equation[0].includes('?')) invalidOperand=0;
        else if(split_equation[1].includes('?')) invalidOperand=1;
        else if(split_equation[2].includes('?')) invalidOperand=2;
        else if(split_equation[3].includes('?'))invalidOperand=3;
        let [A,B,C,D] = split_equation;
        let new_equation;
        if(invalidOperand === 0) {
            // if B is 0 , after deviding B may lead to INF so returning -1
            if(B == 0)return -1;
            C = parseInt(C)
            B = parseInt(B)
            D = parseInt(D)
            new_equation = (D-C)/B;
        }
        else if(invalidOperand === 1) {
            // if A is 0 , after deviding A may lead to INF so returning -1
            if(A == 0)return -1;
            A = parseInt(A)
            C = parseInt(C)
            D = parseInt(D)
            new_equation = (D-C)/A;
        }
        else if(invalidOperand === 2) {
            A = parseInt(A)
            B = parseInt(B)
            D = parseInt(D)
            new_equation = D-(A*B);
        }
        else if(invalidOperand === 3){
            A = parseInt(A);
            B = parseInt(B);
            C = parseInt(C);
            new_equation = A*B+C;
        }
        // as we have trimed the spaces, the split_equation will be acquirately return the answers

        // if the new_equation length is not match with invalidOperand length return -1
        if(new_equation.toString().length != split_equation[invalidOperand].length){
            return -1;
        }
        else {
            return parseInt(new_equation.toString()[split_equation[invalidOperand].indexOf('?')]);
        }
    }
}

const newobj = new FixEquation()
// Given Testcases
const testcases = ["42 * 47 + 2 = 1?76","4? * 47 + 2 = 1976","42 * ?7 + 2 = 1976","42 * ?47 + 2 = 1976","2 * 12? + 2 = 247"]
testcases.map((equation, index)=>{
    console.log(`Testcase ${index}: ${newobj.findMissingDigit(equation)}`)
})