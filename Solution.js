'use strict';
//Following code takes input from user
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
 
 
//Class for solution starts here
class FixEquation{
    //useless constructor
    constructor(){};
  
    
//function to check if solution is possible for final string or not  
utils(s, t, p, q, r, s){
  if(s.length != t.length) return false;
  let val=p*q+r;
  if(val !== s) return false;
  return true;
}
 
//fucntion to finally get the answer once the solution is a valid one
findChar(s, t){
  let ans;
  for(var i=0;i<s.length;i++){
    if(s.charAt(i) == '?'){
      ans = t.charAt(i);
      break;
    }
  }
  return ans;
}
 
    
//function to be implemented
findMissingDigit(equation){
    let str=equation.split(" ");
    let fa=str[0], fb=str[2], fc=str[4], fd=str[6];
    
    let idx = -1;
    if(fa.includes('?')) idx=0;
    else if(fb.includes('?')) idx=2;
    else if(fc.includes('?')) idx=4;
    else idx=6;
    
    let a=parseInt(fa), b=parseInt(fb), c=parseInt(fc), d=parseInt(fd), check=false;
    
    if(idx == 0){
      let ta=parseInt((d-c)/b);
      check=this.utils(ta.toString(),fa,ta,b,c,d);
      if(check == true){
        let ch=this.findChar(fa,ta.toString());
        return parseInt(ch);
      }
    }
    else if(idx == 2){
      let tb=parseInt((d-c)/a);
      check=this.utils(tb.toString(),fb,a,tb,c,d);
      if(check == true) {
        let ch=this.findChar(fb,tb.toString());
        return parseInt(ch);
      }
    }
    else if(idx == 4){
      let tc=parseInt(d-a*b);
      check=this.utils(tc.toString(),fc,a,b,tc,d);
      if(check == true){
        let ch=this.findChar(fc,tc.toString());
        return parseInt(ch);
      }
    }
    else if(idx == 6){
      let td=parseInt(a*b+c);
      check=this.utils(td.toString(),fd,a,b,c,td);
      if(check == true) {
        let ch=this.findChar(fd,td.toString());
        return parseInt(ch);
      }
    }
    return -1;
  }
}
 
//user input is taken through main function
function main(){
  const equation = readLine();
  let sol = new FixEquation();
 let ans = sol.findMissingDigit(equation);
  console.log(ans);
}
