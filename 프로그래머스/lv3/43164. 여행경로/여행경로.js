function solution(tickets) {
    var answer = [];
    const result =[];
    const visited =[];
    
    tickets.sort();
    const dfs =(start,count)=>{
        result.push(start);
        
        if(count === tickets.length){
            answer =result;
            return true;
        }
        
        for(let i =0;i<tickets.length;i++){
            if(!visited[i] && tickets[i][0]===start){
                visited[i] = true;
                
                if(dfs(tickets[i][1],count+1)) return true;
                visited[i] = false;
            }
        }
        result.pop();
        return false;       
    }
    
    dfs("ICN",0)
    
    return answer;
}