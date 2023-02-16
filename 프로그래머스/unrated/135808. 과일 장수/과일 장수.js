function solution(k, m, score) {
    let result =0;
    score = score.sort((a,b)=>b-a)
    
    for(let i=0; i+m <= score.length;i+=m){
        result += score[i+m-1]*m
    }
    return result
}
