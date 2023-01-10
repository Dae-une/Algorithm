function solution(n, times) {
    times.sort((a,b)=> a-b)
    let response =0;
    let start =0;
    let end = times[times.length-1] *n;
    
    while(start <=end){
        let mid = Math.floor((start+end)/2);
        let max = 0;
        
        for(let e of times){
            max += Math.floor(mid /e);
        }
        
        if(max >= n){
            response =mid;
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return response
}