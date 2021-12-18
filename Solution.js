class FixEquation 
{
  findMissingDigit = (equation) => {
    let a, b, c, d, givenStr, expectedStr, A, B, C, D, plus, equal, multi; //init variables

    multi = equation.indexOf("*");
    plus = equation.indexOf("+");
    equal = equation.indexOf("=");

    A = equation.slice(0, multi - 1);
    B = equation.slice(multi + 2, plus - 1);
    C = equation.slice(plus + 2, equal - 1);
    D = equation.slice(equal + 2);

    //checking for missing digits and calculating value
    if (A.includes("?")) 
    {
      b = parseInt(B);
      c = parseInt(C);
      d = parseInt(D);

      if (b == 0) return -1;

      a = (d - c) / b;

      givenStr = A;
      expectedStr = a.toString();

      if (A.startsWith("?") && A.slice(1) === expectedStr) //checking for leading zeros
      {
        return -1;
      }
    } 
    else if (B.includes("?")) 
    {
      a = parseInt(A);
      c = parseInt(C);
      d = parseInt(D);

      if (a == 0) return -1; 

      b = (d - c) / a;

      givenStr = B;
      expectedStr = b.toString();

      if (B.startsWith("?") && B.slice(1) === expectedStr) //checking for leading zeros
      {
        return -1;
      }

    } 
    else if (C.includes("?")) 
    {

      a = parseInt(A);
      b = parseInt(B);
      d = parseInt(D);

      c = d - a * b;

      givenStr = C;
      expectedStr = c.toString();

      if (C.startsWith("?") && C.slice(1) === expectedStr) //checking for leading zeros
      {
        return -1;
      }
    } 
    else 
    {

      a = parseInt(A);
      b = parseInt(B);
      c = parseInt(C);

      d = a * b + c;

      givenStr = D;
      expectedStr = d.toString();

      if (D.startsWith("?") && D.slice(1) === expectedStr) //checking for leading zeros
      {
        return -1;
      }
    }

    let positionOfMissing;
    for (let i = 0; i < expectedStr.length; i++) 
    {
      if (givenStr[i] == "?") 
      {
        positionOfMissing = i;
      } 
      else if (givenStr[i] != expectedStr[i]) //digit mismatch 
      {
        return -1;
      }
    }

    return parseInt(expectedStr[positionOfMissing]);
  };
}

//test cases
let solve = new FixEquation();
console.log("Test Case 1: 42 * 47 + 2 = 1?76");
console.log(solve.findMissingDigit("42 * 47 + 2 = 1?76"));
console.log("Test Case 2: 4? * 47 + 2 = 1976");
console.log(solve.findMissingDigit("4? * 47 + 2 = 1976"));
console.log("Test Case 3: 42 * ?7 + 2 = 1976");
console.log(solve.findMissingDigit("42 * ?7 + 2 = 1976"));
console.log("Test Case 4: 42 * ?47 + 2 = 1976");
console.log(solve.findMissingDigit("42 * ?47 + 2 = 1976"));
console.log("Test Case 5: 2 * 12? + 2 = 247");
console.log(solve.findMissingDigit("2 * 12? + 2 = 247"));