function solution(progresses, speeds) {
    var answer = [];
    
    while(speeds.length){
        for(let i =0; i<speeds.length;i++){
            progresses[i] += speeds[i]
        }
        
        
        let deployCount=0;
        while(progresses[0]>=100){
            progresses.shift();
            speeds.shift();
            deployCount++
        }
        if(deployCount >0){
            answer.push(deployCount)
        }
    }
    return answer;
}