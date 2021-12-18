// Write your code here

class FixEquation
{
    constructor(a)
    {
        this.ip=a;
    }

    findMissingDigit(eq)
    {
        var ip = this.ip.split(' ');
        var A=ip[0];
        var B=ip[2];
        var C=ip[4];
        var D=ip[6];
        var visited;
        var res;

        if(A.includes('?'))
        {
            res=(parseInt(D)-parseInt(C))/parseInt(B);
            visited=A;
        }
        if(B.includes('?'))
        {
            res=(parseInt(D)-parseInt(C))/parseInt(A);
            visited=B;
        }
        if(C.includes('?'))
        {
            res=(parseInt(D)-parseInt(C)*parseInt(B));
            visited=C;
        }
        if(D.includes('?'))
        {
            res=(parseInt(A)*parseInt(B)+parseInt(C));
            visited=D;
        }
        res= String(res);
        if(res.length !== visited.length) return -1;

        for(var i=0;i<res.length;i++)
        {
            if(visited[i]!==res[i] && (visited[i]!=='?'))return -1;
            else if(visited[i]==='?') return parseInt(res[i]);
        }
        return -1;
    }
    
}

let classIN = new FixEquation('2 * 12? + 2 = 247');
let num = classIN.findMissingDigit();
console.log(num);