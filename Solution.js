// Approach to find missing digit in an expression of the form A * B + C = D
// where missing digit is denoted by ?
class fixEquation{
   
    validate(predicted_string,actual_string) // function which checks for the missing integer
    {
        if(predicted_string.length != actual_string.length){
            return -1;
        }        

        const index = actual_string.indexOf('?');
        const missing_digit = predicted_string.charAt(index);
        return parseInt(missing_digit);
    }
    findMissingDigit(str)
    {
        // split string on the basis of the  whitespace
    	let string_array=str.split(' ');
        let A=string_array[0];      
        let B=string_array[2];      
        let C=string_array[4];      
        let D=string_array[6];      

        //checking for the presence of '?'
        let predicted_string;
        if(A.includes('?')){
            predicted_string=(parseInt(D)-parseInt(C))/parseInt(B);
            return this.validate(predicted_string.toString(),A);
        }        	
        else if(B.includes('?')){
            predicted_string=(parseInt(D)-parseInt(C))/parseInt(A);
            return this.validate(predicted_string.toString(),B);
        }            
        else if(C.includes('?')){
            predicted_string=parseInt(D)-(parseInt(A)*parseInt(B));
            return this.validate(predicted_string.toString(),C);
        }
         	
        else {
            predicted_string=parseInt(A)*parseInt(B)+parseInt(C);
            return this.validate(predicted_string.toString(),D);
        }
        	
    }
};



var obj= new fixEquation;
console.log(obj.findMissingDigit('2 * 12? + 2 = 247'));

