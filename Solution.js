class FixEquation {
    /*
     *Private function to return the missing digit in string that will make it equal to number
     *@params {string}  String containing the missing digit
     *@params {int}  Number to make the string equal to
     *@return {int} Missing value (0-9) if there is appropriate missing value, else return -1
     */
    #missingDigit(string, number) {
        number = number.toString();
        if (string.length != number.length || number[0] == "0" || number[0] == "-")
            return -1;
        let ans = -1;
        for (let i = 0; i < string.length; i++) {
            if (string[i] != number[i]) {
                if (ans == -1)
                    ans = number[i] - '0';
                else
                    return -1;
            }
        }
        return ans;
    }

    /*
     *Function thet returns missing digit which satisfies the equation
     *@params {string} Equation String in the format "A * B + C = D"
     *@return {int} Missing value (0-9) if there is appropriate missing value, else return -1
     */
    findMissingDigit(equation) {
        let [A, , B, , C, , D] = equation.split(" ");
        let [a, b, c, d] = [+A, +B, +C, +D];

        if (isNaN(A)) {
            if ((d - c) % b) return -1;
            a = (d - c) / b;
            return this.#missingDigit(A, a);
        } else if (isNaN(B)) {
            if ((d - c) % a) return -1;
            b = (d - c) / a;
            return this.#missingDigit(B, b);
        } else if (isNaN(C)) {
            c = d - a * b;
            return this.#missingDigit(C, c);
        } else {
            d = a * b + c;
            return this.#missingDigit(D, d);
        }
    }
};
