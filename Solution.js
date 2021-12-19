// Write your code here
class FixEquation{

    findMissingDigit(equation){
        let a = equation.split(" ");
        let ans=0;
        if(a[6].includes("?")){
           ans= parseInt(a[0])*parseInt(a[2])+parseInt(a[4]);
           ans=ans.toString();
           if(ans.length!=a[6].length)
           return -1;
           let v=""
           for(var i=0;i<a[6].length;i++)
           {
               if(a[6][i]=="?")
                v=ans[i];
                else if(a[6][i]!=ans[i])
                return -1;
           }
           return parseInt(v);
        }
        else if(a[4].includes("?")){
            ans=parseInt(a[6])-parseInt(a[0])*parseInt(a[2]);
            ans=ans.toString();
           if(ans.length!=a[4].length)
           return -1;
           let v=""
           for(var i=0;i<a[4].length;i++)
           {
               if(a[4][i]=="?")
                v=ans[i];
                else if(a[4][i]!=ans[i])
                return -1;
           }
           return parseInt(v);
        }
        else if(a[2].includes("?")){
            if((parseInt(a[6])-parseInt(a[4]))%parseInt(a[0])!=0)
            return -1;
            ans=(parseInt(a[6])-parseInt(a[4]))/parseInt(a[0]);
            ans=ans.toString();
           if(ans.length!=a[2].length)
           return -1;
           let v=""
           for(var i=0;i<a[2].length;i++)
           {
               if(a[2][i]=="?")
                v=ans[i];
                else if(a[2][i]!=ans[i])
                return -1;
           }
           return parseInt(v);
        }
        else if(a[0].includes("?")){
            if((parseInt(a[6])-parseInt(a[4]))%parseInt(a[2])!=0)
            return -1;
            ans=(parseInt(a[6])-parseInt(a[4]))/parseInt(a[2]);
            ans=ans.toString();
           if(ans.length!=a[0].length)
           return -1;
           let v=""
           for(var i=0;i<a[0].length;i++)
           {
               if(a[0][i]=="?")
                v=ans[i];
                else if(a[0][i]!=ans[i])
                return -1;
           }
           return parseInt(v);
        }
    }
}

const Equation = new FixEquation()
console.log(Equation.findMissingDigit("42 * 47 + 2 = 1?76"))
console.log(Equation.findMissingDigit("4? * 47 + 2 = 1976"))
console.log(Equation.findMissingDigit("42 * ?7 + 2 = 1976"))
console.log(Equation.findMissingDigit("42 * ?47 + 2 = 1976"))
console.log(Equation.findMissingDigit("2 * 12? + 2 = 247"))


