function solution(s) {
    var answer = [];
    const strArray = s.split('')
    const obj ={}
    
    strArray.map((str,index)=>{
        if(obj[str] === undefined){
          answer.push(-1)
        }else{
        answer.push(index -obj[str])
        }
        obj[str] = index 
    })
    
    
    return answer
}