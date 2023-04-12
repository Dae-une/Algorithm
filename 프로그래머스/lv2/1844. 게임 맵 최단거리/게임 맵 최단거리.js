function solution(maps) {
    const row = maps.length-1;
    const col = maps[0].length-1;
    const direction = [[0,1],[1,0],[0,-1],[-1,0]]
    const queue = [[0,0,1]]
    while(queue.length){
        const [y,x,count] = queue.shift();
        
        if( y ===row && x === col) return count;
        
        for(let i =0;i<4;i++){
            const [dy,dx]=direction[i]
            const nextY = dy+y;
            const nextX = dx+x;
            
            if(isNotRoad(nextX,nextY,row,col)){
                continue;
            }
            
            if(maps[nextY][nextX] === 0){
                continue;
            }
            maps[nextY][nextX] =0;
            queue.push([nextY,nextX,count+1])
        }
    }
    return -1;
}


const isNotRoad =(nextX,nextY,row,col)=>{
    return nextY <0 || nextX < 0 || nextX>col || nextY > row
}