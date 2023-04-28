function solution(board) {
    board = board.map((item)=>item.split(''));
    
    const vertical = board.length;
    const horizon = board[0].length;
    const directionX =[1,-1,0,0];
    const directionY =[0,0,-1,1];
    let count = 0;
    const queue =[]
    
    board.forEach((ver,verIdx)=>{
        ver.forEach((item,idx)=>{
            if(item === 'R')return queue.push([verIdx,idx]);
        })
    })
    board[queue[0][0]][queue[0][1]] = 'visited'
    
    while(queue.length){
            
        const length =queue.length
        for(let i =0;i<length;i++){
             const [y,x] = queue.shift();
        
             for(let j =0;j<4;j++){
                let nextX = x + directionX[j];
                let nextY = y + directionY[j];

                while(nextY>=0 && nextY<vertical && nextX >=0 && nextX<horizon && board[nextY][nextX] !== 'D'){
                    nextX += directionX[j];
                    nextY += directionY[j];
                }

                nextX -= directionX[j];
                nextY -= directionY[j];

                if(board[nextY][nextX] === 'G') return count+1;

                if(board[nextY][nextX] !== 'visited'){
                    board[nextY][nextX] = 'visited'
                    queue.push([nextY,nextX])
                }
            }
        }
        count++;
      
    }

    return -1;
}