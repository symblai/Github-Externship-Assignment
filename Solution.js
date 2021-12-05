function findMissingDigit(string){

//We'll break the input string around '*','+' and '=' operators and store them in the variables..

    let v1 = string.split(" * ")
    let v2 = v1[1].split(" + ")
    let v3 = v2[1].split(" = ")

    let a = v1[0]
    let b = v2[0]
    let c = v3[0]
    let d = v3[1]
    
    //defining the variables that fit into make the equation complete
    let ax = parseInt(a)
    let bx = parseInt(b)
    let cx = parseInt(c)
    let dx = parseInt(d)

// console.log(a+" "+b+" "+c+" "+d)
// console.log(ax+" "+bx+" "+cx+" "+dx)

    
    //Now we check which of the variable contains the '?' and then we return the string corresponding to that variable else we return -1 straight up
    if(a.includes('?')){
        //console.log("Yes1")
        if((dx-cx)%bx==0){
            let x = ((dx-cx)/bx)
            return check(a, String(x))
        }
    }else if(b.includes('?')){
        //console.log("Yes2")
        if((dx-cx)%ax==0){
            let x = ((dx-cx)/ax)
            return check(b, String(x))
        }
    }else if(c.includes('?')){
        //console.log("Yes3")
        if((dx-(ax*bx))>=0){
            let x = (dx-(ax*bx))
            return check(c, String(x))
        }
    }else{
        //console.log("Yes4")
        let x = ((ax*bx)+cx)
        return check(d, String(x))
    }
    return -1;
}

//This function first checks for every equal-sized strings and compares each of the character against the question mark to finc the missing value 
function check(check, checkFrom){
    if(check.length == checkFrom.length){
        let toReturn
        for(let i=0; i<checkFrom.length; i++){
            if(check[i]!=checkFrom[i] && check[i]!='?'){
                return -1
                return parseInt(checkFrom[i])
            } else if(check[i]!=checkFrom[i] && check[i]==='?'){
                toReturn = parseInt(checkFrom[i])
            }
        }
        return toReturn
    }else{
        return -1
    }
}

findMissingDigit("42 * ?47 + ? = 1976"); //Outputs -1, because there are two '?'
//findMissingDigit("42 * 47 + ? = 1976"); //Outputs 2
//findMissingDigit("42 * ?7 + 2 = 1976"); //outputs 4
//findMissingDigit("4? * 47 + 2 = 1976"); //outputs 2
//findMissingDigit("42 * 47 + 2 = 1?76"); //outputs 9
//findMissingDigit("42 * ?47 + 2 = 1976"); //outputs -1 because no solution is possible
//findMissingDigit("42 * 12? + 2 = 247"); //outputs -1
