// Write your code here
class FixEquation{
  let A;
  let B;
  let C;
  let D;
  constructor(A,B,C,D)
  {
    this.A=A;
    this.B=B;
    this.C=C;
    this.D=D;
  }
  // A * B + C = D

  //function
  findMissingDigit()
  {
    let a,b,c,d;

    if(A.indexOf("?"))
    {
      a=(parseInt(D)-parseInt(C))/parseInt(B);
      let x=a.toString();
      if(x.length!=A.length)
      {
        return -1;
      }
      for(let i=0;i<4;i++)
      {
        if(A[i]=="?")
        return x[i];
      }
    }
    else if(B.indexOf("?"))
    {
      b=(parseInt(D)-parseInt(C))/parseInt(A);
      let x=b.toString();
      if(x.length!=B.length)
      {
        return -1;
      }
      for(let i=0;i<4;i++)
      {
        if(B[i]=="?")
        return x[i];
      }
    }
    else if(C.indexOf("?"))
    {
      c=parseInt(D)-(parseFloat(A)*parseInt(B));
      let x=c.toString();
      if(x.length!=C.length)
      {
        return -1;
      }
      for(let i=0;i<4;i++)
      {
        if(C[i]=="?")
        return x[i];
      }
    }
    else
    {
      d=parseInt(C)+(parseFloat(A)*parseInt(B));
      let x=d.toString();
      if(x.length!=D.length)
      {
        return -1;
      }
      for(let i=0;i<4;i++)
      {
        if(D[i]=="?")
        return x[i];
      }
    }
  }
}
FixEquation=new polynomial("42","47","2","1?76");
polynomial.findMissingDigit();
