function solution(sequence, k) {
    var answer = [0,Infinity];
    let left =0;
    let right =0;
    let sum = sequence[0];
    
    
    while(right < sequence.length){
        if(sum === k){
            if(answer[1] -answer[0] > right -left){
                answer =[left,right]
            }
            sum -=sequence[left++]
            sum +=sequence[++right]
        }
        if(sum > k){
            sum -= sequence[left++];
        }
        if (sum <k){
            sum += sequence[++right]
        }
    }
    
    return answer;
}