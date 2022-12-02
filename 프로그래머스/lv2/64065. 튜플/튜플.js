function solution(s) {
    var answer = [];
    s = s.replace(/{|}/g,'').split(',')
    let obj={}
    for(let i =0; i<s.length;i++){
        obj[s[i]] ? obj[s[i]] += 1 : obj[s[i]] =1
    }
    let arr=[]
    for(let num in obj){
        arr.push([num,obj[num]])
    }
    arr.sort((a,b)=>b[1]-a[1])
    console.log(arr)
    for(let num in arr){
        answer.push(+arr[num][0])
    }
    return answer;
}