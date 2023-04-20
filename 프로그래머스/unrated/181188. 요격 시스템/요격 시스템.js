function solution(targets) {
    var answer = 0;
    targets.sort((a,b)=>{
        if(a[0] === b[0]){
         return a[0] -b[0]
        }
        return a[1]-b[1]
    })
    
    console.log(targets)
    let point =-1;
    for(let i =0;i<targets.length;i++){
        const left = targets[i][0]
        const right = targets[i][1]
        
        if(left >= point){
            answer++
            point =right
        }
        
    }
    return answer;
}


