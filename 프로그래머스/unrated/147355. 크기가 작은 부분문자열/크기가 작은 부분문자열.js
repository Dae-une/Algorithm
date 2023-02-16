function solution(t, p) {
    let count =0;
    const limit =p.length;
    
    for(let i =0; i<t.length;i++){
        const target = t.substring(i,i+limit)
        if(target.length !== limit) continue;
        if(target <= p) count++
    }

    return count;
}