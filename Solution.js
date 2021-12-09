// Write your code here


// ### Constraints
// - Equation will have the form `A * B + C = D`.
// - Each of A, B, C, D will be a nonempty string of 1 to 4 characters, i.e., `1 <= length of A, B, C, D <= 4`.
// - Each character in each of A, B, C, D will be either a digit ('0'-'9') or a question mark ('?').
// - There will be exactly one question mark in equation.
// - The numbers represented by A, B, C, D will not have leading zeros.

class FixEquation{
    findMissingDigit(equation){
        if(equation){
            const arr = equation.split(/[*,+,=]/);

            let A ,B ,C,D;
            if(arr.length < 4){
                return -1;
            }
            A = arr[0].trim();
            B = arr[1].trim();
            C = arr[2].trim();
            D = arr[3].trim();
            if(!A || !B || !C || !D){
                return -1;
            }

            let val = -1;
            if(A.includes("?")){
                B = B-0;
                C = C-0;
                D = D-0;
                let a = ((D-C)/B).toString();
                val = this.findIt(A,a);
                if(val < 0){
                    return -1;
                }
                return val;
            }
            else if(B.includes("?")){
                A = A-0;
                C = C-0;
                D = D-0;
                let b = ((D-C)/A).toString();
                val = this.findIt(B,b);
                if(val < 0){
                    return -1;
                }
                return val;
            }
            else if(C.includes("?")){
                A = A-0;
                B = B-0;
                D = D-0;
                let c = D - A*B;
                val = this.findIt(C,c);
                if(val < 0){
                    return -1;
                }
                return val;
            }
            else if(D.includes("?")){
                A = A-0;
                B = B-0;
                C = C-0;
                let d = (A*B + C).toString();
                val = this.findIt(D,d);
                if(val < 0){
                    return -1;
                }
                return val;
                
            }
            else{
                return -1;
            }
        }
        else{
            return -1;
        }
    }

    findIt(a,b){
        if(a.length === b.length){
            for(let i=0;i<a.length;i++){
                if(a[i]==='?'){
                    return b[i]-0;
                }
            }
        }
        return -1;
    }
}

function main(){
    var testCase = [
        "42 * 47 + 2 = 1?76",
        "4? * 47 + 2 = 1976",
        "42 * ?7 + 2 = 1976",
        "42 * ?47 + 2 = 1976",
        "2 * 12? + 2 = 247"
    ]
    const obj = new FixEquation();
    testCase.forEach(test=>{
        console.log(obj.findMissingDigit(test));
    })
}

main();