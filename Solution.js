// Write your code here

class FixEquation {
	getOperands = (equation) => {
		let operands = equation.split(' ');
		operands = operands.filter(
			(operand) =>
				operand !== '+' &&
				operand !== '-' &&
				operand !== '=' &&
				operand !== '*'
		);
		return operands;
	};

	getMissingDigitOperand = (operands) => {
		let res;
		operands.forEach((operand, i) => {
			if (operand.includes('?')) res = i;
		});
		return res;
	};

	evaluate = (operands, missingDigitOperand) => {
		switch (missingDigitOperand) {
			case 0:
				return eval(
					`(${operands[3]} - ${operands[2]}) / ${operands[1]}`
				);
			case 1:
				return eval(
					`(${operands[3]} - ${operands[2]}) / ${operands[0]}`
				);
			case 2:
				return eval(
                    `${operands[3]} - ${operands[0]} * ${operands[1]}`
                );
			default:
				return eval(
                    `${operands[0]} * ${operands[1]} + ${operands[2]}`
                );
		}
	};

	findMissingDigit = (equation) => {
		const operands = this.getOperands(equation);
		const missingOperand = this.getMissingDigitOperand(operands);
		let result = this.evaluate(operands, missingOperand);
		result = result.toString();
		return result.length != operands[missingOperand].length
			? -1
			: result.charAt(operands[missingOperand].indexOf('?'));
	};
}

const tests = [
	'42 * 47 + 2 = 1?76',
	'4? * 47 + 2 = 1976',
	'42 * ?7 + 2 = 1976',
	'42 * ?47 + 2 = 1976',
	'2 * 12? + 2 = 247',
];

const equationFixer = new FixEquation();
tests.forEach((test) => {
	console.log('Equation: ', test, '\n');
	console.log('Returns: ', equationFixer.findMissingDigit(test), '\n');
});