function solution(brown, yellow) {
    var answer = [];
    const size = brown + yellow;
    
    return ratioList(size).filter((list)=> (list[0] +list[1]) *2 -4 === brown)[0]
}

function ratioList(size){
    const result =[];
    for(let i =1;i<=Math.sqrt(size); i++){
        if(size % i=== 0) result.push([size/i,i])
    }
    return result
}


