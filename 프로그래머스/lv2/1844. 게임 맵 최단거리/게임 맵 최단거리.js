function solution(maps) {
    const row = maps.length -1;
    const col = maps[0].length -1;
    const direction = [[1,0],[-1,0],[0,1],[0,-1]];
    const queue =[[0,0,1]];
    
    while(queue.length){
        const [y,x,count] = queue.shift();
        
        if(y === row && x === col) return count;
        
        for(let i =0; i<4 ;i++){
            const [dy,dx] =direction[i];
            const nextX = x+dx;
            const nextY = y+dy;
            
            if(isNotRoad(nextY,nextX,row,col)) continue;
            if(maps[nextY][nextX] === 0) continue;
            
            maps[nextY][nextX] = 0;
            queue.push([nextY,nextX,count+1]);
        }
    }
    return -1;
}

function isNotRoad(nextY,nextX,row,col){
    if(nextY >row || nextX>col || nextX <0 || nextY<0 ){
        return true;
    }
    return false;
}