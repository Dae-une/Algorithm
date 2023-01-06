function solution(n, t, m, p) {
    let answer =''
    let words=''
    
    for(let i = 0 ; i< t*m ; i++){
        words += (i.toString(n).toUpperCase())
    }
    
    for(let i = p-1;i<t*m; i+=m){
        answer += words[i]
    }
    
    return answer
}