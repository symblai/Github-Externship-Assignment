
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

	findMissingDigit = (equation) => {
		this.equation = equation
		this.splitAtEqual()
		this.assignValues()
		console.log("lhs : " + this.lhs)
		console.log("rhs : " + this.rhs)
		console.log(this.values)
	}
}

const solver = new FixEquation()

solver.findMissingDigit("A? * B + C = D")