function solution(queue1, queue2) {
    let sum1 = queue1.reduce((acc,v)=>acc+v,0);
    let sum2 = queue2.reduce((acc,v)=>acc+v,0);
    
    let pointer1=0;
    let pointer2=queue1.length;
    const queue =[...queue1,...queue2]
    
    const target = (sum1+sum2)/2;
    const end = queue1.length *3;
    
    for(let i =0;i<end;i++){
        if(sum1 === target){
            return i
        }
        if(sum1>target){
            sum1 -=queue[pointer1++];
        }else{
            sum1 +=queue[pointer2++]
        }
        
    }
    return -1;
}