// Write your code here

//the class
class fixEquation{
    check(x,str) // function which checks for the missing integer
    {
        let target=String(x);
        if(target.length != str.length)
        return -1;

        var result;
        for(var i=0;i<target.length;i++)
        if(target[i]!=str[i] && str[i]!='?')
        return -1;
        else if(str[i]=='?')
        result=target[i];
        return result;
    }
    findMissingDigit(str)
    {
    	let a=str.split(' ');
        let A=a[0];
        let B=a[2];
        let C=a[4];
        let D=a[6];
        
        //checking for the presence of '?'
        if(A.includes('?'))
        	return check((parseInt(D)-parseInt(C))/parseInt(B),A);
        else if(B.includes('?'))
            return check((parseInt(D)-parseInt(C))/parseInt(A),B);
        else if(C.includes('?'))
         	return check(parseInt(D)-(parseInt(A)*parseInt(B)),C);
        else 
        	return check(parseInt(A)*parseInt(B)+parseInt(C),D);
    }
};



var obj= new fixEquation;
console.log(obj.findMissingDigit('42 * 47 + 2 = 19?6'));
