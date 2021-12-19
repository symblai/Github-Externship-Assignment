class FixEquation
{
    isPossible(string1, string2)
    {
        /*
            This is the function which gives us desired result, if our solution exists, it 
            will return that digit, if not then return -1.
        */
		let digit = -1;

		if(string1.length !== string2.length) 
            return digit;

		for(let i=0; i<string1.length; i++)
        {
			if(string1[i] !== string2[i] && digit !== -1) 
                return -1;
			else if(string1[i] !== string2[i])
				digit = parseInt(string2[i]);
		}

		return digit;
	}

    findMissingDigit(eqn_as_str)
    {
        /* 
            step 1: finding coefficient A, B, C and D from coming equation.

            step 2: then find coefficient In which '?' is present, assume that a variable 
                    and then calculate that variable by simple math.

            step 3: now compare that calculated variable to given equation coefficient which 
                    contain '?' by our defined method isPossible()its give result whether 
                    our solution is possible or not.

            step 4: If solution is possible for given equation, we return that digit which is 
                    missing, otherwise we return -1. 
        */
        let numbers = [] ;
		let index;
		let coeff = "" ;

        let i=0;    
        while( i<eqn_as_str.length)
        {
			if(eqn_as_str[i] === '?')
            {
				index = numbers.length;
				coeff+=eqn_as_str[i];
				i++;

			}
            else if(eqn_as_str[i] === ' ')
            {
				numbers.push(coeff);
				coeff="";
				i+=3;
			}
            else
            {
				coeff+=eqn_as_str[i];
				i++;
			}
		}

        numbers.push(coeff);

        // for finding missing digit

        let possible = true;

        if(index == 0)
        {
            let num = parseInt(numbers[3])-parseInt(numbers[2]);

			if(num%parseInt(numbers[1]) === 0)
            {
				let ans = num/parseInt(numbers[1]);
				let res = this.isPossible(numbers[0], ans.toString());
				return res;
			}
            else
            {
				possible = false;
				return -1;
			}
        }
        else if(index == 1)
        {
            let num = parseInt(numbers[3])-parseInt(numbers[2]);

			if(num%parseInt(numbers[0]) === 0)
            {
				let ans = num/parseInt(numbers[0]);
				return this.isPossible(numbers[1], ans.toString());
			}
            else
            {
				possible = false;
				return -1;
			}
        }
        else if(index == 2)
        {
            let num = parseInt(numbers[0])*parseInt(numbers[1]) - parseInt(numbers[3]);

            if(num <= 0) 
                return -1;
            else   
                return this.isPossible(numbers[2], num.toString());
        }
        else
        {
            let num = parseInt(numbers[0])*parseInt(numbers[1]) + parseInt(numbers[2]);

            if(num <= 0) 
                return -1;
            else
                return this.isPossible(numbers[3], num.toString());      
        }
    }
}