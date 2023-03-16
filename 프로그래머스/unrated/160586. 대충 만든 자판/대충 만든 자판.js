function solution(keymap, targets) {
    var answer = [];
    const map =new Map()
    
    keymap.forEach((keys)=>{
        for(let i =0; i<keys.length;i++){
            if(map.has(keys[i])){
                map.set(keys[i],Math.min(map.get(keys[i]),i+1))
            }else{
                map.set(keys[i],i+1)
            }
        }
    })
    
    targets.forEach((target)=>{
        let count=0;
        for(let i =0; i<target.length;i++){
            if(map.has(target[i])){
                count += map.get(target[i])
            }else{
                count =-1;
                break;
            }
        }
        answer.push(count)
    })
    
    
    return answer
}