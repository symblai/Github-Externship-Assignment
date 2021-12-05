class FixEquation{
    findMissingDigit(equation){
        var equationArray = equation.split(" ");
        var pos,result;
        //var equationArray = equationArray1;
        for(var i in equationArray){
            if(equationArray[i].indexOf("?") == -1){
                if(i%2==0){
                    equationArray[i] = parseInt(equationArray[i]);
                }
            }
            else {
                pos = i;
                console.log("true" , equationArray[i],typeof(equationArray[i]));
            }
        }
        if(pos == 0){
            result = (equationArray[6]-equationArray[4])/equationArray[2];
            result = result.toString();
            
        }
        else if(pos == 2){
            result = (equationArray[6]-equationArray[4])/equationArray[0];
            result = result.toString();
        }
        else if(pos==4){
            result = equationArray[6]-(equationArray[0] * equationArray[2]);
            result = result.toString();
        }
        else if(pos==6){
            result = equationArray[4]+(equationArray[0] * equationArray[2]);
            result = result.toString();
        }
        if(result.length != equationArray[pos].length) {
                return -1;
            }
            else {
                return result[equationArray[pos].indexOf("?")]
            }
        //console.log(result);
        
    }
}
