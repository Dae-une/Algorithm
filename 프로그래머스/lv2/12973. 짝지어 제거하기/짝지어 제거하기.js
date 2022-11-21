function solution(s)
{
    var answer = -1;
    let newArray = []
    for(let i=0; i<s.length; i++){
        newArray[newArray.length-1] === s[i] ?  newArray.pop() : newArray.push(s[i])
    }
    answer = newArray.length === 0 ? 1 : 0
    return answer;
}