function solution(k, dungeons) {
    const permutations = getPermutations(dungeons,dungeons.length);
    let answer =0;
    console.log(permutations)
    
    for(let i=0; i<permutations.length;i++){
        const dungeon = permutations[i];
         
        let count=0;
        let fatique = k;
        for(let j=0; j<dungeon.length; j++){
            const target = dungeon[j];
            if(fatique >= target[0]){
                count++;
                fatique -= target[1]
            }
        }
        answer = Math.max(answer,count);
    }
    return answer
}


function getPermutations(arr,number) {
    if(number ===1) return arr.map((el)=> [el]);
    const result =[]
    arr.forEach((fixed,index,origin)=>{
        const rest = [...origin.slice(0,index),...origin.slice(index+1)];
        const permutations = getPermutations(rest,number-1);
        const attached = permutations.map((el)=>[fixed,...el]);
        result.push(...attached)
    })
    return result    
}



