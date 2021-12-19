// soultion to find missing digit in an expression of the form A * B + C = D

class FixEquation {

	// 'validate' function will take input a substring and the actual value, it checks them if found valid then the missing digit is returned
    validate(str, value) {
        if (str.length != value.length) {
            return -1;
        }
        const i = str.search("\\?");
        const c = value.charAt(i);
        const fixed = str.replace("?", c);
        if (fixed === value) {
            return parseInt(c);
        }
        return -1;
    }

	// 'findMissingDigit' function will divide the string into 4 parts and finds the index position of '?' and accordingly different operations are carried out
    findMissingDigit(str) {

		// following variables will store different indices
        const str_start = 0;
        const a_end = str.search(" * ");
        const b_end = str.search(" \\+ ");
        const c_end = str.search(" = ");
        const str_end = str.length;

		// following variables will store different substrings
        const str_a =  str.substring(str_start, a_end);
        const str_b =  str.substring(a_end + 3, b_end);
        const str_c =  str.substring(b_end + 3, c_end);
        const str_d =  str.substring(c_end + 3, str_end);

        // actual value = D-C/B
		if (str_a.includes("?")) {
            const val = (parseInt(str_d) - parseInt(str_c))/parseInt(str_b);
            return this.validate(str_a, val.toString())
        } 

		// actual value = D-C/A
        else if (str_b.includes("?")) {
            const val = (parseInt(str_d) - parseInt(str_c))/parseInt(str_a);
            return this.validate(str_b, val.toString())
        } 

		// actual value = D-A*B
        else if (str_c.includes("?")) {
            const val = parseInt(str_d) - (parseInt(str_a) * parseInt(str_b));
            return this.validate(str_c, val.toString())
        } 

		// actual value = A*B+C
        else {
            const val = parseInt(str_a) * parseInt(str_b) + parseInt(str_c);
            return this.validate(str_d, val.toString())
        } 

    }


}