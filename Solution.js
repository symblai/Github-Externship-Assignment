class FixEquation {

    findMissingDigit(equation) {
        if (!equation) return -1;

        const list = equation.split(/[+,*,=,]/);

        let A = list[0].trim();
        let B = list[1].trim();
        let C = list[2].trim();
        let D = list[3].trim();
        if (!list && list.length<4) return -1;

        
}
}

