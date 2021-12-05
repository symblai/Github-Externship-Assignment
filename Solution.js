function findMissingDigit(equation){
    var equationArray = equation.split(" ");
    var pos,result;
    //var equationArray = equationArray1;
    for(var i in equationArray){
        if(equationArray[i].indexOf("?") == -1){
            if(i%2==0){
                equationArray[i] = parseInt(equationArray[i]);
            }
            console.log(equationArray[i]);
        }
        else {
            pos = i;
            console.log("true" , equationArray[i]);
        }
    }
    if(pos == 0){
        result = (equationArray[6]-equationArray[4])/equationArray[2];
    }
    else if(pos == 2){
        result = (equationArray[6]-equationArray[4])/equationArray[0];
    }
    else if(pos==4){
        result = equationArray[6]-(equationArray[0] * equationArray[2]);
    }
    else if(pos==6){
        result = equationArray[4]+(equationArray[0] * equationArray[2]);
    }
    console.log(result);
    
}
console.log(findMissingDigit("42 * 47 + 2 = 1?76"))
console.log("\n");
console.log(findMissingDigit("4? * 47 + 2 = 1976"))
console.log("\n");
console.log(findMissingDigit("42 * ?7 + 2 = 1976"))
console.log("\n");
console.log(findMissingDigit("42 * ?47 + 2 = 1976"))
console.log("\n");
console.log(findMissingDigit("2 * 12? + 2 = 247"))
console.log("\n");