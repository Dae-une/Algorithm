function solution(n, k) {
    const numbers = n.toString(k).split('0')
    let answer =0;
    numbers.forEach((number)=>{
        const target = parseInt(number)
        if(isPrime(target)) answer++
    })
    return answer;
}

function isPrime(num){
    if(!num || num === 1)return false;
    for(let i =2;i<=Math.sqrt(num);i++){
        if( num % i === 0)return false;
    }
    return true;
}





