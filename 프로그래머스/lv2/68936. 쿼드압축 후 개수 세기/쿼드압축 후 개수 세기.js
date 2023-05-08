function solution(arr) {
    const answer =[0,0];
    
    const quartered =(x,y,size)=>{
        if(size === 1) return answer[arr[x][y]]++;
        
        let able =true;
        for(let i=x;i<x+size;i++){
            for(let j=y; j<y+size;j++){
                if(arr[i][j] !== arr[x][y]){
                    able =false;
                    break;
                }
            }
        }
        
        if(able) return answer[arr[x][y]]++;
        
        size /=2;
        
        quartered(x,y,size);
        quartered(x+size,y,size);
        quartered(x,y+size,size);
        quartered(x+size,y+size,size);
    }
    
    quartered(0,0,arr.length)
    
    return answer;
}