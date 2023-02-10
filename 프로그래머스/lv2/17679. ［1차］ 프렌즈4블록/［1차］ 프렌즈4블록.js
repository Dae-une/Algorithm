function solution(m, n, board) {
    board = board.map((v)=>v.split(''))
    
    while(true){
        let broked =[];
        
        for(let i =0; i<m-1;i++){
            for(let j = 0; j<n-1;j++){
                const startPoint =board[i][j]
                if(startPoint && startPoint=== board[i][j+1] && startPoint=== board[i+1][j+1] && startPoint === board[i+1][j]){
                    broked.push([i,j])
                }
            }
        }
        
        if(!broked.length){
            return [].concat(...board).filter((v)=>!v).length;
        }

     for (let i = 0; i < broked.length; i++) {
          const col = broked[i][0];
          const row = broked[i][1];
          board[col][row] = 0;
          board[col][row + 1] = 0;
          board[col + 1][row] = 0;
          board[col + 1][row + 1] = 0;
        }
        
        for(let i=m-1; i>0; i--){
            if(!board[i].some((v)=>!v))continue;
            
            for(let j =0; j<n;j++){
                for(let k= i-1;k>=0 && !board[i][j];k--){
                    if(board[k][j]){
                        board[i][j]= board[k][j]
                        board[k][j]=0;
                        break;
                    }
                }
            }
        }
        
        
    }
}