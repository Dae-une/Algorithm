function solution(id_list, report, k) {
    const answer = new Array(id_list.length).fill(0)
    const reportList ={}
    
    id_list.map((id)=>{
        reportList[id] =[]
    })
    
    report.map((list)=>{
        const [user,report] = list.split(' ')
        if(!reportList[report].includes(user)){
            reportList[report].push(user)
        }
    })
    
    for(const key in reportList){
        if(reportList[key].length >=k){
            reportList[key].map((user)=>{
                answer[id_list.indexOf(user)] ++
            })
        }
    }
    return answer
    
}