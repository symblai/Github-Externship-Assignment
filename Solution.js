class FixEquation {
    //this function extracts the operands for us , i.e A , B , C , D
	getAllOperands = (equation) => {
		let operands = equation.split(' ');
		operands = operands.filter(
			(operand) =>
				operand !== '+' &&
				operand !== '*' &&
				operand !== '='
		);
		return operands;
	};

    //This function finds the Operands containing the Question Mark
	getIncompleteOperand = (operands) => {
		let res;
		operands.forEach((operand, i) => {
			if (operand.includes('?')) res = i;
		});
		return res;
	};

    //Function tot find the value of ?
	findMissingDigitUtil = (operands, incompleteOperand) => {
		switch (incompleteOperand) {
			case 0:
				return eval(`(${operands[3]} - ${operands[2]}) / ${operands[1]}`);
			case 1:
				return eval(`(${operands[3]} - ${operands[2]}) / ${operands[0]}`);
			case 2:
				return eval(`${operands[3]} - ${operands[0]} * ${operands[1]}`);
			default:
				return eval(`${operands[0]} * ${operands[1]} + ${operands[2]}`);
		}
	};

	findMissingDigit = (equation) => {
		const operands = this.getAllOperands(equation);
		const incompleteOperand = this.getIncompleteOperand(operands);
		let result = this.findMissingDigitUtil(operands, incompleteOperand);
		result = result.toString();
		return result.length != operands[incompleteOperand].length
			? -1
			: result.charAt(operands[incompleteOperand].indexOf('?'));
	};
}

// tests are in the form of A * B + C  = D
const tests = [
	'42 * 47 + 2 = 1?76',
	'4? * 47 + 2 = 1976',
	'42 * ?7 + 2 = 1976',
	'42 * ?47 + 2 = 1976',
	'2 * 12? + 2 = 247',
];

const callFixEquation = new FixEquation();
tests.forEach((test) => {
	console.log('Equation: ', test, '\n');
	console.log('Returns: ', callFixEquation.findMissingDigit(test), '\n');
});