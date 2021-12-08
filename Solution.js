
class FixEquation {
	equation = "" // class member which holds the whole equation

	lhs = "" // lhs of the equation
	rhs = "" // rhs of the equation

	values = { // contains all the String values of the terminals
		A: "",
		B: "",
		C: "",
		D: ""
	}

	// function to split equation at the equal ('=') mark, returns void
	splitAtEqual = () => {
		[this.lhs, this.rhs] = this.equation.split("=").map(item => item.trim())
	}

	// function to assign 'values' class member all the values, returns void
	assignValues = () => {
		const D = this.rhs
		const [A, restAfterA] = this.lhs.split("*").map(item => item.trim())
		const [B, C] = restAfterA.split("+").map(item => item.trim())
		const values = { A, B, C, D }
		this.values = { ...values }
	}

	// evaluate the missing digit in A, returns integer
	evaluateA = () => {
		const [tempA, B, C, D] = Object.values(this.values).map(item => parseInt(item))
		const solvedExpn = (D - C) / B
		if (solvedExpn % 1 !== 0) {
			return -1
		}
		const stringSolvedExpn = solvedExpn.toString()
		if (stringSolvedExpn.length === this.values.A.length) {
			const indexMissingDigit = this.values.A.indexOf('?')
			return parseInt(stringSolvedExpn[indexMissingDigit])
		}
		return -1

	}

	// evaluate the missing digit in B, returns integer
	evaluateB = () => {
		const [A, tempB, C, D] = Object.values(this.values).map(item => parseInt(item))
		const solvedExpn = (D - C) / A
		if (solvedExpn % 1 !== 0) {
			return -1
		}
		const stringSolvedExpn = solvedExpn.toString()
		if (stringSolvedExpn.length === this.values.B.length) {
			const indexMissingDigit = this.values.B.indexOf('?')
			return parseInt(stringSolvedExpn[indexMissingDigit])
		}
		return -1

	}

	// evaluate the missing digit in C, returns integer
	evaluateC = () => {
		const [A, B, tempC, D] = Object.values(this.values).map(item => parseInt(item))
		const solvedExpn = D - A * B
		const stringSolvedExpn = solvedExpn.toString()
		if (stringSolvedExpn.length === this.values.C.length) {
			const indexMissingDigit = this.values.C.indexOf('?')
			return parseInt(stringSolvedExpn[indexMissingDigit])
		}
		return -1

	}

	// evaluate the missing digit in D, returns integer
	evaluateD = () => {
		const [A, B, C, tempD] = Object.values(this.values).map(item => parseInt(item))
		const solvedExpn = A * B + C
		const stringSolvedExpn = solvedExpn.toString()
		if (stringSolvedExpn.length === this.values.D.length) {
			const indexMissingDigit = this.values.D.indexOf('?')
			return parseInt(stringSolvedExpn[indexMissingDigit])
		}
		return -1

	}

	// function which will be called with the equation
	findMissingDigit = (equation) => {
		this.equation = equation // store equation in class member
		this.splitAtEqual() // invoke splitAtEqual
		this.assignValues() // invode assignValues
		const { A, B, C, D } = this.values
		if (A.includes('?')) {
			return this.evaluateA()
		}
		else if (B.includes('?')) {
			return this.evaluateB()
		}
		else if (C.includes('?')) {
			return this.evaluateC()
		}
		else if (D.includes('?')) {
			return this.evaluateD()
		}
		return -1
	}
}

const testEquations = [
	"42 * 47 + 2 = 1?76",
	"4? * 47 + 2 = 1976",
	"42 * ?7 + 2 = 1976",
	"42 * ?47 + 2 = 1976",
	"2 * 12? + 2 = 247"
]

const test = (testEquations) => {
	testEquations.map((equation, index) => {
		let solver = new FixEquation()
		let result = solver.findMissingDigit(equation)
		console.log(`Test : ${index}\n\tEquation: ${equation}\n\tResult: ${result}\n`)
	})
}

// test(testEquations)