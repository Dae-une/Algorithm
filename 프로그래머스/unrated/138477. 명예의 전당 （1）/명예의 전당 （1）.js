function solution(k, score) {
    let answer =[]
    
    for(let i = 0; i<score.length; i++){
        const list = score.slice(0,i+1).sort((a,b)=>b-a).slice(0,k)
        answer.push(list[list.length-1])
    }
    return answer
}