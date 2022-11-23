function solution(progresses, speeds) {
    let date = [];
    let answer =[]
    for(let i =0; i< progresses.length; i++){
        let count =0;
        while(progresses[i] < 100){
            progresses[i] = progresses[i] +(speeds[i])
            count++
        }
        date.push(count)
    }
    
    while(date.length > 0){
        let count=1;
        for(let j =1; j<= date.length; j++){
            if(date[0]>= date[j]){
                count++
            }else{
                date.splice(0,count)
                break;
            }
        }
        answer.push(count)
    }

    
    return answer;
}