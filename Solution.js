class FixEquation 
        {
            findCoeff(A,B,C,D)
            {
                /*
                    This function is to find which coefficient contain ?.
                */
                let flag = -1;
                if (A.includes("?"))
                    flag = 0;
                else if (B.includes("?"))
                    flag = 1;
                else if (C.includes("?"))
                    flag = 2;
                else if (D.includes("?"))
                    flag = 3;

                return flag;
            }

            findMissingDigit(given_equation) 
            {
                /*
                    Step1: Finding A,B,C,D from the equation given.

                    Step2: using a function called findCoeff() to find in which coefficient, ? is present.

                    step3: Considering the coefficient which contain ? as a veriable, we found the actual value 
                           for that veriable using simple math.

                    step4: If length of calculated value and initially provided value is not same then returning -1 
                           else returning the digit of calculated value at index of ? in initially given value.
                */

                let numbers = given_equation.split(/[*/+=]/);
                

                numbers = numbers.map((item) => {
                    return item.trim();
                });

                let [A, B, C, D] = numbers;
                
                let count = this.findCoeff(A,B,C,D);

                let finalres;

                switch(count)
                {
                    case 0:
                    {
                        if (B == 0) return -1;
                        C = parseInt(C);
                        B = parseInt(B);
                        D = parseInt(D);
                        finalres = (D - C) / B;
                        break;
                    } 
                    case 1:
                    {

                        if (A == 0) return -1;
                        A = parseInt(A);
                        C = parseInt(C);
                        D = parseInt(D);
                        finalres = (D - C) / A;
                        break;
                    } 
                    case 2:
                    {
                        A = parseInt(A);
                        B = parseInt(B);
                        D = parseInt(D);
                        finalres = D - A * B;
                        break;
                    } 
                    case 3:
                    {
                        A = parseInt(A);
                        B = parseInt(B);
                        C = parseInt(C);
                        finalres = A * B + C;
                        break;
                    }
                }

                if (finalres.toString().length != numbers[count].length) 
                    return -1;
                else 
                    return parseInt(finalres.toString()[numbers[count].indexOf("?")]);
                
            }
        }