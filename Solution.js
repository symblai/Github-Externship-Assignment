// Write your code here

const {tests} = require("./testCases")

class FixEquation{
    findMissingDigit(equation) {
        const a = equation.split(" * ")[0];
        const b = equation.split(" + ")[0].split("* ")[1];
        const c = equation.split(" + ")[1].split(" = ")[0];
        const d = equation.split("= ")[1];
        let res
        const regex = /\?/
        if(regex.test(a)){
            res = (+d-+c)/+b
            return this.checkMissingValue(regex, res, a)
        } else if (regex.test(b)){
            res = ( +d - +c ) / +a
            return this.checkMissingValue(regex, res, b)
        } else if (regex.test(c)) {
            res = +d-(+a * +b)
            return this.checkMissingValue(regex, res, c)
        }
        else if(regex.test(d)) {
            res = (+a * +b + +c)
            return this.checkMissingValue(regex, res, d)
        }
        return -1;
    }
    
    checkMissingValue(regex, res, nums) {
        res = res.toString()
        let index = regex.exec(nums).index
        if(res.length == nums.length){
            for(var i = 0; i < res.length; i++){
                if(nums.charAt(i) == '?') continue;
                if(res[i] != nums[i]) return -1;
            }
            return res.charAt(index)
        }
        
        return -1;
    }
}


(function main() {
    const x = new FixEquation;
    for(i = 0; i<tests.length; i++)
    console.log(`\nTest case ${i+1}: \n ${tests[i]} \n ? is ${x.findMissingDigit(tests[i])}`);
}());