const getDivisors =(num)=>{
    const divisors =[]
    for(let i =1; i<=Math.sqrt(num);i++){
        if(num % i ===0){
           divisors.push(i)
            if(num /i !=i) divisors.push(num/i)
         }
    }
    return divisors.length
}

function solution(number, limit, power) {
    const list =[]
    for(let i=1 ; i<=number; i++){
        list.push(getDivisors(i))
    }
        
    return list.map((num)=>{
        return num > limit ?power :num
    }).reduce((acc,cur)=>acc+cur,0)
}