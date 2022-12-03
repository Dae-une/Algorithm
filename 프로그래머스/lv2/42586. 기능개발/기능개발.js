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



// function solution(progresses, speeds) {
//     var answer = [];

//     while(speeds.length > 0) {
//         // 개발
//         for(let i in speeds) {
//             if(progresses[i] < 100) {
//                 progresses[i] += speeds[i];
//             }
//         }

//         // 배포
//         let deploy_count = 0;
//         while(progresses[0] >= 100) {
//             progresses.shift();
//             speeds.shift();
//             deploy_count++;
//         }
//         if(deploy_count > 0) {
//             answer.push(deploy_count);
//         }
//     }

//     return answer;
// }
