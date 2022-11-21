function solution(n) {
    let answer = 0;
    let count = 0;
    for(let i=1; i<=n; i++) {
        for(let j=i; j<=n; j++) {
            answer += j;
            if(answer===n) {
                count++;
                answer = 0;
                break;
            }
            else if(answer>n) {
                answer = 0;
                break;
            }
        }
    }
    return count;
}