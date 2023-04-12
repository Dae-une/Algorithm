function checkBalance(word) {
    let count =0;
    for (const str of word){
        if(str ==='('){
            count++
        }else{
            count--
            if(count<0){
                return false
            }
        }
    }
    return count === 0
}

function solution(p) {
    if(!p) return ''
    let u,v
    for(let i =0,pointer=0; i<p.length;i++){
        if(p[i] === '('){
            pointer++;
        }else{
            pointer--;
        }
        if(!pointer){
            u = p.slice(0,i+1);
            v=p.slice(i+1)
            break;
        }
    }
    
    if(checkBalance(u)){
        return u+solution(v)
    }
    
    return `(${solution(v)})${[...u.slice(1,-1)].map((str)=>str ==='(' ? ')' :'(').join('')}`
    
}
