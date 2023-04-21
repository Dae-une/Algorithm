function solution(r1, r2) {
    var answer = 0;
    
    let r2Has =0;
    let r1Has =0;
    
    for(let x =1;x<r2;x++){
        r2Has += getY(x,r2,'r2');
    }
    for (let x=1;x<r1;x++){
        r1Has +=getY(x,r1,'r1');
    }
    return (r2Has-r1Has + r2-r1+1) * 4
}

function getY(x,r,rType){
    const max =Math.sqrt(r *r - x*x);
    const maxToInt = parseInt(max);
    if(rType === 'r1' && max - maxToInt === 0){
        return maxToInt -1;
    }
    return maxToInt
}