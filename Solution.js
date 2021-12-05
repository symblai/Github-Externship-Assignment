class FixEquation {
	findMissingDigit(equation) {
		// Equation is AB + C = D
		let res = equation.split(/[*+=]/);

		// Lets extract all vars
		const a = res[0].trim(),
			A = parseInt(a);
		const b = res[1].trim(),
			B = parseInt(b);
		const c = res[2].trim(),
			C = parseInt(c);
		const d = res[3].trim(),
			D = parseInt(d);

		// Lets find which variable has question mark
		const whoHasQuesMark = () => {
			if (a.includes('?')) return 'a';
			if (b.includes('?')) return 'b';
			if (c.includes('?')) return 'c';
			else return 'd';
		};
		let unknown = whoHasQuesMark();
		let val, ans;

		// If A is unknown, A = (D - C) / B
		// If B is unknown, B = (D - C) / A
		// If C is unknown, C = D - AB
		// If D is unknown, D = C + AB

		// Calculate unknown's value and compare with ques-mark-string
		// get the position in answer and log the missing digit
		switch (unknown) {
			case 'a':
				val = ((D - C) / B).toString();
				ans = val.length === a.length ? val[a.indexOf('?')] : -1;
				break;
			case 'b':
				val = ((D - C) / A).toString();
				ans = val.length === b.length ? val[b.indexOf('?')] : -1;
				break;
			case 'c':
				val = (D - A * B).toString();
				ans = val.length === c.length ? val[c.indexOf('?')] : -1;
				break;
			default:
				val = (C + A * B).toString();
				ans = val.length === d.length ? val[d.indexOf('?')] : -1;
				break;
		}
		return parseInt(ans);
	}
}

// const func = new FixEquation();
// console.log(func.findMissingDigit('42 * 47 + 2 = 1?76'));  Gives  9
// console.log(func.findMissingDigit('4? * 47 + 2 = 1976'));  Gives  2
// console.log(func.findMissingDigit('42 * ?7 + 2 = 1976'));  Gives  4
// console.log(func.findMissingDigit('42 * ?47 + 2 = 1976')); Gives -1
// console.log(func.findMissingDigit('2 * 12? + 2 = 247'));   Gives -1