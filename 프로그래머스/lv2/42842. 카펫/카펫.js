function solution(brown, yellow) {
    var answer = [];
    const size = brown + yellow
    
    answer = ratioList(size).filter((list)=> (list[0]+list[1]) *2 -4 ===brown)[0]
    return answer

}

const ratioList=(size)=>{
    let result =[]
    for(let i =1; i<= Math.sqrt(size); i ++){
     if(size % i === 0) result.push([size/i,i])
 }
    console.log(result)
 return result
}