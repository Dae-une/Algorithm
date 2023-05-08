function solution(rows, columns, queries) {
    var answer = [];
    let arr = Array.from(new Array(rows +1),()=> new Array(columns +1).fill(0));
    
    for(let i =1; i<=rows;i++){
        for(let j=1 ; j<=columns; j++){
            arr[i][j] = (i -1) * columns +j;
        }
    }
    
    queries.forEach(([x1,y1,x2,y2])=>{
        const stack =[];
        
        for(let i=y1; i<y2;i++) stack.push(arr[x1][i]);
        for(let i=x1; i<x2;i++) stack.push(arr[i][y2]);
        for(let i=y2; i>y1;i--) stack.push(arr[x2][i]);
        for(let i=x2; i>x1;i--) stack.push(arr[i][y1]);
        
        answer.push(Math.min(...stack));
        const last = stack.pop();
        stack.unshift(last);
        
        for(let i=y1; i<y2;i++) arr[x1][i] = stack.shift();
        for(let i=x1; i<x2;i++) arr[i][y2] = stack.shift();
        for(let i=y2; i>y1;i--) arr[x2][i] = stack.shift();
        for(let i=x2; i>x1;i--) arr[i][y1] = stack.shift();

    })
    
    
    
    return answer;
}