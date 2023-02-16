function solution(number) {
 const arr = getCom(number,3)
 
 return arr.filter((arr)=>arr.reduce((a,b)=>a+b) === 0).length
}

const getCom =(arr,selectNum)=>{
    const result =[]
    if(selectNum ===1) return arr.map((el)=>[el])
    
    arr.forEach((fixed,index,origin)=>{
    const rest =origin.slice(index+1)
    const combinations =getCom(rest,selectNum-1)
    const attached =combinations.map((el)=>[fixed,...el])
    result.push(...attached)
    })
    return result
}