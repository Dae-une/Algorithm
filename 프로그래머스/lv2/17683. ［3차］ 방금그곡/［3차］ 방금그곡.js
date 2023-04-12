function solution(m, musicinfos) {
    
      const arr =[]
       musicinfos.map((music)=>{
        const [start,end,title,code] = music.split(',');
        const runTime =calcRuntime(start,end)
        if(checkMusic(runTime,code,m)){
            arr.push([title,runTime])
        }
       })
    
    if(arr.length === 0){
        return '(None)'
    }
    if(arr.length ===1){
        return arr[0][0]
    }else{
        let maxTime=0;
        let answer =''
       for(let i =0; i<arr.length;i++){
           if(maxTime <arr[i][1]){
               maxTime =arr[i][1]
               answer =arr[i][0]
           }
       }
        return answer
    }
}

function checkMusic(runTime,code,target){
    const newTarget =target
    .replace(/(C#)/g, "c")
    .replace(/(D#)/g, "d")
    .replace(/(F#)/g, "f")
    .replace(/(G#)/g, "g")
    .replace(/(A#)/g, "a");
    const newCode =code
    .replace(/(C#)/g, "c")
    .replace(/(D#)/g, "d")
    .replace(/(F#)/g, "f")
    .replace(/(G#)/g, "g")
    .replace(/(A#)/g, "a");
    
    let str ='';
    
    const repeatCount = parseInt(runTime/newCode.length);
    if(repeatCount === 0){
        str = newCode.substring(0,runTime)
    }else{
        str =newCode.repeat(repeatCount)+ newCode.substring(0,runTime- newCode.length * repeatCount);
    }
    if(str.indexOf(newTarget) >-1){
        return true
    }
    return false
}


function calcRuntime(start,end){
     const hour =parseInt(end.substring(0,2))-parseInt(start.substring(0,2));
     const minute =parseInt(end.substring(3))-parseInt(start.substring(3));
     const runtime = (hour *60) +minute;
     return runtime;
}