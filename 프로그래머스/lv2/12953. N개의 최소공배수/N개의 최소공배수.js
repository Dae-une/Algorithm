function solution(arr) {
    let answer = 1;
    for (let i =0; i<arr.length;i++){
        answer =getLcm(answer,arr[i])
    }
    return answer
}

const getGcd =(a,b)=>{
    while(b>0){
        let temp =b;
        b= a%b;
        a=temp
    }
    return a
}

const getLcm=(a,b)=>{
    return (a*b) /getGcd(a,b)
}