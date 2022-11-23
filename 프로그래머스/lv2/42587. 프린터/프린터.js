function solution(priorities, location) {
    var answer = 0;
    const pri = priorities.map((item,idx) => [item,idx])
    console.log(pri)
    let arr =[]
    let count =0;

    while(pri.length >0){
        let temp = pri.shift()
        if( pri.some((a)=> temp[0] < a[0])){
            pri.push(temp)
        }else{
            arr.push(temp)
            if(arr[count][1] === location ) break;
            count++
        }
    }
        
    return count+1;
}