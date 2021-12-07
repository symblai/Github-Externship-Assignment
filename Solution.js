class FixEquation {
	/**
	 * calculate the unknown number from the equation with missing digit.
	 * @param {number} unknownNumberIndex - index of the unknown number in numbers array
	 * @param {Array} numbers - array containing numbers from the equation
	 * @return {number | null} calculated unknown number
	 */
	#calculateUnknownNumber(unknownNumberIndex, numbers) {
		numbers = numbers.map((item) => parseInt(item));
		let ans = null;
		switch (unknownNumberIndex) {
			case 0: {
				if ((numbers[3] - numbers[2]) % numbers[1] != 0) return null;
				ans = (numbers[3] - numbers[2]) / numbers[1];
				break;
			}
			case 1: {
				if ((numbers[3] - numbers[2]) % numbers[0] != 0) return null;
				ans = (numbers[3] - numbers[2]) / numbers[0];
				break;
			}
			case 2: {
				ans = numbers[3] - numbers[1] * numbers[0];
				break;
			}
			case 3: {
				ans = numbers[0] * numbers[1] + numbers[2];
				break;
			}
			default:
				return null;
		}
		if (ans == null || ans < 0) return null;
		return ans.toString();
	}

	/**
	 * Fix a equation string by finding missing digit.
	 * @param {string} equation - an equation having a missing digit
	 * @return {number} single digit number.
	 */
	findMissingDigit(equation) {
		// split the equation into numbers
		const numbers = equation.split(/\*|\+|=/).map((n) => n.trim());

		// find index of the number with missing digit
		const unknownNumberIndex = numbers.findIndex((item) => isNaN(item));

		let missingNumber = numbers[unknownNumberIndex];

		const calculatedNumber = this.#calculateUnknownNumber(
			unknownNumberIndex,
			numbers
		);

		if (
			calculatedNumber == null ||
			calculatedNumber.length != missingNumber.length
		)
			return -1;

		const missingDigitIndex = missingNumber.indexOf('?');

		missingNumber = missingNumber.replace(
			'?',
			calculatedNumber[missingDigitIndex]
		);

		if (calculatedNumber != missingNumber) return -1;

		return calculatedNumber[missingDigitIndex];
	}
}
