function solution(cacheSize, cities) {
    let time =0;
    let cache =[];
    
    const isOverSize =()=>{
        return cacheSize < cache.length;
    }
    
    for(let i =0; i<cities.length;i++){
        const temp = cities[i].toUpperCase();
        
        let isCache = cache.find((elem)=>elem.name === temp);
        
        if(!isCache){
            cache.push({name:temp,idx:i});
            time +=5;
            if(isOverSize()){
                cache.shift();
            }
        }
        
        if(isCache){
            time +=1;
            let index = cache.indexOf(isCache);
            cache[index].idx = i;
        }

        
        cache.sort((a,b)=>{
            if(a.idx > b.idx){
                return 1;
            }else if(a.idx<b.idx){
                return -1;
            }
        })
        
    }
    
    return time;
}