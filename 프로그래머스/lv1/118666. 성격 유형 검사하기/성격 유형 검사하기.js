function solution(survey, choices) {
    const scoreObj ={R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 }
    let answer =''
    for(let i=0;i<choices.length;i++){
        const [leftType,rightType] = survey[i].split('')
        const score =Math.abs(choices[i]-4)
        if(choices[i]<4){
        scoreObj[leftType] +=score
        }
        if(choices[i] >4){
        scoreObj[rightType] +=score
        }
    }
    
    const score =Object.keys(scoreObj)
    console.log(score)
    for(let i=0; i<score.length;i+=2){
        const left =scoreObj[score[i]]
        const right = scoreObj[score[i+1]]
        if(left >=right){
            answer += score[i]
        }else{
            answer += score[i+1]
        }
    }
    return answer
}