function solution(str1, str2) {
    str1 = str1.toLowerCase().split('')
    str2 = str2.toLowerCase().split('')
    
    str1 = divideString(str1)
    str2 = divideString(str2)

    let intersection = getIntersection([...str1],[...str2])
       // 합집합 = 집합A + 집합B - A교집합B
    let union = str1.length +str2.length - intersection
    if(union === 0 && intersection === 0){
        return 65536
    }else if(intersection === 0 && union >0){
        return 0
    }
    let result = (intersection/union) * 65536
    
    return Math.floor(result)

}

const divideString=(str) =>{
    let arr=[]
    let regExp = /[A-Z|a-z]/
    for(let i=0;i<str.length-1;i++ ){
        if(regExp.test(str[i]) && regExp.test(str[i+1])){
            arr.push(str[i]+str[i+1])
        }
    }   
    
    return arr
}

// 일단 교집합을 구할 때 ["a","a","b","b","c"] 와 ["a","b","b","d","e"] 의 경우에 [a, b, b] 가 나와야 합니다. 
const getIntersection=(str1,str2)=>{
    let count=0;
    for(let i =0; i<str1.length; i++){
        let index = str2.indexOf(str1[i])
        if(index > -1){
            count++
            str2.splice(index,1)
        }
    }
    return count
}
