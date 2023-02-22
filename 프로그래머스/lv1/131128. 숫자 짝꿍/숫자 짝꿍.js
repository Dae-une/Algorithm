function solution(X, Y) {
    let answer =''
    const x = X.split('')
    const y = Y.split('')
    
    for(let i =0; i<=9; i++){
        const curX =x.filter((a)=>Number(a) === i).length
        const curY =y.filter((a)=>Number(a)===i).length
        answer += String(i).repeat(Math.min(curX,curY))
    }
    
    if (answer === '') return '-1'
    if(Number(answer) === 0) return '0'
    
    return answer.split('').sort((a,b)=>Number(b)-Number(a)).join('')
}