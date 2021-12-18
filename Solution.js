class fixEquation {
  constructor() {}
  findMissingDigit(equation) {

        // equation has the form A*B+C = D
        // regex expression
        const re = /[\s+*=]+/;
        // splitting equation to get A B C D
        const text = equation.split(re);
        // creating object to store A B C D
        let equationObj = { A: text[0], B: text[1], C: text[2], D: text[3] };
 
        let unknown;
        let answer;

        // check which value has '?' 
        Object.keys(equationObj).forEach((data, key) => {
            if (equationObj[data].split(/[?]/).length === 1) {
                equationObj[data] = parseInt(equationObj[data]);
            } else {
                unknown = data;
            }
        });

        // calculate answer 
        switch (unknown) {
            case "A":
                answer = (equationObj["D"] - equationObj["C"]) / equationObj["B"];
                break;
            case "B":
                answer = (equationObj["D"] - equationObj["C"]) / equationObj["A"];
                break;
            case "C":
                answer = equationObj["D"] - equationObj["A"] * equationObj["B"];
                break;
            case "D":
                answer = equationObj["A"] * equationObj["B"] + equationObj["C"];
                break;
        }
        // console.log(`equationObj[unknown] = ${equationObj[unknown]}`)
        // console.log(`answer = ${answer}`)

        // return -1 for invalid answer
        if (equationObj[unknown].length !== answer.toString().length) {
            return -1;
        }
        
        // return answer if its valid
        for (let x in equationObj[unknown]) {
            if (answer.toString()[x] !== equationObj[unknown].charAt(x)) {
                return parseInt(answer.toString()[x]);
            }
        }
    }
}
// object of class fixEquation
let fixEquationObj = new fixEquation();
// equations
question = ["42 * 47 + 2 = 1?76", 
             "4? * 47 + 2 = 1976",
             "42 * ?7 + 2 = 1976", 
             "42 * ?47 + 2 = 1976", 
             "2 * 12? + 2 = 247"]

question.forEach((qe, key)=>{
    console.log(`Test Case ${key + 1}`);
    console.log(qe)
    console.log(fixEquationObj.findMissingDigit(qe))
    console.log('\n')
})

