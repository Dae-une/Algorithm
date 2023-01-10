function solution(routes) {
    var answer = 0;
    let point = -30001
    
    routes.sort((a,b)=>{
        return a[1] -b[1]
    })
    
    routes.map((arr)=>{
        if(arr[0] > point){
            answer ++
            point = arr[1]
        }
    })
    return answer;
}