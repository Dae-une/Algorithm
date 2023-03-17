function solution(priorities, location) {
  var answer = 0;
    const pri = priorities.map((num,idx)=> [num,idx])
    const printed =[]
    console.log(pri)
        while(true){
        const current = pri[0]
        pri.shift();
        if(pri.some((a)=>a[0] >current[0])){
            pri.push(current)
        }else{
            printed.push(current)
            if(printed[printed.length-1][1] === location){
            break;
        }
        }
    }
    return printed.length;
}