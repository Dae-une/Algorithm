function solution(numbers) {
    const number =numbers.split('');
    let answer =0;
    const arr =[]
    for(let i =1; i<=number.length;i++){
        const permutation = getPermutations(number,i);
        arr.push(...permutation)
    }
    
    const set =[...new Set(arr.flatMap((el)=>Number(el.join(''))))]
    for(const num of set){
        if(isPrime(num)){
            answer++
        }
    }
    return answer;
}

const isPrime=(num)=>{
    if(num === 1 || num === 0) return false;
    for(let i=2; i<=Math.sqrt(num);i++){
        if(num % i ===0) return false;
    }
    return true;
}


const getPermutations =(arr,num)=>{
    const result =[];
    if(num ===1) return arr.map((v)=>[v]);
    arr.forEach((fixed,index,origin)=>{
        const rest = [...origin.slice(0,index),...origin.slice(index+1)];
        const permutations = getPermutations(rest,num-1);
        const attached = permutations.map((el)=>[fixed,...el]);
        result.push(...attached)
    })
    return result;
}