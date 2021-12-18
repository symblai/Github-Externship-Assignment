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



    var in_quetion;
    for(var i=0;i<A_length;i++)
    {
        if(A[i]=='?')
        {
            in_quetion='A';
            break;
        }
    }
    for(var i=0;i<B_length;i++)
    {
        if(B[i]=='?')
        {
            in_quetion='B';
            break;
        }
    }
    for(var i=0;i<C_length;i++)
    {
        if(C[i]=='?')
        {
            in_quetion='C';
            break;
        }
    }
    for(var i=0;i<D_length;i++)
    {
        if(D[i]=='?')
        {
            in_quetion='D';
            break;
        }
    }





    if(in_quetion=='A')
    {
        var B_int=0;
        var C_int=0;
        var D_int=0;

        for(var i=0;i<B.length;i++)
        {
            B_int=(B_int*10)+(B[i]-'0');
        }
        for(var i=0;i<C.length;i++)
        {
            C_int=(C_int*10)+(C[i]-'0');
        }
        for(var i=0;i<D.length;i++)
        {
            D_int=(D_int*10)+(D[i]-'0');
        }

        if(((D_int-C_int)%B_int)!=0)
        {
            return(-1);
        }
        var ans=(D_int-C_int)/B_int;

        var ans1=ans.toString();

        if(ans1.length!=A.length)
        {
            return(-1);
        }

        for(var i=0;i<A.length;i++)
        {
            if(A[i]=='?')
            {
                return(ans1[i]-'0');
            }
        }
    }
    else if(in_quetion=='B')
    {
        var A_int=0;
        var C_int=0;
        var D_int=0;

        for(var i=0;i<A.length;i++)
        {
            A_int=(A_int*10)+(A[i]-'0');
        }
        for(var i=0;i<C.length;i++)
        {
            C_int=(C_int*10)+(C[i]-'0');
        }
        for(var i=0;i<D.length;i++)
        {
            D_int=(D_int*10)+(D[i]-'0');
        }

        if(((D_int-C_int)%A_int)!=0)
        {
            return(-1);
        }
        var ans=(D_int-C_int)/A_int;

        var ans1=ans.toString();

        if(ans1.length!=B.length)
        {
            return(-1);
        }

        for(var i=0;i<B.length;i++)
        {
            if(B[i]=='?')
            {
                return(ans1[i]-'0');
            }
        }
    }
    else if(in_quetion=='C')
    {
        var A_int=0;
        var B_int=0;
        var D_int=0;

        for(var i=0;i<A.length;i++)
        {
            A_int=(A_int*10)+(A[i]-'0');
        }
        for(var i=0;i<B.length;i++)
        {
            B_int=(B_int*10)+(B[i]-'0');
        }
        for(var i=0;i<D.length;i++)
        {
            D_int=(D_int*10)+(D[i]-'0');
        }

        if(D_int%(A_int*B_int)!=0)
        {
            return(-1);
        }
        var ans=D_int%(A_int*B_int);

        var ans1=ans.toString();

        if(ans1.length!=C.length)
        {
            return(-1);
        }

        for(var i=0;i<C.length;i++)
        {
            if(C[i]=='?')
            {
                return(ans1[i]-'0');
            }
        }
    }
    else
    {
        var A_int=0;
        var C_int=0;
        var B_int=0;

        for(var i=0;i<A.length;i++)
        {
            A_int=(A_int*10)+(A[i]-'0');
        }
        for(var i=0;i<C.length;i++)
        {
            C_int=(C_int*10)+(C[i]-'0');
        }
        for(var i=0;i<B.length;i++)
        {
            B_int=(B_int*10)+(B[i]-'0');
        }



        var ans=(A_int*B_int)+C_int;

        var ans1=ans.toString();


        if(ans1.length!=D.length)
        {
            return(-1);
        }

        for(var i=0;i<D.length;i++)
        {
            if(D[i]=='?')
            {
                return(ans1[i]-'0');
            }
        }
    }

    return(-1);
    }


}
