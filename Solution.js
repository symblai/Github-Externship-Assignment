// Write your code here
class FixEquation
{
    findMissingDigit(equation)
    {
        var flag = false;
        var i,temp,str_num;

        const num = equation.split(" ");

        if((num[0].search("[?]") >= 0) || (num[2].search("[?]") >= 0))
        {
            temp = parseInt(num[6]) - parseInt(num[4]);
            if(num[0].search("[?]") >= 0)
            {
                temp/= num[2];
                str_num = num[0];
            }
            else
            {
                temp/= num[0];
                str_num = num[2];
            }
        }
        else if((num[4].search("[?]") > 0))
        {
            temp = parseInt(num[6]) / (parseInt(num[2]) * parseInt(num[0]));
            str_num = num[4];
        }
        else
        {
            temp = parseInt(num[4]) + (parseInt(num[2]) * parseInt(num[0]));
            str_num = num[6];
        }
        var str_calc = temp.toString();
        //console.log(str_num,str_calc)
        if(str_num.length != str_calc.length)
        {
            return -1;
        }
        else
        {
            var pos = str_num.search("[?]");
            return str_calc.charAt(pos);
        }
    }
}

let obj = new FixEquation;
let string = "2 * 12? + 2 = 247";
console.log(obj.findMissingDigit(string))
//console.log(obj.myFunction("12?","123"))
