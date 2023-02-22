function solution(s) {
    let fixed =''
    let isX =0;
    let isNotX=0;
    let count =0;
    for(let str of s){
        if(!fixed) fixed =str;
        
        if(fixed === str){
            isX++
        }else{
            isNotX++
        }
        
        if(isX === isNotX){
            count++;
            isX=0;
            isNotX=0;
            fixed=''
        }
    }
    if(fixed) count++
    
    return count
}