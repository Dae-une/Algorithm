function solution(want, number, discount) {
    let wantObj = {};
    let count =0;
    
    want.forEach((elem,idx)=>{
        wantObj[elem] = number[idx];
    })
    
    let baskets =discount.slice(0,10);
     
    const isCorrect =(basket)=>{
        let targets = {...wantObj};
        let result =true;
        
        for(let i =0; i<basket.length; i++){
            if(targets[basket[i]]){
                targets[basket[i]] -=1;
            }else{
                return result=false;
            }
        }
        
        for(let count in targets){
            if(targets[count] > 0) return result =false;
        }
        return result;
    }
    
    for(let i =10;i<=discount.length; i++){
        if(isCorrect(baskets)){
            count++;           
        }
        baskets.shift();
        baskets.push(discount[i]);
    }
    
    return count;
}