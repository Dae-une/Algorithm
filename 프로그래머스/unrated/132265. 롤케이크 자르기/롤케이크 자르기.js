function solution(topping) {
    let answer =0;
    const total =new Map();
    const brother =new Set();
    
    for(let i=0; i<topping.length;i++){
        total.has(topping[i]) ? total.set(topping[i],total.get(topping[i])+1) : total.set(topping[i],1)
    }
    
    for(let i =0;i<topping.length;i++){
        brother.add(topping[i]);
        let count = total.get(topping[i])-1;
        if(count === 0){
            total.delete(topping[i])
        }else{
            total.set(topping[i],count)
        }
        
        if(brother.size === total.size){
            answer++
        }
        
    }
    
    return answer
}