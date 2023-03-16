
function solution(new_id) {
  let answer = new_id.toLowerCase().replace(/[^0-9a-z._-]/g,"").replace(/\.+/g,".").replace(/^\.|\.$/g,"").replace(/^$/,"a").slice(0,15).replace(/\.$/,"");
    
    if(answer.length ===1) answer = answer[0].repeat(3)
    if(answer.length ===2) answer = answer + answer[1]
  return answer;
}

