function solution(expression) {
    var answer = [];
    const permutations = getPermutations(['+','-','*'],3)
    
    permutations.forEach((permutation)=>{
        const arr = expression.split(/(\D)/)
        permutation.forEach((oper)=>{
            while(arr.includes(oper)){
                const index = arr.indexOf(oper);
                arr.splice(index-1,3,calc(arr[index-1],arr[index+1],oper));
            }
        })        
         answer.push(arr[0]);
    })
    
    const result =answer.map((num)=> Math.abs(num));

    
    return Math.max(...result)
}

function calc(A,B,oper){
    const numberA = Number(A);
    const numberB = Number(B);
    let answer;
    switch(oper){
        case'+':
            return answer = numberA + numberB; 
        case'*':
            return answer = numberA * numberB;
        case'-':
            return answer = numberA - numberB;
    }
    return answer;
}

function getPermutations(arr,num){
    if (num === 1) return arr.map((el)=>[el]);
    const result =[];
    
    arr.forEach((fixed,index,origin)=>{
        const rest =[...origin.slice(0,index), ... origin.slice(index+1)];
        const permutations = getPermutations(rest,num-1);
        const attached = permutations.map((el)=>[fixed,...el]);
        result.push(...attached)
    })
    return result;
}
