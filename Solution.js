// Write your code here
class FixEquation {
    /**
     * @property {Function} findMissingDigit - Returns the missing digit from the given equation of the form A * B + C = D
     * @param {String} equation - String equation containing an equation of the form A * B + C = D
     * @returns {Number} - returns the missing digit if it is a valid equation else returns -1
     */
    findMissingDigit(equation){
        // split the equation based on the integer strings 
        const eachVal = equation.trim().split(/\+|\*|\=/g).map((each)=>each.trim());
        // Destructing for forming the equation later
        let [A, B, C, D] = eachVal
        // variables to store the missing digit index in the eachVal array, the missing digit integer, missing index position in the integer string
        let toFind, val,missingIndex;
        // to check if  A, B, C, D will be a nonempty string of 1 to 4 characters, and get the missing index position
       for(let i = 0; i<4;i++){
         if(eachVal[i].length > 4 || eachVal[i].length ===0){
             return -1
         }
         if(eachVal[i].includes('?')){
             toFind = i
             missingIndex = eachVal[i].indexOf('?')
         }
       }
       // based on the missing index we form the equation
       switch (toFind){
        case 0:
            val = (parseInt(D) - parseInt(C)) / (parseInt(B))
            break;
        case 1:
            val = (parseInt(D) - parseInt(C)) / (parseInt(A))
            break;

        case 2:
            val = parseInt(D) / (parseInt(C)*parseInt(A))
            break;

        case 3:
            val = (parseInt(A) * parseInt(B)) + (parseInt(C))   
            break;

        }       
    // if the value we are getting has less characters than the missing digit integer itself then return -1 
    if(eachVal[toFind].length !== val.toString().length) return -1
    //if the value if float return -1 else split the missing integer and return the missing digit index's value
    return (!Number.isInteger(val)) ? -1 : val.toString().split('')[missingIndex];
    }
}

const eq = new FixEquation()
// Test cases:
console.log(eq.findMissingDigit('42 * 47 + 2 = 1?76'));  //9
console.log(eq.findMissingDigit('4? * 47 + 2 = 1976'));  //2
console.log(eq.findMissingDigit('42 * ?7 + 2 = 1976'));  //4
console.log(eq.findMissingDigit('42 * ?47 + 2 = 1976')); //-1
console.log(eq.findMissingDigit('2 * 12? + 2 = 247'));   //-1