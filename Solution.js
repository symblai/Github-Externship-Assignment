// I've Created a Live version ot using HTML, CSS and Vanilla JS see here https://GithubExternshipAssignmentharshalkaigaonkar.harshalkai.repl.co
// Main Code is here https://replit.com/@harshalkai/GithubExternshipAssignmentharshalkaigaonkar#script.js
// Java Snippet is here https://replit.com/@harshalkai/symblai-Github-externship-challenge#Main.java
// main logic
// Time: O(N) Space: O(1)
class FixEquation {
    // not need to use constructor here.
    // main function
    findMissingDigit(input) {
        // split whole string with regex as " ".
        const stringSplit = input.split(" ");
        let ans;
        if (this.checkForEquals(input)) {
            // getting values of a, b and c when d contains "?" 
            let a = Number.parseInt(stringSplit[0], 10);
            let b = Number.parseInt(stringSplit[2], 10);
            let c = Number.parseInt(stringSplit[4], 10);
            // getting the numerical value of d
            ans = (a * b) + c;
            // getting string value of d given in input
            let dstr = stringSplit[6];
            // finding the value at question mark
            let lastdigit = this.findForQuestionmark(dstr, dstr.length - 1, ans)
            return lastdigit;
        } else {
            // as d doesn't contains "?" taking it's numerical value.
            let d = Number.parseInt(stringSplit[6]);
            // rest all values in string form
            let astr = stringSplit[0];
            let bstr = stringSplit[2];
            let cstr = stringSplit[4];
            // checking if a contains "?"
            if (astr.includes("?")) {
                // for the special cases where one side may remain even or odd by entrance of division or typecasting or floor values
                if (Number.parseInt(cstr, 10) % 2 === 0 && Number.parseInt(bstr, 10) % 2 === 0 && d % 2 !== 0) {
                    return -1;
                } else {
                    // checking numerical value of a
                    ans = (d - Number.parseInt(cstr, 10)) / Number.parseInt(bstr, 10);
                    // finding the value at question mark
                    let lastdigit = this.findForQuestionmark(astr, astr.length - 1, ans);
                    return lastdigit;
                }
                // getting if b contains "?"
            } else if (bstr.includes("?")) {
                // for the special cases where one side may remain even or odd by entrance of division or typecasting or floor values
                if (Number.parseInt(cstr, 10) % 2 === 0 && Number.parseInt(astr, 10) % 2 === 0 && d % 2 !== 0) {
                    return -1;
                } else {
                    // getting numerical value of b
                    ans = (d - Number.parseInt(cstr, 10)) / Number.parseInt(astr, 10);
                    // finding the value at question mark
                    let lastdigit = this.findForQuestionmark(bstr, bstr.length - 1, ans);
                    return lastdigit;
                }
                // only c contains "?"
            } else {
                // there cannot be any typesafe or floor valued error here, because there's no division happening here.
                // getting numerical value of c
                ans = d / (Number.parseInt(astr, 10) * Number.parseInt(bstr, 10));
                // finding the value at question mark
                let lastdigit = this.findForQuestionmark(cstr, cstr.length - 1, ans);
                return lastdigit;
            }
        }
    }
    // checking if the "?" or "=" comes earlier
    checkForEquals(str) {
        // iterating whole string to find "?" or "=" first.
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) === '=') return true;
            if (str.charAt(i) === '?') return false;
        }
        return true;
    }
    // we get here the value of "?" in particular string throught the main function named findMissingDigit.
    findForQuestionmark(last, n, ans) {
        // checking if the length of string lies between 10^n and 10^n+1 , because other wise it will return -1.
        if (ans < Math.pow(10, n) || ans > Math.pow(10, n + 1)) {
            return -1;
        }
        // checking the value of "?" by reverse traversing the number and number_string 
        for (let i = ans; i >= 0 && n >= 0; i /= 10, n--) {
            let lastDigit = Math.floor(i % 10);
            // if we get "?" we can return the digit found there.
            if (last.charAt(n) === '?') {
                return lastDigit;
                // if the number_string and main number doesn't equalise at any point, we return -1; 
            } else if (Number.parseInt(last.substring(n, n + 1), 10) !== lastDigit) break;
        }
        return -1;
    }
}