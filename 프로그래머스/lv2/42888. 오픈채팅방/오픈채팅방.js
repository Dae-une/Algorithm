function solution(record) {
    var answer = [];
    
    const nameObj ={};
    
    
    record.forEach((list)=>{
        const [action,id,name] = list.split(' ')
        if(action === 'Enter' || action === 'Change'){
            nameObj[id] = name;
        }
    })
    
    record.forEach((list)=>{
        const [action,id,name] = list.split(' ')
        if(action === 'Enter'){
            answer.push(`${nameObj[id]}님이 들어왔습니다.`)
        }
        if(action === 'Leave'){
            answer.push(`${nameObj[id]}님이 나갔습니다.`)
        }
    })
    
    return answer;
}