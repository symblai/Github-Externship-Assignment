//  Given a String equation containing an equation of the form A * B + C = D.
// One digit in the equation is missing.Determine and return the correct digit.
// If the missing digit cannot be determined (i.e., there is no solution or there is more than one solution), return -1 instead.

class FixEquation {
	
    findMissingDigit(equation) {
		
        // As our given equation is A*B + C = D
		let arr = equation.split(/[*+=]/);

		// Extracting each one of them seperately
		const a = arr[0].trim(),
			A = parseInt(a);
		const b = arr[1].trim(),
			B = parseInt(b);
		const c = arr[2].trim(),
			C = parseInt(c);
		const d = arr[3].trim(),
			D = parseInt(d);

		// Finding which one of them has a question-mark
        let ch;
        if (a.includes('?'))
        { ch= 'a'; }
        else 
        if (b.includes('?')) 
        { ch= 'b'; }
        else 
        if (c.includes('?')) 
        { ch = 'c'; }
        else 
        { ch = 'd'; }
	

        let value, res;
		// Get ans value and compare in switch case
        // getting position in result and loging missing digit
		switch (ch) {
			case 'a':
				value = ((D - C) / B).toString();
				res = value.length === a.length ? value[a.indexOf('?')] : -1;                                      // For a , value = (D - C) / B
				break;                                                                                             // For b , value = (D - C) / A
			case 'b':                                                                                              // For c , value = D - A*B
				value = ((D - C) / A).toString();                                                                  // For d, value = C + A*B
				res = value.length === b.length ? value[b.indexOf('?')] : -1;
				break;
			case 'c':
				value = (D - A * B).toString();
				res = value.length === c.length ? value[c.indexOf('?')] : -1;
				break;
			default:
				value = (C + A * B).toString();
				res = value.length === d.length ? value[d.indexOf('?')] : -1;
				break;
		}
        
		return parseInt(res);
	}
}

let Obj = new FixEquation()                              // creating an object of FixEquation
let given_test_cases = ["42 * 47 + 2 = 1?76", "4? * 47 + 2 = 1976", "42 * ?7 + 2 = 1976", "42 * ?47 + 2 = 1976", "2 * 12? + 2 = 247"]


console.log("----> Given Test Cases <-----")
given_test_cases.map(sample_cases => {                                       // testing all given sample testcases
    console.log(sample_cases)
    console.log(Obj.findMissingDigit(sample_cases))
    console.log()
})