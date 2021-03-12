function validateCoprimos(a, b){
    if(isNumber(a)&&isNumber(b)){
        let mcd = getMCD(a ,b);
        if(mcd != 1){
            throw new Error("MCD = " + mcd + " - No son coprimos");
        } else {
            return mcd;
        }
    } else{
        throw new Error("a y b no son datos numpericos válidos");
    }
}

function getMCD(m,n){
    if(m % n == 0){
        return n;
    } else{
        return getMCD(n,(m % n));
    }
}

function isNumber(n){
    return (!isNaN(parseFloat(n))&&isFinite(n))?true:false;
}