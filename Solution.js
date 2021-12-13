// Write your code here

//* Class: FixEquation - Class declaration
class FixEquation {
	//* Initializing an object
	constructor(string) {
		this.string = string; //* Parameter: String
	}

	//* Method: findMissingDigit - Declaring method
	findMissingDigit() {
		let iM = this.string.indexOf("*"); //* index of "*"
		let iA = this.string.indexOf("+"); //* index of "+"
		let iE = this.string.indexOf("="); //* index of "="
		let iQ; //* index of "?"

		let A = this.string.slice(0, iM - 1); //* Value of A [in string]
		let B = this.string.slice(iM + 2, iA - 1); //* Value of B [in string]
		let C = this.string.slice(iA + 2, iE - 1); //* Value of C [in string]
		let D = this.string.slice(iE + 2); //* Value of D [in string]
		let result; //* original value of equation

		if (Number.isNaN(Number(A))) {
			iQ = A.indexOf("?"); //* index of "?"
			B = Number(B);
			C = Number(C);
			D = Number(D);
			result = (D - C) / B;

			if (!this.checkLength(result, A)) {
				return -1;
			}
		} else if (Number.isNaN(Number(B))) {
			iQ = B.indexOf("?"); //* index of "?"
			A = Number(A);
			C = Number(C);
			D = Number(D);
			result = (D - C) / A;

			if (!this.checkLength(result, B)) {
				return -1;
			}
		} else if (Number.isNaN(Number(C))) {
			iQ = C.indexOf("?"); //* index of "?"
			B = Number(B);
			A = Number(A);
			D = Number(D);
			result = D - A * B;
			if (!this.checkLength(result, C)) {
				return -1;
			}
		} else if (Number.isNaN(Number(D))) {
			iQ = D.indexOf("?"); //* index of "?"
			B = Number(B);
			C = Number(C);
			A = Number(A);

			result = A * B + C;

			if (!this.checkLength(result, D)) {
				return -1;
			}
		}
		if (!this.isInt(result)) {
			return -1;
		}
		return parseInt(result.toString()[iQ]); //* Returns: Integer
	}

	/*
	 * here we check the length of real answer and value of given equation inorder to check it is decimal or not. Also, to avoid leading zeros.
	 */
	checkLength(result, val) {
		if (result.toString().length === val.length) {
			return true;
		} else {
			return false;
		}
	}

	/*
	 * here we check whether result is decimal or not.
	 */
	isInt(result) {
		if (parseInt(result) === result) {
			return true;
		} else {
			return false;
		}
	}
}

let testCase = [
	"42 * 47 + 2 = 1?76",
	"4? * 47 + 2 = 1976",
	"42 * ?7 + 2 = 1976",
	"42 * ?47 + 2 = 1976",
	"2 * 12? + 2 = 247",
]; //* testcases mentioned in README.md

for (let i = 0; i < testCase.length; i++) {
	let fixIt = new FixEquation(testCase[i]);
	console.log(fixIt.findMissingDigit());
}
