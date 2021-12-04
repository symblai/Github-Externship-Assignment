// Write your code here
function replaceAt(str,index, character) {
    return str.substr(0, index) + character + str.substr(index+character.length);
};

class FixEquation{
    
    findMissingDigit(equation){
        let params=equation.split(" ");
        let [a,b,c,d] = [params[0],params[2],params[4],params[6]];
        let count=0;
        for(let i=0;i<params.length;i+=2){
            if(params[i].includes("?")) 
              break;
            count++;
        }
        switch(count){
            case 0:{
                b=parseInt(b);
                c=parseInt(c);
                d=parseInt(d);
                if(b===0) return "-1";
                let temp=(d-c)/b;
                let index=a.indexOf("?");
                temp=temp.toString();
                a=replaceAt(a,index,temp[index])
                // console.log(temp,a);
                return temp===a ? temp[index] : "-1"
            }
            break;
            case 1:{
                a=parseInt(a);
                c=parseInt(c);
                d=parseInt(d);
                if(a===0) return "-1";
                let temp=(d-c)/a;
                let index=b.indexOf("?");
                temp=temp.toString();
                b=replaceAt(b,index,temp[index])
                // console.log(temp,b);
                return temp===b ? temp[index] : "-1"
            }
            break;
            case 2:{
                a=parseInt(a);
                b=parseInt(b);
                d=parseInt(d);
                let temp=d-a*b;
                let index=c.indexOf("?");
                temp=temp.toString();
                c=replaceAt(c,index,temp[index])
                // console.log(temp,c);
                return temp===c ? temp[index] : "-1"
            }
            break;
            case 3:{
                a=parseInt(a);
                b=parseInt(b);
                c=parseInt(c);
                let temp=a*b+c;
                let index=d.indexOf("?");
                temp=temp.toString();
                d=replaceAt(d,index,temp[index])
                // console.log(temp,d);
                return temp===d ? temp[index] : "-1"
            }
            break;
            default:
                return "-1";
        }
    }
}


const FixEquationObj= new FixEquation();

console.log(FixEquationObj.findMissingDigit("42 * 47 + 2 = 1?76"))
