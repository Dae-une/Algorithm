function solution(m, n, startX, startY, balls) {
    var answer = [];
    for(let i=0;i<balls.length;i++){
        const [targetX,targetY] = balls[i];
        
        const symmetryUp =(targetX -startX)**2 + (2*n -targetY-startY) **2;
        const symmetryDown =(targetX -startX) **2 + (targetY +startY) **2;
        const symmetryLeft =(targetX +startX) **2 +(targetY -startY) **2;
        const symmetryRight =(2*m -targetX -startX) **2 +(targetY -startY)**2;
        
        if(targetX === startX){
            if(targetY >startY){
                answer.push(Math.min(symmetryDown,symmetryLeft,symmetryRight))
            }else{
                answer.push(Math.min(symmetryUp,symmetryLeft,symmetryRight))
            }
        } else if(targetY === startY){
            if(targetX > startX){
                answer.push(Math.min(symmetryDown,symmetryUp,symmetryLeft))
            }else{
                answer.push(Math.min(symmetryDown,symmetryUp,symmetryRight))
            }
        }else{
            answer.push(Math.min(symmetryDown,symmetryUp,symmetryLeft,symmetryRight))
        }

    }

    return answer;
}