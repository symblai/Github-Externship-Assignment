// Write your code here

// function to replace the character at a perticular position in string
function replaceAt(str,index, character) {
    return str.substr(0, index) + character + str.substr(index+character.length);
};

// Fix Equation Class
class FixEquation{

    //Find Missing Digit Function to find the missing vakue in equation
    
    findMissingDigit(equation){
        // To sepearte the equations in diffrent part
        let params=equation.split(" ");
        // intialize variable A B C D of equation  
        let [a,b,c,d] = [params[0],params[2],params[4],params[6]];
        // count variable to get the variable which has missing value
        let count=0;
        for(let i=0;i<params.length;i+=2){
            if(params[i].includes("?")) 
              break;
            count++;
        }
        
        // like if count is 0 then missing character is in A
        // like if count is 1 then missing character is in B
        // like if count is 2 then missing character is in C
        // like if count is 3 then missing character is in D
        
        switch(count){
            case 0:{
                // converting all the string in number for easy calculations
                b=parseInt(b);
                c=parseInt(c);
                d=parseInt(d);
                // if b==0 then return -1
                if(b===0) return "-1";
                let temp=(d-c)/b;
                // find the index of ? in a variable
                let index=a.indexOf("?");
                temp=temp.toString();
                //replace ? in a with index of temp
                a=replaceAt(a,index,temp[index])
                // console.log(temp,a);
                // if temp === a return that value at index index else return -1
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