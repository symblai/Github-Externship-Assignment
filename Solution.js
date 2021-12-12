/*
    question : --> You are given a String equation containing an equation of the form A * B + C = D,
                   where A, B, C and D are positive integers that don't have leading zeros.
               --> One digit in the equation is missing.
               --> Determine and return the correct digit.
               --> If the missing digit cannot be determined (i.e., there is no solution or there is more than one solution), return -1 instead.

*/

class FixEquation {
    findMissingDigit(equation) {
        if (equation) {
            const arr_num_string = equation.split(/[*,+,=]/);

            let A, B, C, D;
            if (arr_num_string.length < 4) {
                return -1;
            }
            A = arr_num_string[0].trim();
            B = arr_num_string[1].trim();
            C = arr_num_string[2].trim();
            D = arr_num_string[3].trim();

            if (!A || !B || !C || !D) {
                return -1;
            }

            let val = -1;
            if (A.includes("?")) {
                B = +B;
                C = +C;
                D = +D;
                let A_ans = ((D - C) / B).toString();
                val = this.searchChar(A, A_ans);
                if (val < 0) {
                    return -1;
                }
                return +val;
            }
            else if (B.includes("?")) {
                A = +A;
                C = +C;
                D = +D;
                let B_ans = ((D - C) / A).toString();
                val = this.searchChar(B, B_ans);
                if (val < 0) {
                    return -1;
                }
                return +val;
            }
            else if (C.includes("?")) {
                A = +A;
                B = +B;
                D = +D;
                let C_ans = (D - A * B).toString();
                val = this.searchChar(C, C_ans);
                if (val < 0) {
                    return -1;
                }
                return +val;
            }
            else if (D.includes("?")) {
                A = +A;
                B = +B;
                C = +C;
                let D_ans = (A * B + C).toString();
                val = this.searchChar(D, D_ans);
                if (val < 0) {
                    return -1;
                }
                return +val;

            }
            else {
                return -1;
            }
        }
        else {
            return -1;
        }
    }

    searchChar(a, b) {
        if (a.length === b.length) {
            for (let i in a) {
                if (a[i] === '?') {
                    return b[i] - 0;
                }
            }
        }
        else {
            return -1;
        }
    }
}

// you can change test cases from testValues array

function Check() {
    let test_values = [
        "42 * 47 + 2 = 1?76",
        "4? * 47 + 2 = 1976",
        "42 * ?7 + 2 = 1976",
        "42 * ?47 + 2 = 1976",
        "2 * 12? + 2 = 247"
    ]
    const solution = new FixEquation();
    test_values.forEach(test => {
        console.log(solution.findMissingDigit(test));
    })
}

Check();