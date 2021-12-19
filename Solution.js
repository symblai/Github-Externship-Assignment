var a, b, c,d;
var equation = "5*?+8=48";
function findingMissingDigit()
{
    let expression = equation.split(/[*+=]/);
    let intArray=[];
    let intIndex,missingNumIndex;
    for (let key in expression) {                        
        if (expression[key].includes("?") != true) {
            intArray.push(parseInt(expression[key]));
        }
        else{
            intArray.push((expression[key]));
            intIndex = key;                     
        }
    }
    missingNumIndex = intArray[intIndex].indexOf("?");
    a=parseInt(intArray[0]);
    b=parseInt(intArray[1]);
    c=parseInt(intArray[2]);
    d=parseInt(intArray[3]);

    if (intIndex == 0 ){
        a =(d-c)/b;
        console.log(a.toString()[missingNumIndex]);
    }
    else if(intIndex == 1)
    {
        b =(d-c)/a;
        console.log(b.toString()[missingNumIndex]);
    }
    else if(intIndex == 2)
    {
        c = d - (a*b);
        console.log(c.toString()[missingNumIndex]);
    }
    else if(intIndex ==3 )
    {
        d=(a*b)+b;
        console.log(d.toString()[missingNumIndex]);
    }
    else
    {
        console.log("-1");
    }

}
findingMissingDigit();
