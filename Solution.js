// Write your code here
class FixEquation{
  findMissingDigit(equation){
      const arr=equation.split(" ");
      let [a,b,c,d] = [arr[0],arr[2],arr[4],arr[6]];
    
      let count=0;
      const n = arr.length;
      for(let i=0;i<n;i+=2){
          if(arr[i].includes("?")) 
            break;
          count++;
      }


      if(count===0)
      {
        b=parseInt(b);
        c=parseInt(c);
        d=parseInt(d);
        
        if(b===0) return "-1";
        let temp=(d-c)/b;

        let index=a.indexOf("?");
        temp=temp.toString();

        a=replaceAt(a,index,temp[index])
        return temp===a ? temp[index] : "-1"
      }
      else if(count===1)
      {
        a=parseInt(a);
              c=parseInt(c);
              d=parseInt(d);
              if(a===0) return "-1";
              let temp=(d-c)/a;
              let index=b.indexOf("?");
              temp=temp.toString();
              b=replaceAt(b,index,temp[index])
              return temp===b ? temp[index] : "-1"
      }
      else if(count===2)
      {
        a=parseInt(a);
              b=parseInt(b);
              d=parseInt(d);
              let temp=d-a*b;
              let index=c.indexOf("?");
              temp=temp.toString();
              c=replaceAt(c,index,temp[index])

              return temp===c ? temp[index] : "-1"
      }
      else if(count===3)
      {
        a=parseInt(a);
              b=parseInt(b);
              c=parseInt(c);
              let temp=a*b+c;
              let index=d.indexOf("?");
              temp=temp.toString();
              d=replaceAt(d,index,temp[index])

              return temp===d ? temp[index] : "-1"
      }
      else
      {
        return "-1";
      }
  }
}

function replaceAt(str,index, character) {
  return str.substr(0, index) + character + str.substr(index+character.length);
};

const FixEquationObj= new FixEquation();
  const equation = "42 * ?7 + 2 = 1976";
  const x = FixEquationObj.findMissingDigit(equation);
   console.log(x);
