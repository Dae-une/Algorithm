// function solution(numbers) {
//     var answer = [];
//     numbers.forEach((number,index)=>{
//         let result = -1
            
//         for(let i =index+1; i <numbers.length;i++){
//             if(number <numbers[i]){
//                 result = numbers[i]
//                 break;
//             }
//         }
//         answer.push(result)
//     })
    
//     return answer;
// }
                    
function solution(numbers) {
  const answer = Array(numbers.length).fill(-1);
  const stack = [];
  for (let i = 0; i < numbers.length; i++) {
    while (stack && numbers[stack.at(-1)] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return answer;
}