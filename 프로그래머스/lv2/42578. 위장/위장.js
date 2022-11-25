function solution(clothes) {
    let obj={}
    let arr =[]
    for(let [value,key] of clothes){
        obj[key] ? obj[key] = obj[key] +1 : obj[key] = 1
    }
    
    for(let key in obj){
        arr.push(obj[key])    
    }
    let answer=1
    console.log(arr)
    if(arr.length ===1) return arr[0]
    for(let i =0; i< arr.length;i ++){
        answer *= arr[i]+1
    }

    
    return answer-1
}
        