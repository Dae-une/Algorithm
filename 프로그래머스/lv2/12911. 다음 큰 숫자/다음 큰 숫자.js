function solution(n) {
 let answer = n;
    const oneCount = n.toString(2).match(/1/g).length
    while(true){
        answer++
        if(oneCount === (answer).toString(2).match(/1/g).length)
        break
    }
    return answer;
}