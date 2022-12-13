function solution(want, number, discount) {
    let basket = discount.slice(0,10)
    let answer = 0;
    const wantObj ={}
    want.forEach((elem,idx)=>{
        wantObj[elem] = number[idx]
    })
    
    function isCorrect(arr){
        let target = {...wantObj}
        let result = true
        for(let i =0; i<arr.length;i++){
            if(target[arr[i]]){
                target[arr[i]] -=1
            }else{
                return result=false
            }
        }
        
        for(let count in target){
            if(target[count] > 0) return result = false
        }
    
        return result
    }
    
    for(let i =10; i<=discount.length;i++){
        if(isCorrect(basket)){
            answer++
        } 
        basket.shift()
        basket.push(discount[i])
    }
    
    return answer
}


