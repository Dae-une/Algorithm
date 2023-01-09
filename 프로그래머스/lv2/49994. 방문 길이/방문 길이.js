function solution(dirs) {
    const move = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
    let now =[0,0];
    const visited= new Set();
    
    for(let i =0; i<dirs.length;i++){
       let nowX =now[0] + move[dirs[i]][0];
       let nowY =now[1] + move[dirs[i]][1];
        
        if(nowX >5 ||nowX <-5 || nowY >5 || nowY <-5 ) continue;
    
        visited.add(""+now[0] +now[1]+nowX+nowY)
        visited.add(""+nowX+nowY+now[0]+now[1])
        
        now =[nowX,nowY]
    }
    return visited.size/2

}
    