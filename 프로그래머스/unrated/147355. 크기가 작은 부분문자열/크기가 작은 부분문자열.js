function solution(t, p) {
    const tArray =[];
    const limit =p.length;
    
    for(let i =0; i<t.length;i++){
        const target = t.substring(i,i+limit)
        if(target.length !== limit) continue;
        tArray.push(target)
    }

    const result = tArray.filter((t)=> t <= p).length
    return result;
}