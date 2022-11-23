function solution(numbers) {
    var answer = '';
    for(let i=0;i<numbers.length;i++){ 
        numbers[i]=String(numbers[i]);
    }

    numbers.sort(condition); 
    numbers.forEach((num)=>{
        answer+=num;
    })
    if(Number(answer) === 0) return '0'
    return answer;
}

function condition(a,b){
    if (a+b<b+a) return 1; 
    if (a+b>b+a) return -1;
    if (a+b===b+a) return 0;
}