// Write your code here
class FixEquation
{ 

    /*
    * This method takes in equation with a question mark as input
    * and returns the actual digit present there if it exists.
    * If no such value exists, returns -1. 
    */
    findMissingDigit(equation)  
    {
        let find = -1; //This stores the value of the variable which has a question mark.
        let ans = -1;  //This will store the final value/digit if it exists.
        let actualValue = -1; //This contains the computed value of the variable which has a question mark
        let questionMarkIdx = -1; //This stores the index of question mark


        //Start by extracting out values of all the variables in the equation i.e A,B,C,D.
        //If the value of variable doesnt have a question mark, convert it to int for future calculation.
        let endIdxA = equation.indexOf('*');
        let a = equation.substring(0, endIdxA).trim();
        if(a.indexOf('?') != -1)
        {   
            find = a;
        }
        else
            a = parseInt(a);

        let endIdxB = equation.indexOf('+');
        let b = equation.substring(endIdxA + 1, endIdxB).trim();
        if(b.indexOf('?') != -1)
        {
            find = b;
        }    
        else
            b = parseInt(b);

        let endIdxC = equation.indexOf('=');
        let c = equation.substring(endIdxB + 1, endIdxC).trim();
        if(c.indexOf('?') != -1)
        {
            find = c;
        }
        else
            c = parseInt(c);


        let d = equation.substring(endIdxC + 1, equation.length).trim();
        if(d.indexOf('?') != -1)
        {
            find = d;
        }
        else
            d = parseInt(d);

        
        //Find which variable has the question mark and accordingly calculate its correct value using the equation.
        //Also, keep a check if the calculated value can exists, specifically for 2 cases
        //Case 1: No decimal/floating value can exist
        //Case 2: No values with leading zeros can exist    
        if(find == a)
        {
            //Checking for divisibility to avoid floating point values
            if((d-c) % b == 0)
                actualValue = ((d - c)/b);
            else
                return -1;         
        }
        else if(find == b)
        {
            //Checking for divisibility to avoid floating point values
            if((d-c) % a == 0)
                actualValue = (d - c)/a;
            else
                return -1;                
        }
        else if(find == c)
        {
            actualValue = d - (a*b);
        }
        else if(find == d)
        {
            actualValue = (a*b) + c;
        }
        
        actualValue = actualValue.toString();
        
        //Checking for leading zeros
        if(find.length == actualValue.length)
        {
            questionMarkIdx = find.indexOf('?');
            ans = parseInt(actualValue[questionMarkIdx]);
        }

        return ans;

    }
}

obj1 = new FixEquation();
console.log(obj1.findMissingDigit("42 * 47 + 2 = 1?76"));
console.log(obj1.findMissingDigit("4? * 47 + 2 = 1976"));
console.log(obj1.findMissingDigit("42 * ?7 + 2 = 1976"));
console.log(obj1.findMissingDigit("42 * ?47 + 2 = 1976"));
console.log(obj1.findMissingDigit("2 * 12? + 2 = 247"));
