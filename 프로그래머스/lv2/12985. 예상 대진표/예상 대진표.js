function solution(n,a,b)
{
    let big = Math.max((a,b))
    let small = big === a ? b: a
    let count =0;   

    while(big !==small){
        if(big % 2 !==0) big++
        if(small %2 !==0) small++
        
        big /=2;
        small/=2;
        count++
    }
    
    return count;
}