// PROBLEM STATEMENT

/*
 You are given a String equation containing an equation of the form A * B + C = D, where A, B, C and D are positive integers that don't have leading zeros.
 One digit in the equation is missing.
 Determine and return the correct digit.
 If the missing digit cannot be determined (i.e., there is no solution or there is more than one solution), return -1 instead.
*/

class FixEquation
{ 
    /*
     The below method takes a String called equation with a question mark as an input
     and returns an actual digit that should be present there if it exists.
     If no such value exists, returns -1. 
    */

    findMissingDigit(equation)  
    {
        let actualValue = -1; //Stores the computed value of the variable which has a question mark
        let missingIndex = -1; //Stores the index of question mark
        let search = -1; //Stores the value of the variable which has a question mark.
        let result = -1;  //To store the final value if it exists.

        let endIndex1 = equation.indexOf('*');
        let a = equation.substring(0, endIndex1).trim();
        if(a.indexOf('?') != -1)
        {   
            search = a;
        }
        else
            a = parseInt(a);

        let endIndex2 = equation.indexOf('+');
        let b = equation.substring(endIndex1 + 1, endIndex2).trim();
        if(b.indexOf('?') != -1)
        {
            search = b;
        }    
        else
            b = parseInt(b);

        let endIndex3 = equation.indexOf('=');
        let c = equation.substring(endIndex2 + 1, endIndex3).trim();
        if(c.indexOf('?') != -1)
        {
            search = c;
        }
        else
            c = parseInt(c);


        let d = equation.substring(endIndex3 + 1, equation.length).trim();
        if(d.indexOf('?') != -1)
        {
            search = d;
        }
        else
            d = parseInt(d);


        //search which variable has the question mark and accordingly calculate its correct value using the equation.
        //Also, keep a check if the calculated value can exists, specifically for 2 cases
        //Case 1: No decimal/floating value can exist
        //Case 2: No values with leading zeros can exist    
        if(search == a)
        {
            //Checking for divisibility to avoid floating point values
            if((d-c) % b == 0)
                actualValue = ((d - c)/b);
            else
                return -1;         
        }
        else if(search == b)
        {
            //Checking for divisibility to avoid floating point values
            if((d-c) % a == 0)
                actualValue = (d - c)/a;
            else
                return -1;                
        }
        else if(search == c)
        {
            actualValue = d - (a*b);
        }
        else if(search == d)
        {
            actualValue = (a*b) + c;
        }

        actualValue = actualValue.toString();

        //Checking for leading zeros
        if(search.length == actualValue.length)
        {
            missingIndex = search.indexOf('?');
            result = parseInt(actualValue[missingIndex]);
        }
        return result;

    }
}

solution = new FixEquation();
console.log("Missing digit is: ",solution.findMissingDigit("42 * ?7 + 2 = 1976"));
console.log("Missing digit is: ",solution.findMissingDigit("42 * ?47 + 2 = 1976"));
console.log("Missing digit is: ",solution.findMissingDigit("42 * 47 + 2 = 1?76"));
console.log("Missing digit is: ",solution.findMissingDigit("4? * 47 + 2 = 1976"));
console.log("Missing digit is: ",solution.findMissingDigit("2 * 12? + 2 = 247"));