/* ////////////////////////////////////////////////////      Approach of my Solution       /////////////////////////////////////////////////////////////////////////////

        Step 1 :  Replace all the spaces and symbols since we know that the equation is in the form A * B + C = D and assign it to an array.
                  eg :-       42 * 47 + 2 = 1?76   will be converted to an array of ['42', '47', '2', '1?76']

        Step 2 :  Now destructure and assign it to respective A,B,C,D.

        Step 3 :  Now find out which index of the array contains the '?' symbol so that we can use simple mathematics and apply correct formula to 
                  the rest of the remaining values so that we can compare the result with the element containing '?' symbol and find out the
                  number which should be replaced with '?'. Example --> (42 * 47 + 2) gives the result ans = 1976.

        Step 4 :  If part :   If the length is equal then -> let us take an example 42 * 47 + 2 = 1?76, here after evaluating we get --> d=1?76 & ans = 1976 
                              now we will just check the position where the '?' is present in d and get what is present in the same position of my computed answer
                              and now we will return that  digit in my computed answer at the calculated postion . Example --> 1?76 , here '?' is present at index 1 and at my computed value 
                              , i.e, ans = 1976 at index 1,  9 is present so we will return 9 after converting it into integer.

                  else part : Suppose we give the input -> 42 * 47 + ?2 = 1976 ,   where a = 42, b = 47, c = ?2 , d = 1976
                              now after evaluating we will get the value of c = 2 so now we need to replace '?' with 0 to make this expression valid  
                              which is not correct as the question states that the numbers should not have a leading 0 
                              so we will do a check if the length does not match return -1.
                  
        NOTE : I know the use of eval() is not encouraged due to various reasons but here I found it to be useful to make my code shorter.
        NOTE : The question clearly states that "Each character in each of A, B, C, D will be either a digit ('0'-'9') or a question mark ('?') " which means there will be no floating point numbers
               and the solution provided below is only for integer numbers , for floating point values the question needs some modifications.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    */
class FixEquation{
    findMissingDigit(equation){
        let i, ans = 0 ,pos = 0;
// Step 1
        const arr = equation.replace(/ /g, '').replace(/[^0-9\?\.]/g, ":").split(":");
// Step 2
        const [a,b,c,d] = arr;
// Step 3
        for (i = 0; i < 4; i++)
            if (arr[i].includes("?"))
                break;

        switch (i){
            case 0:
                ans = String(eval("(d-c)/b"));
                break;
            case 1:
                ans = String(eval("(d-c)/a"));
                break;
            case 2:
                ans = String(eval("d-a*b")); 
                break;
            case 3:
                ans = String(eval("a*b+2"));  
        }
// Step 4
        if (ans.length === arr[i].length){
            pos = arr[i].indexOf("?");
            return parseInt(ans.charAt(pos));
        }
        else{
            return -1;
        }
    }
}
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question(`Enter Equation :`, equation => {
    var obj = new FixEquation();
    var solution = obj.findMissingDigit(equation);
    console.log("Equation :", equation);
    console.log("Returns : ", solution);
    readline.close();
})