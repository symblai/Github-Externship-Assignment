class FixEquation{
  findMissingDigit(equation){
      let pos=0; let cnt=1; 
      for(let i=0;i<equation.length;i++){

        if(equation[i]=='+'||equation[i]=='*'||equation[i]=='=')cnt++;
        if(equation[i]=='?'){pos=cnt; break;}
      }

 
      let result=0; let a=0; let b=0; let c=0; let curr=0;
      if(pos==1){
          for(let i=0;i<equation.length;i++){ 
              if(equation[i]>='0'&&equation[i]<='9')curr=curr*10+(equation[i]-'0');
              if(equation[i]=='*')curr=0;
              if(equation[i]=='+'){a=curr; curr=0;}
              if(equation[i]=='='){b=curr; curr=0;}
           }
          c=curr;  if((c-b)%a!=0||c==b)return -1;
          let original =(c-b)/a;
          let s=String(original);
          let ss=""; 
          for(let i=0;i<equation.length;i++){
              if(equation[i]>='0'&&equation[i]<='9'||equation[i]=='?')ss=ss+String(equation[i]);
              if(equation[i]=='*')break;
          }
      
          if(ss.length!=s.length)return -1;  let ind=0;
          for(let i=0;i<ss.length;i++){if(s[i]!=ss[i]&&ss[i]!='?')return -1; if(ss[i]=='?')ind=i;}
          return s[ind];       
      
      }
      else if(pos==2){
          for(let i=0;i<equation.length;i++){ 
              if(equation[i]>='0'&&equation[i]<='9')curr=curr*10+(equation[i]-'0');
              if(equation[i]=='*'){a=curr; curr=0;}
              if(equation[i]=='+')curr=0;
              if(equation[i]=='='){b=curr; curr=0;}
          }
          c=curr; if((c-b)%a!=0||c==b)return -1; 
          let original =(c-b)/a;
          let s=String(original);
          let ss=""; 
          for(let i=0;i<equation.length;i++){
              if(equation[i]>='0'&&equation[i]<='9'||equation[i]=='?')ss=ss+String(equation[i]);
              if(equation[i]=='*')ss="";
              if(equation[i]=='+')break;
          }
     
          if(ss.length!=s.length)return -1;  let ind=0;
          for(let i=0;i<ss.length;i++){if(s[i]!=ss[i]&&ss[i]!='?')return -1; if(ss[i]=='?')ind=i;}
          return s[ind];    
       }

      else if(pos==3){
          for(let i=0;i<equation.length;i++){ 
              if(equation[i]>='0'&&equation[i]<='9')curr=curr*10+(equation[i]-'0');
              if(equation[i]=='*'){a=curr; curr=0;}
              if(equation[i]=='+'){b=curr; curr=0;}
              if(equation[i]=='=')curr=0;
          }
          c=curr; if(c-a*b<=0)return -1; 
          let original =c-a*b;
          let s=String(original);
          let ss=""; 
          for(let i=0;i<equation.length;i++){
              if(equation[i]>='0'&&equation[i]<='9'||equation[i]=='?')ss=ss+String(equation[i]);
              if(equation[i]=='*'||equation[i]=='+')ss="";
              if(equation[i]=='=')break;
          }
      
          if(ss.length!=s.length)return -1;  let ind=0;
          for(let i=0;i<ss.length;i++){if(s[i]!=ss[i]&&ss[i]!='?')return -1; if(ss[i]=='?')ind=i;}
          return s[ind];  
      }

      else{

        for(let i=0;i<equation.length;i++){ 
            if(equation[i]>='0'&&equation[i]<='9')curr=curr*10+(equation[i]-'0');
            if(equation[i]=='*'){a=curr; curr=0;}
            if(equation[i]=='+'){b=curr; curr=0;}
            if(equation[i]=='='){c=curr; curr=0;}
      }
      
        let original =c+(a*b);
        let s=String(original);
        let ss=""; 
        for(let i=0;i<equation.length;i++){
            if(equation[i]>='0'&&equation[i]<='9'||equation[i]=='?')ss=ss+String(equation[i]);
            if(equation[i]=='*'||equation[i]=='+'||equation[i]=='=')ss="";
        
        }
      
        if(ss.length!=s.length)return -1;  let ind=0;
        for(let i=0;i<ss.length;i++){if(s[i]!=ss[i]&&ss[i]!='?')return -1; if(ss[i]=='?')ind=i;}
        return s[ind];
      }

  }

}


