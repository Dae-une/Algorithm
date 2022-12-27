function solution(record) {
    let answer =[]
    let uIds ={}
    record.map((log)=>{
        const [type,uid,name] = log.split(' ')
        if(type === 'Enter' || type === 'Change'){
            uIds[uid] = name
        }
    })

    record.map((log)=>{
        const [type,uid,name] = log.split(' ')
        switch(type){
            case "Enter":
                answer.push(`${uIds[uid]}님이 들어왔습니다.`);
                break;
            case "Leave":
                answer.push(`${uIds[uid]}님이 나갔습니다.`);
                break;
        }
    })
    return answer
}