'use strict';
//This piece of code handles the input part and takes a string as an input
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

//Main class starts here
class FixEquation{
    constructor(){};
  
//helper function for checking obtained two strings  
check(s1, s2, a,b,c,d){
  if(s1.length != s2.length) return false;
  let obt=a*b+c;
  if(obt !== d) return false;
  return true;
  
}

//helper function for getting final missing character
getC(s1, s2){
  let ret;
  for(var i=0;i<s1.length;i++){
    if(s1.charAt(i) == '?'){
      ret = s2.charAt(i);
      break;
    }
  }
  return ret;
}

//main function that handles the input
findMissingDigit(equation){
    let str=equation.split(" ");
    let fa=str[0], fb=str[2], fc=str[4], fd=str[6];
    
    let pos = -1;
    if(fa.includes('?')) pos=0;
    else if(fb.includes('?')) pos=2;
    else if(fc.includes('?')) pos=4;
    else pos=6;
    
    
    let a=parseInt(fa), b=parseInt(fb), c=parseInt(fc), d=parseInt(fd);
    
    let flag=false;
    
    if(pos == 0){
      let ta=parseInt((d-c)/b);
      flag=this.check(ta.toString(),fa,ta,b,c,d);
      if(flag == true){
        let ch=this.getC(fa,ta.toString());
        return parseInt(ch);
      }
    }else if(pos == 2){
      let tb=parseInt((d-c)/a);
      flag=this.check(tb.toString(),fb,a,tb,c,d);
      if(flag == true) {
        let ch=this.getC(fb,tb.toString());
        return parseInt(ch);
      }
    }else if(pos == 4){
      let tc=parseInt(d-a*b);
      flag=this.check(tc.toString(),fc,a,b,tc,d);
      if(flag == true){
        let ch=this.getC(fc,tc.toString());
        return parseInt(ch);
      }
    }else if(pos == 6){
      let td=parseInt(a*b+c);
      flag=this.check(td.toString(),fd,a,b,c,td);
      if(flag == true) {
        let ch=this.getC(fd,td.toString());
        return parseInt(ch);
      }
    }
    
    return -1;
  }
}


//here input is taken and function is called via object for the class
function main(){
  const equation = readLine();
  let obj = new FixEquation();
 let value = obj.findMissingDigit(equation);
  console.log(value);
}
