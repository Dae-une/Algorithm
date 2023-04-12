function solution(begin, target, words) {
    const queue = [begin];
    const visited = {[begin]:0};
    
    while(queue.length){
        const cur = queue.shift();
        
        if(cur === target) break;
        
        for(const word of words){
            if(isAble(word,cur) && !visited[word]){
                visited[word] = visited[cur]+1;
                 queue.push(word)
            }
        }
    }
    return visited[target] ?? 0
}

const isAble =(word,cur)=>{
    let count =0;
    for(let i =0;i<word.length;i++){
        if(word[i] !== cur[i]) count++
    }
    return count ===1;
}