function solution(people, limit) {
    let People =people.sort((a,b)=>a-b)
    let count =0;
    let front =0;
    let back =People.length-1;
    while(true){
        if(front > back){
            break;
        }
        if(People[front] + People[back] > limit){
            count++
            back--
        }else{
            count++
            front++
            back--
        }
    }
    
    return count
}