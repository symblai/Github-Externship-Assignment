class FixEquation {

    findMissingDigit(equation) {
        if (!equation) return -1;

        const list = equation.split(/[+,*,=,]/);

        let A = list[0].trim();
        let B = list[1].trim();
        let C = list[2].trim();
        let D = list[3].trim();

        if (!list && list.length<4) {
            return -1;
        }
        if (D.includes('?')) {
            let a = parseInt(A);
            let b = parseInt(B);
            let c = parseInt(C);
            const result = a * b + c;
            outputString = result.toString();
            desiredString = D;
        } 
}

}


