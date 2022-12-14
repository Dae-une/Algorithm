function solution(numbers) {
    var answer = [];
    
    for(let i=0;i<numbers.length;i++){
        let temp = numbers[i].toString(2).split('')
        if(numbers[i] % 2 === 0){
            answer.push(numbers[i]+1)
        }else{
            let idx = temp.lastIndexOf('0')
            if(idx >0){
                temp[idx] = '1'
                temp[idx+1] ='0'
            }else{
                temp.unshift('1')
                temp[1] ='0'
            }
        temp = temp.reduce((a,b,)=>a+b)
        answer.push(parseInt(temp,2))
        }
    }

    return answer;
}