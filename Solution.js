class FixEquation {

    findMissingDigit(equation) {
        var newEquation = "";
        var expectedAns = 0;
        var constant = '';
        const arr = equation.split(" ");
        const a = arr[0];
        const b = arr[2];
        const c = arr[4];
        const d = arr[6];
        if (a.includes('?')) {
            newEquation =`(${d} - ${c})/${b}`;
            constant = a;
        }
        else if (b.includes('?')) {
            newEquation =`(${d} - ${c})/${a}`;
            constant = b;
        }
        else if (c.includes('?')) {
            newEquation =`${d}/(${a}*${b})`;
            constant = c;
        }
        else {
            newEquation =`(${a}*${b})+${c}`;
            constant = d;
        }

        expectedAns = eval(newEquation).toString();
        if (expectedAns.includes(".") || expectedAns == constant.replace('?', '')) { //check for float and leading zero
            return -1;
        } else {
            return parseInt(expectedAns[constant.indexOf('?')]);
        }
    }
}

var obj = new FixEquation();

const test1 = obj.findMissingDigit("42 * 47 + 2 = 1?76");
const test2 = obj.findMissingDigit("4? * 47 + 2 = 1976");
const test3 = obj.findMissingDigit("42 * ?7 + 2 = 1976");
const test4 = obj.findMissingDigit("42 * ?47 + 2 = 1976");
const test5 = obj.findMissingDigit("2 * 12? + 2 = 247");

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);

