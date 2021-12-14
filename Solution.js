// Write your code here

class FixEquation{
    checkmissing(a,b){
        if(a.length !=b.length) return -1;
        let ans;
        for(let i=0;i<a.length;i++){
            if(a[i] == "?"){
                if ("0123456789".includes(b[i])) ans = b[i];
                else return -1;
            }
            else if(a[i] != b[i]){
                return -1;
            }
        }
        return parseInt(ans);
    }
    findMissingDigit(Equation){
        let firstsplit = Equation.split(" + ");
        let A = firstsplit[0].split(" * ")[0];
        let B = firstsplit[0].split(" * ")[1];
        let C = firstsplit[1].split(" = ")[0];
        let D = firstsplit[1].split(" = ")[1];
        let ans;
        switch (true){
            case (A.includes("?")):
                ans = (parseInt(D) - parseInt(C)) / parseInt(B);
                ans = this.checkmissing(A,ans.toString());
                break
            case (B.includes("?")):
                ans = (parseInt(D) - parseInt(C)) / parseInt(A);
                ans = this.checkmissing(B,ans.toString());
                break
            case (C.includes("?")):
                ans = parseInt(D) - parseInt(A)*parseInt(B);
                ans = this.checkmissing(C,ans.toString());
                break
            case (D.includes("?")):
                ans = parseInt(C) + parseInt(A)*parseInt(B);
                ans = this.checkmissing(D,ans.toString());
                break
        }
        return ans;
    }
}

var fe = new FixEquation();
console.log(fe.findMissingDigit("42 * 47 + 2 = 1?76")); // 9
console.log(fe.findMissingDigit("4? * 47 + 2 = 1976")); // 2
console.log(fe.findMissingDigit("42 * ?7 + 2 = 1976")); // 4
console.log(fe.findMissingDigit("42 * ?47 + 2 = 1976")); // -1
console.log(fe.findMissingDigit("2 * 12? + 2 = 247")); // -1