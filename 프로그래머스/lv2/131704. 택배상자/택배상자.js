function solution(order) {
    let answer = 0;
    let index=0;
    const stack =[];

    for(let i =1; i<=order.length;i++){
        if(order[index] !== i){
            stack.push(i)
        }else{
            answer++;
            index++;
        }
        
        while (stack.length && stack[stack.length-1] === order[index]){
            stack.pop();
            index++;
            answer++;
    }
        
    }

    
    return answer;
}
