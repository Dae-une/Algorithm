function solution(people, limit) {
    let People =people.sort((a,b)=>a-b)
    console.log(People)
    let count =0;
    while(People.length >0){
        if(People[0] + People[People.length-1] > limit){
            count++
            People.pop()
        }else{
            count++
            People.pop()
            People.shift()
        }
    }
    
    return count
}