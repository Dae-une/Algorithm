function solution(n, m, section) {
    var answer = 0;
    let checked = section[0] + (m-1);
    
    while(section.length){
        if(section[0] <= checked){
            section.shift()
        }else{
        checked = section[0] + (m-1);
        answer++
        }    
    }
    
    
    return answer +1
}