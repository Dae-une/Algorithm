function solution(plans) {
    const stack =[]
    
    const sortedPlans= plans.map(([title,time,count])=>
                                 [title,timeToMinute(time),Number(count)]).sort((a,b)=> a[1] -b[1])
    

    while(sortedPlans.length){
        const [title,time,count]= sortedPlans.shift();
        
        stack.forEach((val,idx)=>{
            if(time < val[1])stack[idx][1] +=count;
        })
        
        stack.push([title,time+count]);
    }
    return stack.sort((a,b)=>(a[1]-b[1])).map((el)=>el[0])
}

function timeToMinute(str){
    const [hour,minute] = str.split(":").map((el)=>Number(el));
    return hour * 60 + minute;
}