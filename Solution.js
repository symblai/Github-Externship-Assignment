
class FixEquation {
	equation = ""

	lhs = ""
	rhs = ""

	values = {
		A: "",
		B: "",
		C: "",
		D: ""
	}

	splitAtEqual = () => {
		[this.lhs, this.rhs] = this.equation.split("=").map(item => item.trim())
	}

	assignValues = () => {
		const D = this.rhs
		const [A, restAfterA] = this.lhs.split("*").map(item => item.trim())
		const [B, C] = restAfterA.split("+").map(item => item.trim())
		const values = { A, B, C, D }
		this.values = { ...values }
	}

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

	findMissingDigit = (equation) => {
		this.equation = equation
		this.splitAtEqual()
		this.assignValues()
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

const solver = new FixEquation()

console.log(solver.findMissingDigit("2 * 12? + 2 = 247"))