function solution(fees, records) {
    const [baseTime,baseFee,overTime,overFee] = fees;
    const carObj ={}
    const lastTime = 23*60+59;
    
    const calcPrice =(time)=>{
        if(time <= baseTime) return baseFee
        const calcTime = time - baseTime;
        return baseFee + Math.ceil(calcTime / overTime) * overFee;
    }
    
    const calcTime =(time)=>{
        const [HH,MM] = time.split(':')
        return parseInt(HH) * 60 + parseInt(MM)
    }
    
    records.forEach((record)=>{
        const [time,id,type] = record.split(' ')
        const minTime = calcTime(time)
        
        carObj[id] = carObj[id] || {times:0,state:null}
        if(type === "IN") {
            carObj[id].state = minTime
        }else{
            carObj[id].times += minTime-carObj[id].state
            carObj[id].state=null
        }
    })
    const ids = Object.keys(carObj).sort((a,b)=> +a-b)
    
    
    return ids.map((id)=>{
        if(carObj[id].state !== null){
            carObj[id].times += lastTime - carObj[id].state
        }
        return calcPrice(carObj[id].times)
    })
}
