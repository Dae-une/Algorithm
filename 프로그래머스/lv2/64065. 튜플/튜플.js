// function solution(s) {
//     var answer = [];
//     s = s.replace(/{|}/g,'').split(',')
//     let obj={}
//     for(let i =0; i<s.length;i++){
//         obj[s[i]] ? obj[s[i]] += 1 : obj[s[i]] =1
//     }
//     let arr=[]
//     for(let num in obj){
//         arr.push([num,obj[num]])
//     }
//     arr.sort((a,b)=>b[1]-a[1])
//     console.log(arr)
//     for(let num in arr){
//         answer.push(+arr[num][0])
//     }
//     return answer;
// }

const tupleFrom = (str) =>
  str.slice(2, -2).split('},{')
    .map((it) => toNumbers(it))
    .sort(accendingByLength)
    .reduce((acc, cur) =>
      [...acc, ...cur.filter((it) => !acc.includes(it))], []);

const toNumbers = (str) => str.split(',').map(it => Number(it));

const accendingByLength = (arr1, arr2) => arr1.length - arr2.length;

const solution = (s) => tupleFrom(s);