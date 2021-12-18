const readline = require('readline');
const r = readline.Interface({
    input : process.stdin,
    output: process.stdout
})
// taking input from the console.
let stdin_input = "";
r.question("Equation: ",(data)=>{
    stdin_input = data;
    r.close();
})
r.on("close",()=>{
    console.log(FixEquation.findMissingDigit(stdin_input));
})


class FixEquation{


    static findMissingDigit(equation){

    var A="";              //this will store the tokenized word which is at the place A
    var B="";              //this will store the tokenized word which is at the place B
    var C="";              //this will store the tokenized word which is at the place C
    var D="";              //this will store the tokenized word which is at the place D
    var length=equation.length;  //getting the length of equation
    var s1="";                   //continusly updating string which we used to asign the A,B,C,D
    for(var i=0;i<length;i++)
    {
        if(equation[i]!='*' && equation[i]!='+' && equation[i]!='=')  //if the eqution[i] is digit then add it to s1
        {
            s1=s1+equation[i];
        }
        else
        {
            if(equation[i]=='*')
            {
                A=s1;
            }
            else if(equation[i]=='+')
            {
                B=s1;
            }
            else if(equation[i]=='=')
            {
                C=s1;
            }
            s1="";
        }
    }
    D=s1;



    var A_length=A.length;           //getting the length of A
    var B_length=B.length;           //getting the length of B
    var C_length=C.length;           //getting the length of C
    var D_length=D.length;           //getting the length of D



    var in_quetion;                  //we will store in which string question mark is present like from A,B,C,D in which string ? is present
    for(var i=0;i<A_length;i++)     //for checking if ? is present in A string
    {
        if(A[i]=='?')
        {
            in_quetion='A';
            break;
        }
    }
    for(var i=0;i<B_length;i++)    //for checking if ? is present in B string
    {
        if(B[i]=='?')
        {
            in_quetion='B';
            break;
        }
    }
    for(var i=0;i<C_length;i++)    //for checking if ? is present in C string
    {
        if(C[i]=='?')
        {
            in_quetion='C';
            break;
        }
    }
    for(var i=0;i<D_length;i++)    //for checking if ? is present in D string
    {
        if(D[i]=='?')
        {
            in_quetion='D';
            break;
        }
    }





    if(in_quetion=='A')                          //if ? is present in A string
    {
        var B_int=0;
        var C_int=0;
        var D_int=0;

        for(var i=0;i<B.length;i++)                //for converting string B to number
        {
            B_int=(B_int*10)+(B[i]-'0');
        }
        for(var i=0;i<C.length;i++)                //for converting string C to number
        {
            C_int=(C_int*10)+(C[i]-'0');
        }
        for(var i=0;i<D.length;i++)                //for converting string D to number
        {
            D_int=(D_int*10)+(D[i]-'0');
        }

        if(((D_int-C_int)%B_int)!=0)              //if evalalution is not getting divided then return -1
        {
            return(-1);
        }
        var ans=(D_int-C_int)/B_int;

        var ans1=ans.toString();

        if(ans1.length!=A.length)
        {
            return(-1);
        }

        var index;
        var strings_equal=true;
        for(var i=0;i<A.length;i++)
        {
          if(A[i]!=ans1[i])
          {
            if(A[i]=='?')
            {
              index=i;
            }
            else
            {
              strings_equal=false;
              break;
            }
          }

        }
        if(strings_equal==true)
        {
          for(var i=0;i<=index;i++)
          {
            if(i==index)
            {
              return(ans1[i]-'0');
            }
          }
        }
        else{
          return(-1);
        }
    }
    else if(in_quetion=='B')           //if ? is present in B string
    {
        var A_int=0;
        var C_int=0;
        var D_int=0;

        for(var i=0;i<A.length;i++)      //for converting string A to number
        {
            A_int=(A_int*10)+(A[i]-'0');
        }
        for(var i=0;i<C.length;i++)     //for converting string C to number
        {
            C_int=(C_int*10)+(C[i]-'0');
        }
        for(var i=0;i<D.length;i++)      //for converting string D to number
        {
            D_int=(D_int*10)+(D[i]-'0');
        }

        if(((D_int-C_int)%A_int)!=0)    //if evalalution is not getting divided then return -1
        {
            return(-1);
        }
        var ans=(D_int-C_int)/A_int;

        var ans1=ans.toString();

        if(ans1.length!=B.length)
        {
            return(-1);
        }

        var index;
        var strings_equal=true;
        for(var i=0;i<B.length;i++)
        {
          if(B[i]!=ans1[i])
          {
            if(B[i]=='?')
            {
              index=i;
            }
            else
            {
              strings_equal=false;
              break;
            }
          }

        }
        if(strings_equal==true)
        {
          for(var i=0;i<=index;i++)
          {
            if(i==index)
            {
              return(ans1[i]-'0');
            }
          }
        }
        else{
          return(-1);
        }
    }
    else if(in_quetion=='C')            //if ? is present in C string
    {
        var A_int=0;
        var B_int=0;
        var D_int=0;

        for(var i=0;i<A.length;i++)   //for converting string A to number
        {
            A_int=(A_int*10)+(A[i]-'0');
        }
        for(var i=0;i<B.length;i++) //for converting string B to number
        {
            B_int=(B_int*10)+(B[i]-'0');
        }
        for(var i=0;i<D.length;i++)   //for converting string D to number
        {
            D_int=(D_int*10)+(D[i]-'0');
        }

        if(D_int%(A_int*B_int)!=0)   //if evalalution is not getting divided then return -1
        {
            return(-1);
        }
        var ans=D_int%(A_int*B_int);

        var ans1=ans.toString();

        if(ans1.length!=C.length)
        {
            return(-1);
        }

        var index;
        var strings_equal=true;
        for(var i=0;i<C.length;i++)
        {
          if(C[i]!=ans1[i])
          {
            if(C[i]=='?')
            {
              index=i;
            }
            else
            {
              strings_equal=false;
              break;
            }
          }

        }
        if(strings_equal==true)
        {
          for(var i=0;i<=index;i++)
          {
            if(i==index)
            {
              return(ans1[i]-'0');
            }
          }
        }
        else{
          rteurn(-1);
        }
    }
    else                                                           //if ? is present in D string
    {
        var A_int=0;
        var C_int=0;
        var B_int=0;

        for(var i=0;i<A.length;i++)                           //for converting string A to number
        {
            A_int=(A_int*10)+(A[i]-'0');
        }
        for(var i=0;i<C.length;i++)                           //for converting string C to number
        {
            C_int=(C_int*10)+(C[i]-'0');
        }
        for(var i=0;i<B.length;i++)                           //for converting string B to number
        {
            B_int=(B_int*10)+(B[i]-'0');
        }



        var ans=(A_int*B_int)+C_int;

        var ans1=ans.toString();


        if(ans1.length!=D.length)
        {
            return(-1);
        }

        var index=0;
        var strings_equal=1;
        for(var i=0;i<D.length;i++)
        {
          if(D[i]!=ans1[i])
          {
            if(D[i]=='?')
            {
              index=i;
            }
            else
            {
              strings_equal=0;
              break;
            }
          }

        }

        if(strings_equal==1)
        {
          for(var i=0;i<=index;i++)
          {
            if(i==index)
            {
              return(ans1[i]-'0');
            }
          }
        }
        else
        {

          return(-1);
        }
    }

    return(-1);
    }


}
