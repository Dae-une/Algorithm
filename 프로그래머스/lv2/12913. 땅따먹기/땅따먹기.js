function solution(land) {
    let sum = 0;
    
    for(let i =1; i<land.length;i++){
        for(let j=0; j< land[i].length;j++){
            let arr = land[i-1].slice();
            arr[j] = 0;
            land[i][j] += Math.max(...arr);
            sum = Math.max(sum,land[i][j])
        }
    }
    
    return sum;
}
