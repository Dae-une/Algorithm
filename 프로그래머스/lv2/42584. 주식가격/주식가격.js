function solution(prices) {
    const result =[];
    
    for(let i =0; i<prices.length-1;i++){
        let next =0;
        for(let j=i; j<prices.length -1; j++){
            if(prices[i] <= prices[j]){
                next++;
            }else{
                break;
            }
        }
        result.push(next);
    }
    result.push(0);
    
    return result;
    
}