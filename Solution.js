// Write your code here
class solution{
  string eq;
  solution(string eq)
  {
    this.eq=eq;
  }
  var solve()
  {
    const num=eq.split(" ");
    if(num[0].search("?")!=-1)
    {
      var B=parseInt(num[2]);
      var C=parseInt(num[4]);
      var D=parseInt(num[6]);
      if(B==0 || (D-C)%B==0)
      return -1;
      var O=tostring((D-C)/B);
      for(int i=0;i<num[0].size();i++)
      {
        if(num[0][i]=='?')
        return O[i];
      }
    }
    else if(num[2].search("?")!=-1)
    {
      var A=parseInt(num[0]);
      var C=parseInt(num[4]);
      var D=parseInt(num[6]);
      if(A==0 || (D-C)%A==0)
      return -1;
      var O=tostring((D-C)/A);
      for(int i=0;i<num[2].size();i++)
      {
        if(num[2][i]=='?')
        return O[i];
      }
    }
    else if(num[4].search("?")!=-1)
    {
      var A=parseInt(num[0]);
      var B=parseInt(num[2]);
      var D=parseInt(num[6]);
      var O=tostring(D-A*B);
      for(int i=0;i<num[4].size();i++)
      {
        if(num[4][i]=='?')
        return O[i];
      }
    }
    else if(num[6].search("?")!=-1)
    {
      var A=parseInt(num[0]);
      var B=parseInt(num[2]);
      var C=parseInt(num[4]);
      var O=tostring(A*B+C);
      for(int i=0;i<num[6].size();i++)
      {
        if(num[6][i]=='?')
        return O[i];
      }
    }
    else 
    return -1;
  }
}

var eq=prompt("Enter the equation");

solution s=new solution(eq);

console.log(s.solve());
