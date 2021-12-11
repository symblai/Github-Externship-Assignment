class FixEquation {
	/*
	This function finds the missing digit indicated by '?' in the equation.
	
	Input: String
	Output: String

	Approach: Since the equation has a single '?' and that '?' can be replaced by a single digit(0-9) therefore we'll try check the equation by replacing the '?' with all the digits.

	Time complexity: O(n)
	Space complexity: O(n)

	*/

	findMissingDigit(equation) {
		let copy, ans;

		// '?' can never be replaced by 0 if '?' is the starting character because no leading zeros are allowed.
		if (equation.charAt(equation.indexOf('?') - 1) === ' ') {
			var i = '1';
		} else {
			var i = '0';
		}

		for (; i <= '9'; i++) {
			copy = equation.replace('?', i);

			// console.log(this.cpy);
			let nums = copy.match(/\d+/g); //creating an array of all nums
			if (
				parseInt(nums[0]) * parseInt(nums[1]) + parseInt(nums[2]) ==
				parseInt(nums[3])
			) {
				ans = parseInt(i);
				return ans; //if a solution is found return that.
			}
		}
		return -1; //if no solution is found return -1
	}
}

//Creating an object.
const Sol = new FixEquation();

// Test cases
var testCases = [
	'42 * 47 + 2 = 1?76',
	'4? * 47 + 2 = 1976',
	'42 * ?7 + 2 = 1976',
	'42 * ?47 + 2 = 1976',
	'2 * 12? + 2 = 247',
];

//looping through the test cases and calling the method.
for (let i = 0; i < testCases.length; i++) {
	console.log('Equation: ' + testCases[i]);
	console.log('Result: ' + Sol.findMissingDigit(testCases[i]));
	console.log();
}
